import { MarkdownPart } from "./MarkdownPart";
import { MarkdownSection } from "./Section";

export class MarkdownText extends MarkdownPart {
    constructor(
        public readonly file: string,
        public readonly parent: MarkdownSection|undefined,
        public text: string
    ) {
        super(file, parent);
    }
    
    toJSON() {
        return {
            file: this.file,
            type: "text",
            text: this.text
        };
    }

    static parse(file: string, parent: MarkdownSection|undefined, lines: string[]) {
        const joined = lines.join("\n");

        if (!joined.trim())
            return null;

        return new MarkdownText(file, parent, joined);
    }

    serialize() {
        return this.text;
    }
}