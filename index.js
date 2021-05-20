const fs = require("fs/promises");
const path = require("path");
const removeMarkdown = require("remove-markdown");
const larg = require("larg");

const args = larg(process.argv.slice(2));

const INDENT = args.indent === "tabs"
    ? "\t"
    : " ".repeat(args.indent || 4);

const NO_TYPES = args["no-types"];
const NO_PARAM_TYPES = args["no-param-types"] || NO_TYPES;
const NO_COMMENTS = args["no-comments"];
const NO_EXAMPLES = args["no-examples"] || NO_COMMENTS;

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
    const hashes = line.match(/^\#+/g)?.[0] || "";

    if (!hashes)
        return true;

    if (hashes.length > depth.length) {
        return true;
    }

    return false;
}

/**
 * @typedef ParsedSection
 * @property {String} body The ordinary text in the section.
 * @property {String} title The title of the section.
 * @property {Array<ParsedTable>} tables The tables in the section.
 * @property {Array<ParsedSection>} children The child sections in this section.
 * @property {Array<String>} code The codeblocks in this section.
 */

/**
 * Parse a section of markdown.
 * @param {String} text The markdown to parse including the section header.
 * @returns {ParsedSection} The parsed section.
 */
function parse_section_recursive(text) {
    const parsed = {};
    const lines = text.split("\n");

    parsed.body = "";
    parsed.title = lines.shift()?.replace(/^#+/g, "");
    parsed.tables = [];
    parsed.children = [];
    parsed.code = [];
    
    const depth = parsed.title.match(/^\#+/g)?.[0] || "";
    
    parsed.notes = [""];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const hashes = line.match(/^\#+/g)?.[0] || "";

        if (line.startsWith("> ")) {
            const note_lines = [];
            while (i < lines.length && lines[i].startsWith("> ")) {
                note_lines.push(lines[i].substr(2));
                i++;
            }
            const note_text = note_lines.join("\n");
            parsed.notes.push(note_text);
            i--;
        } else if (line.includes("```")) {
            const code_lines = [];
            code_lines.push(lines[i]);
            i++;
            while (i < lines.length && !lines[i].includes("```")) {
                code_lines.push(lines[i]);
                i++;
            }
            code_lines.push(lines[i]);
            const code_text = code_lines.join("\n");
            parsed.code.push(code_text);
        } else if (line.startsWith("|")) {
            const table_lines = [];
            while (i < lines.length && lines[i].startsWith("|")) {
                table_lines.push(lines[i]);
                i++;
            }
            if (!table_lines[1] || !table_lines[1].startsWith("| -")) {
                parsed.body += lines[i] + "\n";
                continue;
            }
            const table_text = table_lines.join("\n");
            parsed.tables.push(parse_table(table_text));
            i--;
        } else if (hashes.length > depth.length) {
            const child_lines = [];
            child_lines.push(lines[i]);
            i++;
            let in_code = false;
            while (i < lines.length && (is_section_line_child(hashes, lines[i]) || in_code)) {
                if (lines[i].includes("```")) {
                    in_code = !in_code;
                }
                child_lines.push(lines[i]);
                i++;
            }
            const child_text = child_lines.join("\n");
            parsed.children.push(parse_section_recursive(child_text, hashes));
            i--;
        } else {
            parsed.body += lines[i] + "\n";
        }
    }
    parsed.notes = parsed.notes.map(note => note.trim()).filter(note => note);

    return {
        body: parsed.body.trim(),
        title: parsed.title.trim(),
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

        if (char === "{") {
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
            const [ param_name ] = trimmed.split("#");
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
 * @property {String} name The name of the request in a code-friendly format.
 * @property {String} verb The verb that the request uses.
 * @property {String} endpoint The endpoint of the request.
 */

/**
 * Parse a full discord api request description.
 * @param {String} request_text The request to parse.
 * @returns {ParsedRequest}
 */
function parse_raw_request(request_text) {
    const [ endpoint_name, full_request ] = request_text.split(" % ");
    const [ verb, endpoint ] = full_request.split(" ");

    const code_friendly_name = endpoint_name
        .split(" ")
        .map(word => word.split("/")[0])
        .join("")
        .replace(/\W/g, "");

    const parsed_endpoint = parse_endpoint_parts(endpoint);

    return {
        name: code_friendly_name,
        verb,
        endpoint: parsed_endpoint
    };
}

/**
 * Recursively search markdown sections and their children for those that describe a REST request.
 * @param {Array<ParsedSection>} requests The array to collect request sections.
 * @param {Array<ParsedSection>} sections The sections to search.
 */
function recursive_find_request_sections(requests, sections) {
    for (const section of sections) {
        if (section.title.includes(" % ")) {
            requests.push(section);
        }
        recursive_find_request_sections(requests, section.children);
    }
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

const known_types = {
    "string": "string"
};

const custom_types = {
    "snowflake": "string",
    "integer": "number",
    "float": "number"
};

function replace_discord_type(type) {
    if (type.startsWith("array of")) {
        const partial = type.startsWith("array of partial");
        
        if (type.endsWith("objects")) {
            type = type.substr(0, type.length - 7);
        }

        if (partial) {
            type = type.substr(15);
        } else {
            type = type.substr(8);
        }

        const replaced = replace_discord_type(type);

        return (partial
            ? "Partial<" + replaced + ">"
            : replaced)
            + "[]";
    }

    if (known_types[type])
        return known_types[type];

    const custom = custom_types[type];
    if (custom) {
        if (!declare_types[type]) {
            declare_types[type] = custom;
        }
        return capitalize(type);
    }

    return "any";
}

/**
 * Capitalise the first character of a string.
 * @param {String} str
 */
function capitalize(str) {
    return str[0].toUpperCase()
        + str.substr(1);
}

/**
 * Convert a string to sentence case.
 * @param {String} str
 */
function sentence_case(str) {
    return capitalize(str)
        + (str.endsWith(".") ? "" : ".");
}

/**
 * @param {ParsedTable=} table
 */
function create_typescript_interface_from_table(table) {
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

            const description = format_comment(
                stripped
            ).trim();

            const field = row.field.includes("?")
                ? row.field.replace(/\?/g, "") + "?"
                : row.field;

            return INDENT + prepend_comment_lines(
                (NO_COMMENTS ? "" : "/**\n * "
                + sentence_case(description)
                + "\n */\n")
                + field + ": " + replace_discord_type(row.type) + ";",
                
                INDENT
            );
        }).join("\n")
        + "\n}";
}

/**
 * Convert a documented request into a typescript endpoint definition.
 * @param {ParsedRequest} request The request to serialise. 
 * @param {ParsedSection} section The section of the request to serialise. 
 * @returns {String} The serialised request.
 */
function serialize_request(request, section) {
    const examples = section.children.filter(child => child.title.includes("Example"));

    const description = format_comment(
        removeMarkdown(
            section.body
                .split("\n")
                .filter(ln => !ln.endsWith("format:"))
                .join("\n")
        )
    ).trim();

    const comment_parts = [
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
    ]

    const comment = comment_parts.join("\n * \n * ");

    const parameters = section.children.find(child => child.title.includes("JSON"))?.tables?.[0];
    const query = section.children.find(child => child.title.includes("Query String"))?.tables?.[0];

    return (NO_COMMENTS ? "" : (comment ? "/**\n * " + comment + "\n */\n" : ""))
        + request.name + ": "
        + "(("
        + request.endpoint.
            filter(part =>
                part.type === "param"   
            )
            .map(part => part.name + (NO_TYPES ? "" : ": string"))
            .join(", ")
        + ") => `/"
        + request.endpoint.map(part =>
            part.type === "param"
                ? "${" + part.name + "}"
                : part.name
        ).join("/") + "`)"
        + (NO_PARAM_TYPES
            ? ""
            : " as DeclareEndpoint<"
                + create_typescript_interface_from_table(parameters)
                + ", "
                + create_typescript_interface_from_table(query)
                + ">"
        );
}

(async () => {
    const files = [];
    const sections = [];
    
    const base_path = path.resolve(__dirname, "./discord-api-docs/docs");

    await recursive_get_files(files, base_path);

    for (const file of files) {
        const data = await fs.readFile(file, "utf8");
        const section = parse_section_recursive(data);
        sections.push(section);
    }

    const request_sections = [];
    recursive_find_request_sections(request_sections, sections);

    let output = [];

    for (const section of request_sections) {
        output.push(serialize_request(
            parse_raw_request(section.title),
            section
        ));
    }

    console.log(`${!NO_PARAM_TYPES ? `type DeclareEndpoint<
${INDENT}JSONParams extends Record<string, any> = {},
${INDENT}QueryParams extends Record<string, any> = {}
> = (...args: string[]) => string;` : ``}

${Object.entries(declare_types).map(([ discordType, declareType ]) => {
    return `type ${capitalize(discordType)} = ${declareType};`;
}).join("\n")}

export const ApiEndpoints = {
${output.map(endpoint => endpoint
    .split("\n")
    .map(ln => INDENT + ln)
    .join("\n")
).join(",\n")}
}`.trim()
    );
    
    // console.log(util.inspect(sections, false, 20, false));
})();