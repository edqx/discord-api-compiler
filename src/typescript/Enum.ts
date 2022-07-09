import { Compiler } from "../Compiler";
import { OutputFile } from "../File";
import { MarkdownSection } from "../markdown/Section";
import { MarkdownTable } from "../markdown/Table";
import { makeCodeFriendly } from "../util/makeCodeFriendly";
import { prependCommentLines } from "../util/prependCommentLines";
import { BaseStructure } from "./Structure";

export class EnumStructure extends BaseStructure {
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
            const primary = row.name || row.flag;
            const stripped = makeCodeFriendly(primary);

            this.entries.push([ stripped, row.value ]);
        }
    }

    serialize() {
        return (this.compiler.options.comments ? prependCommentLines(this.section.serialize()) + "\n" : "")
            + "export enum " + this.name + " {\n"
            + this.entries.map(entry => "    " + entry[0] + " = " + entry[1]).join(",\n")
            + "\n}";
    }
}