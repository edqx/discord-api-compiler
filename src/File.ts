import path from "path";
import { Compiler } from "./Compiler";
import { BaseStructure } from "./typescript/Structure";

export class OutputFile {
    imports: Set<BaseStructure>;
    structures: Set<BaseStructure>;

    constructor(
        public readonly filename: string
    ) {
        this.imports = new Set;
        this.structures = new Set;
    }

    static resolve(compiler: Compiler, file: OutputFile) {
        return path.resolve(compiler.options.output.output_dir, file.filename);
    }

    getRelativeImport(file: OutputFile) {
        const from_dirname = path.dirname(this.filename);
        const to_dirname = path.dirname(file.filename);

        const to_filename = path.basename(file.filename);
        const relative = path.posix.relative(from_dirname, to_dirname);
        
        let joined = path.posix.join(relative, path.basename(path.basename(to_filename, ".ts"), ".js"));

        if (!joined.startsWith(".")) {
            joined = "./" + joined;
        }

        return joined;
    }

    registerImport(structure: BaseStructure) {
        if (structure.file.filename === this.filename) {
            return;
        }
        
        this.imports.add(structure);
    }

    serialize() {
        let out = "";

        const imports = [...this.imports];
        imports.sort((a, b) => {
            const aRelative = this.getRelativeImport(a.file);
            const bRelative = this.getRelativeImport(b.file);
            if (aRelative < bRelative) return -1;
            if (bRelative < aRelative) return 1;
            return 0;
        });

        for (let i = 0; i < imports.length; i++) {
            const imp = imports[i];
            const last = imports[i - 1];
            if (last) {
                if (path.dirname(imp.file.filename) !== path.dirname(last.file.filename)) {
                    out += "\n";
                }
            }
            out += `import { ${imp.name} } from "${this.getRelativeImport(imp.file)}";\n`;
        }

        out += "\n";

        for (const structure of this.structures) {
            out += structure.serialize() + "\n\n";
        }

        return out.trim() + "\n";
    }
}