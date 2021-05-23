import path from "path";
import wordWrap from "word-wrap";

import { MarkdownCodeblock } from "./Codeblock";
import { MarkdownPart } from "./MarkdownPart";
import { MarkdownQuote } from "./Quote";
import { MarkdownTable } from "./Table";
import { MarkdownText } from "./Text";

function getNumHashes(line: string) {
    return line.match(/^\#+/g)?.[0]?.length || 0;
}

export const linkRegex = /\[(.+?)\]\((.+?)\)/;
const gLinkRegex = /\[(.+?)\]\((.+?)\)/g;
export const rowRegex = /^\|( *.+ *\|)+$/;

export function maskedLinkToUrl(text: string) {
    return text.replace(gLinkRegex, link => {
        const matched = link.match(linkRegex);

        let location = link;
        let mask = "";

        if (matched)
            [,mask,location] = matched;

        const url = "https://discord.com/developers/" + location
            .substr(1) // Remove starting #
            .toLowerCase()
            .split("/").join("#")
            .replace(/_/g, "/");

        if (mask) {
            return "[" + mask + "](" + url + ")";
        } else {
            return url;
        }
    });
}

export class MarkdownSection extends MarkdownPart {
    constructor(
        public readonly file: string,
        public readonly parent: MarkdownSection|undefined,
        public readonly children: MarkdownPart[],
        public readonly level: number,
        public readonly title: string
    ) {
        super(file, parent);
    }
    
    toJSON() {
        return {
            file: this.file,
            type: "section",
            link: this.getLink(),
            children: this.children,
            level: this.level,
            title: this.title
        };
    }

    getLink() {
        let link = "#DOCS"
            + this.file
                .split(".")[0]
                .split(path.sep)
                .map(filename => "_" + filename.toUpperCase())
                .join("")
            + "/";

        if (this.parent && this.parent?.level > 2 && (this.level - this.parent?.level > 1)) {
            link += this.parent.getLink().split("/")[1] + "-";
        }

        link += this.title.toLowerCase().replace(/ /g, "-");

        return link;
    }

    getDApiUrl() {
        return "https://discord.com/developers/" + this.getLink()
            .substr(1) // Remove starting #
            .toLowerCase()
            .split("/").join("#")
            .replace(/_/g, "/")
    }

    getTextChildren() {
        return this.children.filter(child =>
            child instanceof MarkdownText) as MarkdownText[];
    }

    getSectionChildren() {
        return this.children.filter(child =>
            child instanceof MarkdownSection) as MarkdownSection[];
    }

    getQuoteChildren() {
        return this.children.filter(child =>
            child instanceof MarkdownQuote) as MarkdownQuote[];
    }

    getCodeblockChildren() {
        return this.children.filter(child =>
            child instanceof MarkdownCodeblock) as MarkdownCodeblock[];
    }

    getTableChildren() {
        return this.children.filter(child =>
            child instanceof MarkdownTable) as MarkdownTable<string>[];
    }

    static parse(file: string, parent: MarkdownSection|undefined, lines: string[]) {
        const header = lines.shift();
        
        if (!header)
            return null;

        const level = getNumHashes(header);
        const title = header.replace(/^\#+ ?/g, "");

        const section = new MarkdownSection(file, parent, [], level, title);

        let line: string|undefined;
        while ((line = lines.shift()) !== undefined) {
            if (/^\#+ /g.test(line)) {
                const section_lines: string[] = [];
                section_lines.push(line);
                let in_code = false;
                const top_line = getNumHashes(line);
                while ((line = lines.shift()) !== undefined) {
                    if (/^ *```/.test(line)) {
                        in_code = !in_code;
                    }
                    if (!in_code && getNumHashes(line) && getNumHashes(line) <= top_line) {
                        lines.unshift(line);
                        break;
                    }
                    section_lines.push(line);
                }
                const child = MarkdownSection.parse(file, section, section_lines);

                if (!child) {
                    const text = MarkdownText.parse(file, section, section_lines);

                    if (text) {
                        section.children.push(text);
                    }
                    continue;
                }

                section.children.push(child);
                continue;
            } else if (line.startsWith("> ")) {
                const quote_lines: string[] = [];
                quote_lines.push(line);
                while ((line = lines.shift()) !== undefined) {
                    if (!line.startsWith("> ")) {
                        lines.unshift(line);
                        break;
                    }
                    quote_lines.push(line);
                }
                const quote = MarkdownQuote.parse(file, section, quote_lines);

                if (!quote) {
                    const text = MarkdownText.parse(file, section, quote_lines);

                    if (text) {
                        section.children.push(text);
                    }
                    continue;
                }

                section.children.push(quote);
                continue;
            } else if (/^ *```/.test(line)) {
                const code_lines: string[] = [];
                code_lines.push(line);
                while ((line = lines.shift()) !== undefined) {
                    code_lines.push(line);
                    if (/^ *```/.test(line)) {
                        break;
                    }
                }
                const code = MarkdownCodeblock.parse(file, section, code_lines);

                if (!code) {
                    const text = MarkdownText.parse(file, section, code_lines);

                    if (text) {
                        section.children.push(text);
                    }
                    continue;
                }

                section.children.push(code);
                continue;
            } else if (rowRegex.test(line)) {
                const table_lines: string[] = [];
                table_lines.push(line);
                if (/^|( *\-+ *\|)+$/.test(lines[0])) {
                    lines.shift();
                    while ((line = lines.shift()) !== undefined) {
                        if (!rowRegex.test(line)) {
                            lines.unshift(line);
                            break;
                        }
                        table_lines.push(line);
                    }
                    const table = MarkdownTable.parse(file, section, table_lines);
    
                    if (!table) {
                        const text = MarkdownText.parse(file, section, table_lines);
    
                        if (text) {
                            section.children.push(text);
                        }
                        continue;
                    }
    
                    section.children.push(table);
                    continue;
                }
            }
            
            if (line?.trim()) {
                const last = section.children[section.children.length - 1];

                if (last && last instanceof MarkdownText) {
                    last.text += "\n" + line;
                } else {
                    const text = new MarkdownText(file, parent, line);
                    section.children.push(text);
                }
            }
        }

        return section;
    }

    serialize() {
        let out: string = [
            this.getDApiUrl(),
            ...this.getTextChildren()
                .map(text =>
                    wordWrap(text.serialize(), {
                        width: 80,
                        indent: ""
                    })),
            ...this.getQuoteChildren()
                .map(quote =>
                    wordWrap(quote.serialize(), {
                        width: 80,
                        indent: "" 
                    })),
            ...this.getSectionChildren()
                .filter(child =>
                    child.title.includes("Example")
                    && child.children.find(echild =>
                        echild instanceof MarkdownCodeblock
                    )
                )
                .map(example =>
                    example.children
                        .find(echild =>
                            echild instanceof MarkdownCodeblock
                        )
                    )
                .map(code => "@example\n" + code?.serialize())
        ].join("\n\n");

        return out;
    }
}