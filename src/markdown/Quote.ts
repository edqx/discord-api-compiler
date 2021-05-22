import { MarkdownPart } from "./MarkdownPart";
import { MarkdownSection } from "./Section";

const quote_block_types = ["danger", "info", "warn"]

export class MarkdownQuote extends MarkdownPart {
    constructor(
        public readonly file: string,
        public readonly parent: MarkdownSection|undefined,
        public readonly quote_type: string,
        public readonly text: string
    ) {
        super(file, parent);
    }
    
    toJSON() {
        return {
            file: this.file,
            type: "quote",
            quote_type: this.quote_type,
            text: this.text
        };
    }

    static parse(file: string, parent: MarkdownSection|undefined, lines: string[]) {
        const stripped = lines
            .map(line => line.substr(2));

        const type_line = stripped[0];
        if (quote_block_types.includes(type_line)) {
            const type = stripped.shift();
            const joined = stripped.join("\n");

            if (!type || !joined.trim())
                return null;

            return new MarkdownQuote(file, parent, type, joined)
        } else {
            const joined = stripped.join("\n");

            if (!joined.trim())
                return null;

            return new MarkdownQuote(file, parent, "normal", joined)
        }
    }

    serialize() {
        return this.text;
    }
}