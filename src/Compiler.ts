import { OutputFile } from "./File";
import { MarkdownPart } from "./markdown/MarkdownPart";
import { linkRegex, MarkdownSection } from "./markdown/Section";
import { MarkdownTable } from "./markdown/Table";
import { EnumStructure } from "./typescript/Enum";
import { InterfaceStructure } from "./typescript/Interface";
import { Structure } from "./typescript/Structure";

export class Compiler {
    links: Map<string, MarkdownSection>;
    
    structures: Map<string, Structure>;
    files: Set<OutputFile>;

    constructor(public readonly sections: MarkdownSection[]) {
        this.links = new Map;

        this.structures = new Map;
        this.files = new Set;

        this.generateLinksRecursive(this.sections);
    }

    resolveTable(root: MarkdownSection, headers: string[]): [ MarkdownSection, MarkdownTable<string> ]|null {
        const children = [ root, ...root.sections ];
    
        for (const child of children) {
            const table = child.tables[0];
    
            if (!table)
                continue;
        
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
    
        return null;
    }

    addStructure(structure: Structure, table: MarkdownTable<string>) {
        if (this.structures.has(structure.name))
            return structure;

        this.structures.set(structure.name, structure);
        structure.file.structures.add(structure);
        this.files.add(structure.file);

        structure.loadFromTable(table);

        return structure;
    }

    addResourceSection(section: MarkdownSection) {
        const resolvedInterface = this.resolveTable(section, [ "field", "type" ]);

        if (resolvedInterface) {
            const [ resolvedSection, table ] = resolvedInterface;
            const interfaceName = resolvedSection.title.replace(/\W/g, "");
            const file = new OutputFile("interfaces/" + interfaceName + ".ts");

            const interfaceStructure = new InterfaceStructure(
                this,
                file,
                resolvedSection,
                interfaceName,
                []
            );

            return this.addStructure(interfaceStructure, table).name;
        }

        const resolvedEnum = this.resolveTable(section, [ "name", "value" ]) || this.resolveTable(section, [ "flag", "value" ]);
        
        if (resolvedEnum) {
            const [ resolvedSection, table ] = resolvedEnum;
            const enumName = resolvedSection.title.replace(/\W/g, "");
            const file = new OutputFile("enums/" + enumName + ".ts");

            const enumStructure = new EnumStructure(
                this,
                file,
                resolvedSection,
                enumName,
                []
            );

            return this.addStructure(enumStructure, table).name;
        }
    }

    resolveType(type: string): string {
        const is_array = type.includes("array of ") || type.includes("list of ");
        
        if (is_array) {
            type = type.replace(/(array|list) of /, "");
            const resolved = this.resolveType(type);

            if (resolved.includes("|")) {
                return "(" + resolved + ")[]";
            } else {
                return resolved + "[]";
            }
        }

        if (type.includes("?")) {
            type = type.replace(/\?/g, "");
            return this.resolveType(type) + "|null";
        }

        if (type.includes("partial ")) {
            type = type.replace("partial ", "");
            return "Partial<" + this.resolveType(type) + ">";
        }

        if (type.includes(" or ")) {
            const types = type.split(" or ");
            return types.map(type => this.resolveType(type)).join("|");
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

                if (res) return res;
            }
        }

        type = type.replace(/\(.+?\)/g, "").trim();

        switch (type) {
        case "string":
            return "string";
        case "strings":
            return "string";
        case "integer":
            return "number";
        case "int":
            return "number";
        case "boolean":
            return "boolean";
        case "snowflake":
            return "string";
        case "snowflakes":
            return "string";
        case "null":
            return "null";
        case "ISO8601 timestamp":
            return "string";
        case "file contents":
            return "string";
        case "binary":
            return "string";
        case "dict":
            return "Record<string, string>";
        }
        
        return "any";
    }
    
    generateLinksRecursive(sections: MarkdownPart[]) {
        for (const section of sections) {
            if (section instanceof MarkdownSection) {
                this.links.set(section.link, section);

                this.generateLinksRecursive(section.children);
            }
        }
    }
}