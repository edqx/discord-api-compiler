const fs = require("fs/promises");
const path = require("path");
const util = require("util");
const removeMd = require("remove-markdown");

function parse_table(table_text) {
    // console.log(table_text);
    const parsed_table = [];
    const lines = table_text.trim().split("\n");
    const headers = lines.shift().split(/ *\| */g).filter(_ => _);
    lines.shift();

    for (const line of lines) {
        const cells = line.split(/ *\| */g).filter(_ => _);
        const parsed_cell = {};
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            parsed_cell[headers[i].toLowerCase()] = cell;
        }
        parsed_table.push(parsed_cell);
    }
    return parsed_table;
}

function is_section_line_child(depth, line) {
    const hashes = line.match(/^\#+/g)?.[0] || "";

    if (!hashes)
        return true;

    if (hashes.length > depth.length) {
        return true;
    }

    return false;
}

function parse_section_recursive(text, depth = "#") {
    const parsed = {};
    const lines = text.split("\n");

    parsed.body = "";
    parsed.title = lines.shift()?.replace(/^#+/g, "");
    parsed.tables = [];
    parsed.children = [];
    parsed.code = [];
    
    parsed.notes = [""];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const hashes = line.match(/^\#+/g)?.[0] || "";

        if (line.startsWith("> ")) {
            const note_lines = [];
            while (i < lines.length && lines[i].startsWith("> ")) {
                note_lines.push(lines[i]);
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

function parse_raw_request(title) {
    const [ endpoint_name, full_request ] = title.split(" % ");
    const [ verb, endpoint ] = full_request.split(" ");

    const code_friendly_name = endpoint_name
        .split(" ")
        .map(word => word.split("/")[1] || word.split("/")[0])
        .join("")
        .replace(/\W/g, "");

    const parsed_endpoint = parse_endpoint_parts(endpoint);

    return {
        name: code_friendly_name,
        verb,
        endpoint: parsed_endpoint
    };
}

function recursive_find_request_sections(requests, sections) {
    for (const section of sections) {
        if (section.title.includes(" % ")) {
            requests.push(section);
        }
        recursive_find_request_sections(requests, section.children);
    }
}

function format_comment(comment) {
    const stripped = removeMd(comment);

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

    return lines;
}

function serialize_request(request, section) {
    const example = section.children.find(child => child.title.includes("Example"));

    const description = format_comment(
        section.body
            .split("\n")
            .filter(ln => !ln.endsWith("format:"))
            .join("\n")
    ).join("\n * ");

    const comment = description
        + (example
            ? "\n * @example\n * "
                + example.code[0]
                    .split("\n")
                    .join("\n * ")
            : ""
        )

    return (comment ? "/**\n * " + comment + "\n */\n" : "")
        + request.name + ": "
        + "("
        + request.endpoint.
            filter(part =>
                part.type === "param"   
            )
            .map(part => part.name + ": string")
            .join(", ")
        + ") => `/"
        + request.endpoint.map(part =>
            part.type === "param"
                ? "${" + part.name + "}"
                : part.name
        ).join("/") + "`";
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

    console.log(
        "export const Endpoints = {\n"
        + output.map(endpoint => endpoint
                .split("\n")
                .map(ln => "    " + ln)
                .join("\n")
            ).join(",\n")
        + "\n}"
    );
    
    // console.log(util.inspect(sections, false, 20, false));
})();