import path from "path";
import util from "util";
import mkdirp from "mkdirp";
import rimrafp from "rimraf";
import fs from "fs/promises";
import { MarkdownSection } from "./markdown/Section";
import { Compiler } from "./Compiler";
import { OutputFile } from "./File";
import { InterfaceStructure } from "./typescript/Interface";
import { DocumentedRequest, EndpointStructure } from "./typescript/Endpoints";

const rimraf = util.promisify(rimrafp);

async function crawlFiles(entrypoint: string) {
    const collect = [];
    const dirs = [ entrypoint ];

    let dir: string|undefined;
    while (dir = dirs.shift()) {
        const files = await fs.readdir(dir);
        
        for (const file of files) {
            if (file.includes(".")) {
                collect.push(
                    path.relative(entrypoint, path.resolve(dir, file))
                );
            } else {
                dirs.push(
                    path.resolve(entrypoint, dir, file)
                );
            }
        }
    }

    return collect;
}

(async () => {
    const base = path.resolve(process.cwd(), "./discord-api-docs/docs");

    const files = await crawlFiles(base);

    const sections: MarkdownSection[] = [];
    
    for (const file of files) {
        const data = await fs.readFile(path.resolve(base, file), "utf8");
        const lines = data.split("\n");
        const section = MarkdownSection.parse(file, undefined, lines);

        if (section) {
            sections.push(section);
        }
    }

    const optionsData = await fs.readFile(path.resolve(process.cwd(), "./config.json"), "utf8");
    const options = JSON.parse(optionsData)

    const compiler = new Compiler(options, sections);

    const requests = [];

    for (const [ , section ] of compiler.links) {
        if (section.title.includes(" % ")) {
            const request = DocumentedRequest.parse(compiler, section);
            requests.push(request);
        }
    }

    const endpointOutputFile = compiler.createFile(compiler.options.output.endpoints_output);
    const endpointStructure = new EndpointStructure(
        compiler,
        endpointOutputFile,
        "ApiEndpoints",
        requests
    );

    compiler.structures.set("ApiEndpoints", endpointStructure);
    endpointOutputFile.structures.add(endpointStructure);

    await rimraf("output");

    for (const [ , file ] of compiler.files) {
        await mkdirp(path.dirname(OutputFile.resolve(compiler, file)));

        const serialized = file.serialize();
        await fs.writeFile(OutputFile.resolve(compiler, file), serialized, "utf8");
    }

    await fs.writeFile(path.resolve(process.cwd(), "output.json"), JSON.stringify(sections, null, 4), "utf8");
})();