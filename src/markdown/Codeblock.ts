import { MarkdownPart } from "./MarkdownPart";
import { MarkdownSection } from "./Section";

export class MarkdownCodeblock extends MarkdownPart {
    constructor(
        public readonly file: string,
        public readonly parent: MarkdownSection|undefined,
        public readonly code: string,
        public readonly language?: string|undefined
    ) {
        super(file, parent);
    }
    
    toJSON() {
        return {
            file: this.file,
            type: "code",
            language: this.language,
            code: this.code
        };
    }

    static parse(file: string, parent: MarkdownSection|undefined, lines: string[]) {
        const top_line = lines.shift();
        const last_line = lines.pop();

        if (!top_line || !/^ *```/.test(top_line)) {
            return null;
        }

        if (!last_line || !/^ *```/.test(last_line)) {
            return null;
        }

        const language = /```(.+)/.exec(top_line)?.[1];

        const joined = lines.join("\n").trim();

        if (!joined)
            return null;

        return new MarkdownCodeblock(file, parent, joined, language);
    }

    serialize() {
        return "```" + (this.language || "") + "\n" + this.code + "\n```";
    }
}