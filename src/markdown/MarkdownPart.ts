import { MarkdownSection } from "./Section";

export class MarkdownPart {
    constructor(
        public readonly file: string,
        public readonly parent: MarkdownSection|undefined
    ) {}

    serialize(): string { return "" };
}