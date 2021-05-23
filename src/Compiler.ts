import path from "path";
import stripMarkdown from "remove-markdown";

import { CompilerOptions } from "./CompilerOptions";
import { OutputFile } from "./File";
import { MarkdownPart } from "./markdown/MarkdownPart";
import { linkRegex, MarkdownSection } from "./markdown/Section";
import { MarkdownTable } from "./markdown/Table";
import { EnumStructure } from "./typescript/Enum";
import { InterfaceStructure } from "./typescript/Interface";
import { BaseStructure } from "./typescript/Structure";
import { ArraySymbol } from "./typescript/symbols/Array";
import { BasicSymbol } from "./typescript/symbols/Basic";
import { NullableSymbol } from "./typescript/symbols/Nullable";
import { OrSymbol } from "./typescript/symbols/Or";
import { PartialSymbol } from "./typescript/symbols/Partial";
import { BaseSymbol } from "./typescript/symbols/Symbol";

const knownTypes: Record<string, string> = {
    "string": "string",
    "strings": "string",
    "integer": "number",
    "int": "number",
    "boolean": "boolean",
    "bool": "boolean",
    "snowflake": "string",
    "snowflakes": "string",
    "null": "null",
    "ISO8601 timestamp": "string",
    "file contents": "string",
    "binary": "string",
    "dict": "Record<string, string>",
    "image data": "string"
};

export class Compiler {
    public readonly options: CompilerOptions;

    links: Map<string, MarkdownSection>;
    
    structures: Map<string, BaseStructure>;
    files: Map<string, OutputFile>;

    constructor(options: Partial<CompilerOptions>, public readonly sections: MarkdownSection[]) {
        this.options = {
            typings: true,
            comments: true,
            ...options,
            output: {
                single_file: false,
                output_dir: "output",
                enums_output: "enums",
                structures_output: "interfaces",
                requests_output: "requests",
                responses_output: "responses",
                endpoints_output: "endpoints",
                ...options.output
            }
        };
        
        this.links = new Map;

        this.structures = new Map;
        this.files = new Map;

        this.generateLinksRecursive(this.sections);
    }

    createFile(filename: string): OutputFile {
        const cached = this.files.get(filename);
        if (cached) {
            return cached;
        }

        if (this.options.output.single_file && filename !== this.options.output.output_dir) {
            return this.createFile(this.options.output.output_dir);
        }

        const file = new OutputFile(filename + (this.options.typings ? ".ts" : ".js"));
        this.files.set(filename, file);
        return file;
    }

    resolveTable(root: MarkdownSection, headers: string[]): [ MarkdownSection, MarkdownTable<string> ]|null {
        const children = [ root, ...root.getSectionChildren() ];
    
        for (const child of children) {
            for (const table of child.getTableChildren()) {
                let flag = false;
                for (const header of headers) {
                    if (!table.hasHeader(header)) {
                        flag = true;
                        break;
                    }
                }
        
                if (flag) continue;
        
                return [ child, table ];
            }
        }
    
        return null;
    }

    addStructure(structure: BaseStructure, table: MarkdownTable<string>) {
        if (this.structures.has(structure.name))
            return structure;

        this.structures.set(structure.name, structure);

        structure.file.structures.add(structure);
        this.files.set(structure.file.filename, structure.file);

        structure.loadFromTable(table);

        return structure;
    }

    addResourceSection(section: MarkdownSection) {
        const resolvedInterface = this.resolveTable(section, [ "field", "type" ]);

        if (resolvedInterface) {
            const [ resolvedSection, table ] = resolvedInterface;
            const interfaceName = resolvedSection.title.replace(/\W/g, "");

            const cached = this.structures.get(interfaceName);

            if (cached) {
                return cached;
            }

            const file = this.createFile(
                path.join(
                    this.options.output.structures_output,
                    interfaceName
                )
            );

            const interfaceStructure = new InterfaceStructure(
                this,
                file,
                resolvedSection,
                interfaceName,
                []
            );

            return this.addStructure(interfaceStructure, table);
        }

        const resolvedEnum = this.resolveTable(section, [ "name", "value" ]) || this.resolveTable(section, [ "flag", "value" ]);
        
        if (resolvedEnum) {
            const [ resolvedSection, table ] = resolvedEnum;
            const enumName = resolvedSection.title.replace(/\W/g, "");
            
            const cached = this.structures.get(enumName);

            if (cached) {
                return cached;
            }

            const file = this.createFile(
                path.join(
                    this.options.output.enums_output,
                    enumName
                )
            );

            const enumStructure = new EnumStructure(
                this,
                file,
                resolvedSection,
                enumName,
                []
            );

            return this.addStructure(enumStructure, table);
        }
    }

    resolveType(type: string): BaseSymbol {
        const is_array = type.includes("array of ") || type.includes("list of ");
        
        if (is_array) {
            type = type.replace(/(array|list) of /, "");

            return new ArraySymbol(this.resolveType(type));
        }

        if (type.includes("?")) {
            type = type.replace(/\?/g, "");
            return new NullableSymbol(this.resolveType(type));
        }

        if (type.includes("partial ")) {
            type = type.replace("partial ", "");
            return new PartialSymbol(this.resolveType(type));
        }

        if (type.includes(" or ")) {
            const types = type.split(" or ");
            return new OrSymbol(
                this.resolveType(types[0]),
                this.resolveType(types[1])
            );
        }

        if (type.includes(" object")) {
            return this.resolveType(type.replace(" object", ""));
        }

        const matchedLink = type.match(linkRegex);
        if (matchedLink) {
            const [ , , location ] = matchedLink;

            const section = this.links.get(location);

            if (section) {
                const res = this.addResourceSection(section);

                if (res) return new BasicSymbol(res);
            }
        }

        type = stripMarkdown(type).replace(/\(.+?\)/g, "").trim();

        if (type in knownTypes) {
            return new BasicSymbol(knownTypes[type]);
        }
        
        return new BasicSymbol("any");
    }
    
    generateLinksRecursive(sections: MarkdownPart[]) {
        for (const section of sections) {
            if (section instanceof MarkdownSection) {
                this.links.set(section.getLink(), section);

                this.generateLinksRecursive(section.children);
            }
        }
    }
}