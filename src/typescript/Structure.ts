import { Compiler } from "../Compiler";
import { OutputFile } from "../File";
import { MarkdownSection } from "../markdown/Section";
import { MarkdownTable } from "../markdown/Table";

export class BaseStructure {
    constructor(
        protected readonly compiler: Compiler,
        public readonly file: OutputFile,
        public readonly section: MarkdownSection|null,
        public readonly name: string
    ) {}
    
    toString() {
        return this.name;
    }

    loadFromTable(table: MarkdownTable<string>) { void table; };

    serialize(): string {
        return "";
    }
}