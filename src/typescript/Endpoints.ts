import { Compiler } from "../Compiler";
import { OutputFile } from "../File";
import { MarkdownSection } from "../markdown/Section";
import { indentMultilineString } from "../util/indentMultilineString";
import { prependCommentLines } from "../util/prependCommentLines";
import { InterfaceStructure } from "./Interface";
import { Structure } from "./Structure";

export class EndpointPart {
    constructor(
        public readonly type: "param"|"part",
        public readonly name: string
    ) {}
}

export class Endpoint {
    constructor(
        public readonly parts: EndpointPart[]
    ) {}

    static parse(endpoint: string) {
        const parts = [];
        let in_param = false;
        let build = "";
    
        for (const char of endpoint) {
            if (char === "/" && !in_param) {
                parts.push(build);
                build = "";
                continue;
            }
    
            if (char === "{") {
                in_param = true;
            } else if (char === "}") {
                in_param = false;
            }
            build += char;
        }
        parts.push(build);

        const parsed = [];
    
        for (const part of parts) {
            if (!part)
                continue;
    
            if (part[0] === "{") {
                const trimmed = part.substr(1, part.length - 2);
                const [ param_name ] = trimmed.split("#");
                const serialized = param_name.replace(/\./g, "");
                parsed.push(new EndpointPart("param", serialized));
            } else {
                parsed.push(new EndpointPart("part", part));
            }
        }
    
        return new Endpoint(parsed);
    }
}

export class DocumentedRequest {
    public jsonParamsStructure?: Structure|null;
    public queryParamsStructure?: Structure|null;
    public responseStructure?: Structure|null;

    constructor(
        public readonly compiler: Compiler,
        public readonly section: MarkdownSection,
        public readonly name: string,
        public readonly verb: string,
        public readonly endpoint: Endpoint
    ) {}

    get codename() {
        return this.name
            .split(" ")
            .map(word => word.split("/")[0])
            .join("")
            .replace(/\W/g, "")
    }

    get params() {
        return this.endpoint.parts
            .filter(part => part.type === "param");
    }

    static parse(compiler: Compiler, section: MarkdownSection) {
        const [ endpoint_name, full_request ] = section.title.split(" % ");
        const [ verb, endpoint ] = full_request.split(" ");
    
        const parsed_endpoint = Endpoint.parse(endpoint);

        return new DocumentedRequest(compiler, section, endpoint_name, verb, parsed_endpoint);
    }

    findJsonParamsStructure() {
        if (typeof this.jsonParamsStructure !== "undefined") return this.jsonParamsStructure;

        const jsonSection = this.section.sections.find(section => section.title.includes("JSON"));

        if (jsonSection) {
            const resolvedInterface = this.compiler.resolveTable(this.section, [ "field", "type" ]);

            if (resolvedInterface) {
                const [ resolvedSection, table ] = resolvedInterface;
                const file = this.compiler.createFile("requests/" + this.codename + "JsonParams");
    
                const interfaceStructure = new InterfaceStructure(
                    this.compiler,
                    file,
                    resolvedSection,
                    this.codename + "JsonParams",
                    []
                );
                
                this.jsonParamsStructure = interfaceStructure;
    
                return this.compiler.addStructure(interfaceStructure, table);
            }
        }

        return null;
    }

    findQueryParamsStructure() {
        if (typeof this.queryParamsStructure !== "undefined") return this.queryParamsStructure;

        const querySection = this.section.sections.find(section => section.title.includes("Query"));

        if (querySection) {
            const resolvedInterface = this.compiler.resolveTable(this.section, [ "field", "type" ]);

            if (resolvedInterface) {
                const [ resolvedSection, table ] = resolvedInterface;
                const file = this.compiler.createFile("requests/" + this.codename + "QueryParams");
    
                const interfaceStructure = new InterfaceStructure(
                    this.compiler,
                    file,
                    resolvedSection,
                    this.codename + "QueryParams",
                    []
                );

                this.queryParamsStructure = interfaceStructure;
    
                return this.compiler.addStructure(interfaceStructure, table);
            }
        }

        return null;
    }

    findResponseStructure() {
        if (typeof this.responseStructure !== "undefined") return this.responseStructure;

        const responseStructure = this.section.sections.find(section => section.title.includes("Response"));

        if (responseStructure) {
            const resolvedInterface = this.compiler.resolveTable(this.section, [ "field", "type" ]);

            if (resolvedInterface) {
                const [ resolvedSection, table ] = resolvedInterface;
                const file = this.compiler.createFile("responses/" + this.codename + "Response");
    
                const interfaceStructure = new InterfaceStructure(
                    this.compiler,
                    file,
                    resolvedSection,
                    this.codename + "Response",
                    []
                );

                this.responseStructure = interfaceStructure;
    
                return this.compiler.addStructure(interfaceStructure, table);
            }
        }

        return null;
    }

    findResponse() {
        const structure = this.findResponseStructure();

        if (structure) return structure;

        const haystack = this.section.text.map(child => child.text).join(" ");
        const matched = /Returns (an?|the (new|updated)?) \`?(?<object>.+)\`?( object)?( on success)?/.exec(haystack);

        if (matched) {
            const object = matched.groups?.object;

            if (!object)
                return null;

            const stripped = object.replace(" object", "").replace(/(on )?success/, "").trim();

            const structureName = this.compiler.resolveType(stripped);
            const structure = this.compiler.structures.get(structureName);

            if (structure) {
                this.responseStructure = structure;

                return structure;
            }
        }

        return null;
    }
}

export class EndpointStructure extends Structure {
    constructor(
        public readonly compiler: Compiler,
        public readonly file: OutputFile,
        public readonly name: string,
        public readonly requests: DocumentedRequest[]
    ) {
        super(compiler, file, null, name);

        if (this.compiler.options.typings) {
            for (const request of this.requests) {
                const jsonParamsStructure = request.findJsonParamsStructure();
                const queryParamsStructure = request.findQueryParamsStructure();
                const responseStructure = request.findResponse();
        
                if (jsonParamsStructure)
                    this.file.registerImport(jsonParamsStructure);
                    
                if (queryParamsStructure)
                    this.file.registerImport(queryParamsStructure);
                    
                if (responseStructure)
                    this.file.registerImport(responseStructure);
            }
        }
    }

    serialize() {
        let endpointText = "";
        
        if (this.compiler.options.typings) endpointText += `type DeclareEndpoint<
    JSONParams extends Record<string, any> = {},
    QueryParams extends Record<string, any> = {},
    ResponseType extends Record<string, any> = {}
> = (...args: string[]) => string;

export type ExtractJSONParams<
    T extends DeclareEndpoint<any, any, any>
> = T extends DeclareEndpoint<infer X, any, any> ? X : never

export type ExtractQueryParams<
    T extends DeclareEndpoint<any, any, any>
> = T extends DeclareEndpoint<any, infer X, any> ? X: never

export type ExtractResponseType<
    T extends DeclareEndpoint<any, any, any>
> = T extends DeclareEndpoint<any, any, infer X> ? X: never\n\n`;

        endpointText += "export const ApiEndpoints = {\n";
    
        for (const request of this.requests) {
            if (this.compiler.options.comments) endpointText += indentMultilineString(prependCommentLines(request.section.serialize())) + "\n";
            endpointText += "    " + request.codename + ": ";
            if (this.compiler.options.typings) endpointText += "(";
            endpointText += "("
                + (request.params.map(param => param.name + (this.compiler.options.typings ? ": string" : "")).join(", "))
                + ") => ";
            endpointText += "`/" + request.endpoint.parts.map(part =>
                part.type === "param" ? "${" + part.name + "}" : part.name).join("/") + "`";
            if (this.compiler.options.typings) endpointText += ")";

            if (this.compiler.options.typings) {
                endpointText += " as DeclareEndpoint<";
                endpointText += request.jsonParamsStructure
                    ? request.jsonParamsStructure.name
                    : "{}";
                endpointText += ", ";
                endpointText += request.queryParamsStructure
                    ? request.queryParamsStructure.name
                    : "{}";
                endpointText += ", ";
                endpointText += request.responseStructure
                    ? request.responseStructure.name
                    : "{}";
                endpointText += ">";
            }

            endpointText += ",\n";
        }

        endpointText += "}";

        return endpointText;
    }
}