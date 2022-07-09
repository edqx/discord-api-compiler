import wordWrap from "word-wrap";

import { Compiler } from "../Compiler";
import { OutputFile } from "../File";
import { maskedLinkToUrl, MarkdownSection } from "../markdown/Section";
import { MarkdownTable } from "../markdown/Table";
import { prependCommentLines } from "../util/prependCommentLines";
import { sentencify } from "../util/sentencify";
import { BaseStructure } from "./Structure";

export class InterfaceStructureEntry {
    constructor(
        public readonly key: string,
        public readonly type: string,
        public readonly description?: string
    ) {
        if (this.key.startsWith("?")) {
            this.key = this.key.substr(1) + "?";
        }
    }

    serialize() {
        let out = "";
        if (this.description) {
            out += "    /**\n";
            out += wordWrap(sentencify(maskedLinkToUrl(this.description)), { width: 80, indent: "     * " });
            out += "\n     */\n";
        }
        out += "    " + this.key.replace(/\\?\*/g, "").trim() + ": " + this.type;

        return out;
    }
}

export class InterfaceStructure extends BaseStructure {
    constructor(
        protected readonly compiler: Compiler,
        public readonly file: OutputFile,
        public readonly section: MarkdownSection,
        public readonly name: string,
        public readonly entries: InterfaceStructureEntry[]
    ) {
        super(compiler, file, section, name);
    }

    loadFromTable(
        table: MarkdownTable<"field"|"type"|"description">
    ) {
        for (const row of table.rows) {
            const resolved = this.compiler.resolveType(row.type);
            const resolvedStructure = resolved.getRootSymbol().ref;

            if (typeof resolvedStructure !== "string") {
                this.file.registerImport(resolvedStructure);
            }

            if (row.description)
                this.compiler.resolveType(row.description);

            this.entries.push(
                new InterfaceStructureEntry(
                    row.field,
                    resolved.serialize(),
                    row.description
                )
            );
        }
    }

    serialize() {
        return  (this.compiler.options.comments ? prependCommentLines(this.section.serialize()) + "\n" : "")
            + "export interface " + this.name + " {\n"
            + this.entries.map(entry => entry.serialize() + ";").join("\n")
            + "\n}";
    }
}