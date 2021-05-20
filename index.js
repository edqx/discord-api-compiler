const fs = require("fs/promises");
const path = require("path");
const mkdirp = require("mkdirp");
const removeMarkdown = require("remove-markdown");
const larg = require("larg");

const args = larg(process.argv.slice(2));

const INDENT = args.indent === "tabs"
    ? "\t"
    : " ".repeat(args.indent || 4);

const NAMESPACE = args.namespace || "ApiEndpoint";
const PREPEND = args.prepend || "";
const OUTPUT_FILE = args.output || "console";

const ENCODE_URI = args["encode-uri"];
const NO_LINKS = args["no-links"];
const NO_TYPES = args["no-types"];
const NO_INLINE_TYPES = args["no-inline-types"];;
const NO_RETURN_TYPES = args["no-return-types"] || NO_TYPES;
const NO_REQUEST_TYPES = args["no-request-types"] || NO_TYPES;
const NO_COMMENTS = args["no-comments"];
const NO_EXAMPLES = args["no-examples"] || NO_COMMENTS;
const NO_STRUCTURES = args["no-structures"] || NO_TYPES;
const EXPORT_TYPES = args["export-types"];
const SPLIT_FILES = args["split-files"];

/**
 * Splits a markdown table row by each column to access the values of each cell.
 * @param {String} row_text The markdown to parse. 
 * @returns An array of cells.
 */
function parse_row(row_text) {
    return row_text
        .split(/ *\| */g) // Split the row into each column.
        .filter(_ => _);
}

/**
 * @typedef {Array<{ [ key: string ]: string }>} ParsedTable
 */

/**
 * Parse a markdown table into an array of 
 * @param {String} table_text The markdown to parse. 
 * @returns {Array<ParsedTable>} The table as an array of rows.
 */
function parse_table(table_text) {
    const parsed_table = [];
    const lines = table_text.trim().split("\n");
    const headers = parse_row(lines.shift()); // Remove and parse the first line of the table, which is always the row declaring the headers.

    lines.shift(); // Remove the next line of the table, which is always to split the headers and the rows, i.e. | ---- | ---- | ---- |

    for (const line of lines) {
        const cells = parse_row(line);

        const parsed_cell = {};
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            parsed_cell[headers[i].toLowerCase()] = cell; // Use the headers as the keys for the each row.
        }
        parsed_table.push(parsed_cell);
    }
    return parsed_table;
}

/**
 * Check if a markdown section is the child of another section.
 * @param {String} depth The hashes on the parent section. 
 * @param {String} line The line of the child section header to check. 
 * @returns {Boolean}
 */
function is_section_line_child(depth, line) {
    const hashes = line.match(/^\#+/g)?.[0] || ""; // Get the hashes at the start of the line

    if (!hashes)
        return true;

    if (hashes.length > depth.length) {
        return true;
    }

    return false;
}

/**
 * @typedef ParsedSection
 * @property {ParsedSection} parent The section's parent section.
 * @property {String} file The file that the section was found in relative to the base docs directory.
 * @property {String} body The ordinary text in the section.
 * @property {String} title The title of the section.
 * @property {Array<ParsedTable>} tables The tables in the section.
 * @property {Array<ParsedSection>} children The child sections in this section.
 * @property {Array<String>} code The codeblocks in this section.
 */

/**
 * Parse a section of markdown.
 * @param {String} file The file that the section was found in.
 * @param {String} text The markdown to parse including the section header.
 * @returns {ParsedSection} The parsed section.
 */
function parse_section_recursive(file, text, parent) {
    const parsed = {};
    const lines = text.split("\n");

    const header = lines.shift();

    parsed.body = "";
    parsed.title = header?.replace(/^#+ /g, "");
    parsed.tables = [];
    parsed.children = [];
    parsed.code = [];
    
    const file_part = [
        "#DOCS",
        ...file.split(".")[0].split(path.sep)
    ].join("_").toUpperCase();

    let hash_part = "";

    if (parent?.hashes === 3) {
        hash_part += parent.link.split("/")[1] + "-";
    }

    hash_part += parsed.title.toLowerCase().replace(/ /g, "-");
    parsed.link = file_part + "/" + hash_part;
    
    const depth = header.match(/^\#+/g)?.[0] || "";
    parsed.hashes = depth.length;
    
    parsed.notes = [""];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const hashes = line.match(/^\#+/g)?.[0] || "";

        if (line.startsWith("> ")) { // Check for bubbled "notes".
            const note_lines = [];
            while (i < lines.length && lines[i].startsWith("> ")) { // Capture all lines until the end of the note
                note_lines.push(lines[i].substr(2));
                i++;
            }
            const note_text = note_lines.join("\n");
            parsed.notes.push(note_text);
            i--;
        } else if (line.startsWith("```")) { // Check if the line is the start of a code block
            const code_lines = [];
            code_lines.push(lines[i]);
            i++;
            while (i < lines.length && !lines[i].includes("```")) { // Capture all lines until the end of the code block
                code_lines.push(lines[i]);
                i++;
            }
            code_lines.push(lines[i]);
            const code_text = code_lines.join("\n");
            parsed.code.push(code_text);
        } else if (line.startsWith("|")) { // Check if the line is part of a table
            const table_lines = [];
            while (i < lines.length && lines[i].startsWith("|")) { // Capture all lines until the end of the table
                table_lines.push(lines[i]);
                i++;
            }
            if (!table_lines[1] || /\| *-/.test(!table_lines[1])) { // Check if the table was actually not a table at all (prank)
                parsed.body += table_lines[0] + "\n";
                parsed.body += table_lines[1] + "\n";
                continue;
            }
            const table_text = table_lines.join("\n");
            parsed.tables.push(parse_table(table_text));
            i--;
        } else if (hashes.length > depth.length) { // Check if the line is a child section
            const child_lines = [];
            child_lines.push(lines[i]);
            i++;
            let in_code = false;
            while (i < lines.length && (is_section_line_child(hashes, lines[i]) || in_code)) { // Repeat until the child section reaches another higher up section
                if (lines[i].includes("```")) { // Check for code blocks in case those code blocks contain # as part of a comment (python moment)
                    in_code = !in_code;
                }
                child_lines.push(lines[i]);
                i++;
            }
            const child_text = child_lines.join("\n");
            parsed.children.push(parse_section_recursive(file, child_text, parsed));
            i--;
        } else {
            parsed.body += lines[i] + "\n";
        }
    }
    parsed.notes = parsed.notes.map(note => note.trim()).filter(note => note);

    return {
        file,
        link: parsed.link,
        body: parsed.body.trim(),
        title: parsed.title.trim(),
        hashes: parsed.hashes,
        tables: parsed.tables,
        children: parsed.children,
        notes: parsed.notes,
        code: parsed.code
    };
}

/**
 * Recursively fetch every documentation file.
 * @param {Array<String>} arr The array to collect files. 
 * @param {String} dir The directory to start from. 
 */
async function recursive_get_files(arr, dir) {
    const files = await fs.readdir(dir);

    for (const file of files) {
        const resolved = path.resolve(dir, file);

        const stat = await fs.stat(resolved);
    

        if (stat.isDirectory()) {
            await recursive_get_files(arr, resolved);
        } else {
            arr.push(resolved);
        }
    }
}

/**
 * Split an endpoint path into each part.
 * @param {String} endpoint The endpoint to split. 
 * @returns {Array<String>} The parts of the endpoint.
 */
function split_endpoint(endpoint) {
    const parts = [];
    let in_param = false;
    let build = "";

    for (const char of endpoint) {
        if (char === "/" && !in_param) {
            parts.push(build);
            build = "";
            continue;
        }

        if (char === "{") { // Sometimes the parameters has slashes inside of them which can confuse the normal .split("") function
            in_param = true;
        } else if (char === "}") {
            in_param = false;
        }
        build += char;
    }
    parts.push(build);

    return parts;
}

/**
 * @typedef ParsedEndpointPart
 * @property {"param"|"part"} type
 * @property {String} name
 */

/**
 * Parse an endpoint path to multiple parts of either a swappable parameter or a fixed syntax part.
 * @param {String} endpoint The endpoint to parse.
 * @returns {Array<ParsedEndpointPart>}
 */
function parse_endpoint_parts(endpoint) {
    const parts = split_endpoint(endpoint);
    const parsed = [];

    for (const part of parts) {
        if (!part)
            continue;

        if (part[0] === "{") {
            const trimmed = part.substr(1, part.length - 2);
            const [ param_name ] = trimmed.split("#"); // Remove the link at the end of the parameter, and just keep the parameter name/identifier.
            const serialized = param_name.replace(/\./g, "");
            parsed.push({ type: "param", name: serialized });
        } else {
            parsed.push({ type: "part", name: part });
        }
    }

    return parsed;
}

/**
 * @typedef ParsedRequest
 * @property {String} name The name of the request.
 * @property {String} verb The verb that the request uses.
 * @property {String} endpoint The endpoint of the request.
 */

/**
 * Parse a full discord api request description.
 * @param {String} request_text The request to parse.
 * @returns {ParsedRequest}
 */
function parse_raw_request(request_text) {
    // Create Message % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages

    const [ endpoint_name, full_request ] = request_text.split(" % ");
    const [ verb, endpoint ] = full_request.split(" ");

    const parsed_endpoint = parse_endpoint_parts(endpoint);

    return {
        name: endpoint_name,
        verb,
        endpoint: parsed_endpoint
    };
}

/**
 * Recursively search markdown sections and their children for those that match a filter.
 * @param {Array<ParsedSection>} arr The array to collect sections. 
 * @param {Array<ParsedSection>} sections The sections to search through. 
 * @param {(section: ParsedSection) => Boolean} fn The filter to use for searching.
 */
function recursive_find_sections(arr, sections, fn) {
    for (const section of sections) {
        if (fn(section)) {
            arr.push(section);
        }
        recursive_find_sections(arr, section.children, fn);
    }
}

/**
 * Recursively search markdown sections and their children for those that describe a REST request.
 * @param {Array<ParsedSection>} requests The array to collect request sections.
 * @param {Array<ParsedSection>} sections The sections to search.
 */
function recursive_find_request_sections(requests, sections) {
    recursive_find_sections(requests, sections, section => section.title.includes(" % "));
}

function find_link_to_section(sections, link) {
    const url = link.match(/(?<=\().+?(?=\))/g);

    if (!url)
        return null;

    const found = [];
    recursive_find_sections(found, sections, section => {
        if (section.link !== url[0])
            return false;

        return true;
    });

    return found;
}

/**
 * Prepend each line of a multi-line comment with a JSDoc-compliant * prefix.
 * @param {String} comment The comment to prepend. 
 * @returns {String} The new comment
 */
function prepend_comment_lines(comment, prepend = " * ") {
    return comment
        .split("\n")
        .join("\n" + prepend);
}

/**
 * Format a comment with long lines into a comment with a max line length of ~80 (adjusting to not split words)
 * @param {String} comment The comment to format.
 * @returns {String} The formatted comment.
 */
function format_comment(comment) {
    const stripped = comment;

    const lines = [];
    const parts = stripped.split("\n\n");

    for (const part of parts) {
        let length = part.length;
        const words = part.split(/\s/g);
    
        while (length > 0) {
            let line = "";
    
            while (line.length < 80 && words.length) {
                line += " " + words.shift().trim();
            }
            lines.push(line.trim());
            length -= line.length;
        }
        lines.push("");
    }

    lines.pop();

    return prepend_comment_lines(lines.join("\n"));
}

const note_types = ["warn", "info", "danger"];

const declare_types = {};
const declare_enums = {};
const declare_structures = {};

const known_types = {
    "string": "string",
    "boolean": "boolean",
    "int": "number",
    "integer": "number",
    "float": "number",
    "null": "null"
};

const custom_types = {
    "Snowflake": "string",
    "ISO8601Timestamp": "string",
    "Binary": "string",
    "FileContent": "string",
    "ImageData": "string",
    "GuildFeature": "string"
};

function replace_discord_type(sections, type) {
    const is_nullable = type.startsWith("?");

    if (is_nullable) {
        type = type.substr(1);
        return replace_discord_type(sections, type) + "|null";
    }

    if (type.endsWith("s")) {
        type = type.substr(0, type.length - 1);
    }
    
    if (type.endsWith(" objects")) {
        type = type.substr(0, type.length - 8);
    }
    
    if (type.endsWith(" object")) {
        type = type.substr(0, type.length - 7);
    }

    const is_array = type.startsWith("array of ");
    const is_list = type.startsWith("list of ");

    if (is_array) type = type.substr(9);
    if (is_list) type = type.substr(8);

    if (is_array || is_list) {
        const replaced = replace_discord_type(sections, type);
        return replaced.includes("|")
            ? "(" + replaced + ")[]"
            : replaced + "[]"
    }

    const is_partial = type.startsWith("partial ");

    if (is_partial) {
        type = type.substr(7);
    }
    
    const trimmed = type.replace(/\(.+?\)/g, "").trim();
    if (known_types[trimmed])
        return known_types[trimmed];

    if (NO_STRUCTURES)
        return "any";

    const returns_object = type
        ? find_link_to_section(sections, type)?.[0]
        : null;

    const returns_structure = returns_object?.children
        ?.find(child =>
            child?.title
                ?.includes?.("Structure")
            ) 
        || returns_object;

    const code_friendly_returns_object_name = returns_structure
        ? make_code_friendly(returns_structure.title)
        : null;

    const returns_table = returns_structure?.tables?.[0];

    if (returns_table && returns_table?.[0]?.field) {
        declare_structures[code_friendly_returns_object_name] = {
            table: returns_table,
            section: returns_object
        };
        return PREPEND + code_friendly_returns_object_name;
    }

    if (returns_table && returns_table?.[0]?.name && returns_table?.[0]?.value) {
        declare_enums[code_friendly_returns_object_name] = {
            table: returns_table,
            section: returns_object
        };
        return PREPEND + code_friendly_returns_object_name;
    }
    
    const replaced = capitalize(removeMarkdown(type)).replace(/ /g, "");
    const custom = custom_types[replaced];
    if (custom) {
        declare_types[replaced] = custom; // Mark as needing to be declared.
        return PREPEND + replaced;
    }

    return "any";
}

/**
 * Capitalise the first character of a string.
 * @param {String} str
 */
function capitalize(str) {
    return str.replace(/\b\w/g, x => x.toUpperCase());
}

/**
 * Convert a string to sentence case.
 * @param {String} str
 */
function sentence_case(str) {
    return str[0].toUpperCase()
        + str.substr(1)
        + (str.endsWith(".") ? "" : ".");
}

/**
 * @param {ParsedTable=} table
 */
function create_typescript_interface_from_table(sections, table) {
    if (!table)
        return "{}";

    if (!table.length)
        return "{}";

    return "{\n"
        + table.map(row => {
            let stripped = removeMarkdown(row.description);

            if (row.permission) {
                stripped += "\n\nRequires " + row.permission;
            }

            if (row.description.startsWith("value of ")) {
                row.type = row.description.substr(9);
            }

            const description = format_comment(
                stripped
            ).trim();

            const field = row.field.includes("?")
                ? row.field.replace(/(\?)|((\\)?\*)/g, "").trim() + "?"
                : row.field;

            return INDENT + prepend_comment_lines(
                (NO_COMMENTS ? "" : "/**\n * "
                + sentence_case(description)
                + "\n */\n")
                + field.trim() + ": " + replace_discord_type(sections, row.type) + ";",
                
                INDENT
            );
        }).join("\n")
        + "\n}";
}

function make_code_friendly(name) {
    return name
        .split(" ")
        .map(word => word.split("/")[0])
        .join("")
        .replace(/\W/g, "");;
}

function create_comment(description, section) {
    if (NO_COMMENTS)
        return "";

    const url_path = section.file
        .split(path.sep)
        .join(path.posix.sep)
        .toLowerCase()
        .split(".")[0]
        .replace(/_/g, "-");
        
    const link = "https://discord.com/developers/docs/" + url_path + "#" + section.title.toLowerCase().replace(/ /g, "-");

    const examples = section.children.filter(child => child.title.includes("Example"));
    
    const comment_parts = [
        ...(NO_LINKS ? [] : [ link ]),
        ...(description ? [ description ] : []),
        ...section.notes
            .map(note => {
                const stripped = removeMarkdown(
                    note
                        .split("\n")
                        .filter(ln => !note_types.includes(ln))
                        .join("\n")
                );

                return stripped
                    ? format_comment(stripped)
                    : "";  
            }),
        ...(NO_EXAMPLES ? [] : examples.map(example =>
            "@example\n * "
                + prepend_comment_lines(example.code[0])
        ))
    ];
    
    const comment = comment_parts.join("\n * \n * ");

    return comment ? "/**\n * " + comment + "\n */\n" : "";
}

/**
 * Convert a documented request into a typescript endpoint definition.
 * @param {Array<ParsedSection>} sections Every other parsed section (used for links).
 * @param {ParsedRequest} request The request to serialise. 
 * @param {ParsedSection} section The section of the request to serialise. 
 * @returns {String} The serialised request.
 */
function serialize_request(sections, request, section) {
    const code_friendly_name = make_code_friendly(request.name);

    const returns = /returns(`\d+` and )?( an?)? ((.+) object(s?))/gi.exec(section.body);
    let return_type_name = returns?.[2]
        ? replace_discord_type(sections, returns[2])
        : null;

    const description = format_comment(
        removeMarkdown(
            section.body
                .split("\n")
                .filter(ln => !ln.endsWith("format:"))
                .join("\n")
        )
    ).trim();
    
    section.title = request.name;

    const parameters_table = section.children.find(child => child.title.includes("JSON"))?.tables?.[0];
    let parameters_type_name = null;
    const query_table = section.children.find(child => child.title.includes("Query String"))?.tables?.[0];
    let query_type_name = null;

    const response_table = NO_RETURN_TYPES
        ? null
        : section.children
            .find(child =>
                child.title
                .includes("Response")
            )?.tables?.[0];

    if (NO_INLINE_TYPES && !return_type_name && response_table) {
        const interface_name = code_friendly_name + "Response";
        declare_structures[interface_name] = {
            table: response_table,
            section: null
        };
        return_type_name = interface_name;
    }

    if (NO_INLINE_TYPES && parameters_table) {
        const interface_name = code_friendly_name + "Request";
        declare_structures[interface_name] = {
            table: parameters_table,
            section: null
        };
        parameters_type_name = interface_name;
    }

    if (NO_INLINE_TYPES && query_table) {
        const interface_name = code_friendly_name + "Query";
        declare_structures[interface_name] = {
            table: parameters_table,
            section: null
        };
        query_type_name = interface_name;
    }

    let result = "";

    result += create_comment(description, section);
    result += code_friendly_name + ": ";
    result += NO_REQUEST_TYPES ? "(" : "((";
    result += request.endpoint.
        filter(part =>
            part.type === "param"   
        )
        .map(part => part.name + (NO_TYPES ? "" : ": string"))
        .join(", ");

    result += ") => `/";

    result += request.endpoint.map(part =>
        part.type === "param"
            ? ENCODE_URI
                ? "${encodeURIComponent(" + part.name + ")}"
                : "${" + part.name + "}"
            : part.name
        ).join("/") + "`";

    result += NO_REQUEST_TYPES
        ? ""
        : ") as DeclareEndpoint<"
            + (
                parameters_type_name ||
                (parameters_table
                    ? create_typescript_interface_from_table(sections, parameters_table)
                    : null
                ) ||
                "{}"
            ) + ", "
            + (
                query_type_name ||
                (query_table
                    ? create_typescript_interface_from_table(sections, query_table)
                    : null
                ) ||
                "{}"
            ) + ", "
            + (
                return_type_name ||
                (response_table
                    ? create_typescript_interface_from_table(sections, response_table)
                    : null
                ) ||
                "{}"
            )
            + ">";

    return result;
}

(async () => {
    const files = [];
    const sections = [];
    
    const base_path = path.resolve(__dirname, "./discord-api-docs/docs");

    await recursive_get_files(files, base_path);

    for (const file of files) {
        const data = await fs.readFile(file, "utf8");
        const section = parse_section_recursive(path.relative(base_path, file), data);
        sections.push(section);
    }

    const request_sections = [];
    recursive_find_request_sections(request_sections, sections);

    let requests = [];

    for (const section of request_sections) {
        requests.push(serialize_request(
            sections,
            parse_raw_request(section.title),
            section
        ));
    }

    let before = Object.keys(declare_structures).length;
    Object.entries(declare_structures).forEach(([ , { table: structureTable } ]) => {
        create_typescript_interface_from_table(sections, structureTable);
    });
    let after = Object.keys(declare_structures).length;

    while (after > before) {
        before = after;
        Object.entries(declare_structures).forEach(([ , { table: structureTable } ]) => {
            create_typescript_interface_from_table(sections, structureTable);
        });
        after = Object.keys(declare_structures).length;
    }

    if (!SPLIT_FILES) {
        const parts = [
            ...(NO_REQUEST_TYPES ? [] : [`type DeclareEndpoint<
${INDENT}JSONParams extends Record<string, any> = {},
${INDENT}QueryParams extends Record<string, any> = {},
${INDENT}ResponseType extends Record<string, any> = {}
> = (...args: string[]) => string;

export type ExtractJSONParams<
${INDENT}T extends DeclareEndpoint<unknown, unknown, unknown>
> = T extends DeclareEndpoint<infer X, any, any> ? X : never

export type ExtractQueryParams<
${INDENT}T extends DeclareEndpoint<unknown, unknown, unknown>
> = T extends DeclareEndpoint<any, infer X, any> ? X: never

export type ExtractResponseType<
${INDENT}T extends DeclareEndpoint<unknown, unknown, unknown>
> = T extends DeclareEndpoint<any, any, infer X> ? X: never`]
            ),
            Object.entries(declare_types).map(([ discordType, declareType ]) => {
                let result = "";
    
                if (EXPORT_TYPES) {
                    result += "export ";
                }
    
                result += "type " + PREPEND + discordType;
                result += " = " + declareType;
    
                return result;
            }).join("\n").trim(),
            Object.entries(declare_enums).map(([ discordType, { table: structureTable, section } ]) => {
                let result = "";
    
                if (section) {
                    result += create_comment("", section);
                }
    
                if (EXPORT_TYPES) {
                    result += "export ";
                }
    
                result += "enum " + PREPEND + capitalize(discordType) + " {\n";
                result += structureTable
                    .map(row =>
                        INDENT + row.name + " = " + row.value
                    ).join(",\n");
                result += "\n}";
    
                return result;
            }).join("\n\n").trim(),
            Object.entries(declare_structures).map(([ discordType, { table: structureTable, section } ]) => {
                let result = "";
    
                if (section) {
                    result += create_comment("", section);
                }
    
                if (EXPORT_TYPES) {
                    result += "export ";
                }
    
                result += "interface " + PREPEND + capitalize(discordType) + " ";
                result += create_typescript_interface_from_table(sections, structureTable);
    
                return result;
            }).join("\n\n").trim(),
            `export const ${PREPEND}${NAMESPACE} = {
${requests.map(endpoint => endpoint
    .split("\n")
    .map(ln => INDENT + ln)
    .join("\n")
).join(",\n")}
}`
        ].filter(_ => _);
    
        const output = parts.join("\n\n");

        if (!OUTPUT_FILE || OUTPUT_FILE === "console") {
            console.log(output);
        } else {
            await fs.writeFile(OUTPUT_FILE, output, "utf8");
        }
    }

    // console.log(require("util").inspect(sections, false, 25, false));
})();