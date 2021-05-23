import path from "path";
import { Compiler } from "./Compiler";
import { Structure } from "./typescript/Structure";

export class OutputFile {
    imports: Set<Structure>;
    structures: Set<Structure>;

    constructor(
        public readonly filename: string
    ) {
        this.imports = new Set;
        this.structures = new Set;
    }

    static resolve(compiler: Compiler, file: OutputFile) {
        return compiler.options.output.single_file
            ? file.filename
            : path.resolve(compiler.options.output.output_dir, file.filename);
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

    registerImport(structure: Structure) {
        if (structure.file.filename === this.filename) {
            return;
        }
        
        this.imports.add(structure);
    }

    serialize() {
        let out = "";

        const imports = [...this.imports];
        imports.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (b.name < a.name) return 1;
            return 0;
        });

        for (const imp of imports) {
            out += `import { ${imp.name} } from "${this.getRelativeImport(imp.file)}";\n`;
        }

        out += "\n";

        for (const structure of this.structures) {
            out += structure.serialize() + "\n\n";
        }

        return out.trim() + "\n";
    }
}