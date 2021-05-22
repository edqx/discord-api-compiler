import { MarkdownPart } from "./MarkdownPart";
import { MarkdownSection } from "./Section";

type TableRow<Header extends string> = { [ K in Header ]: string }

export class MarkdownTable<Header extends string> extends MarkdownPart {
    constructor(
        public readonly file: string,
        public readonly parent: MarkdownSection|undefined,
        public readonly headers: Header[] = [],
        public readonly rows: TableRow<Header>[] = []
    ) {
        super(file, parent);
    }
    
    toJSON() {
        return {
            file: this.file,
            type: "table",
            headers: this.headers,
            rows: this.rows
        };
    }

    static parseRow(cell: string) {
        return cell
            .split("|")
            .map(cell => cell.trim())
            .filter(cell => cell);
    }

    static parse(file: string, parent: MarkdownSection|undefined, lines: string[]) {
        const header = lines.shift();

        if (!header) {
            return null;
        }

        const headers = this.parseRow(header).map(cell => cell.toLowerCase());

        const rows = [];

        let line;
        while (line = lines.shift()) {
            const cells = this.parseRow(line)

            const row: Record<typeof headers[number], string> = {};

            for (let i = 0; i < headers.length; i++) {
                row[headers[i]] = cells[i];
            }

            rows.push(row);
        }

        return new MarkdownTable(file, parent, headers, rows);
    }

    hasHeader(header: string) {
        return !!this.headers.find(h => h.toLowerCase() === header.toLowerCase());
    }
}