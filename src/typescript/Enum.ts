import { Compiler } from "../Compiler";
import { OutputFile } from "../File";
import { MarkdownSection } from "../markdown/Section";
import { MarkdownTable } from "../markdown/Table";
import { prependCommentLines } from "../util/prependCommentLines";
import { Structure } from "./Structure";

export class EnumStructure extends Structure {
    constructor(
        protected readonly compiler: Compiler,
        public readonly file: OutputFile,
        public readonly section: MarkdownSection,
        public readonly name: string,
        public readonly entries: [ string, string ][]
    ) {
        super(compiler, file, section, name);
    }

    loadFromTable(
        table: MarkdownTable<"name"|"flag"|"value">
    ) {
        for (const row of table.rows) {
            this.entries.push([ (row.name || row.flag).replace(/\W/g, ""), row.value ]);
        }
    }

    serialize() {
        return prependCommentLines(this.section.serialize())
            + "\nexport enum " + this.name + " {\n"
            + this.entries.map(entry => "    " + entry[0] + " = " + entry[1]).join(",\n")
            + "\n}";
    }
}