import { Compiler } from "../Compiler";
import { OutputFile } from "../File";
import { MarkdownSection } from "../markdown/Section";
import { indentMultilineString } from "../util/indentMultilineString";
import { prependCommentLines } from "../util/prependCommentLines";
import { InterfaceStructure, InterfaceStructureEntry } from "./Interface";
import { BaseStructure } from "./Structure";
import { BasicSymbol } from "./symbols/Basic";
import { BaseSymbol } from "./symbols/Symbol";

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

const returnsRegex = /Returns( \`?\d+\`? and)? (an?|the( (new|updated|created))?) \`?(?<object>.+?)\`?( objects?)?( on success)?(\.|,)/;

export class DocumentedRequest {
    public jsonParamsStructure?: BaseStructure|null;
    public queryParamsStructure?: BaseStructure|null;
    public responseSymbol?: BaseSymbol|null;

    constructor(
        public readonly compiler: Compiler,
        public readonly section: MarkdownSection,
        public readonly name: string,
        public readonly verb: string,
        public readonly endpoint: Endpoint
    ) {}

    static parse(compiler: Compiler, section: MarkdownSection) {
        const [ endpoint_name, full_request ] = section.title.split(" % ");
        const [ verb, endpoint ] = full_request.split(" ");
    
        const parsed_endpoint = Endpoint.parse(endpoint);

        return new DocumentedRequest(compiler, section, endpoint_name, verb, parsed_endpoint);
    }

    getCodeFriendlyName() {
        return this.name
            .split(" ")
            .map(word => word.split("/")[0])
            .join("")
            .replace(/\W/g, "")
    }

    getEndpointParams() {
        return this.endpoint.parts
            .filter(part => part.type === "param");
    }

    getDescription() {
        return this.section.getTextChildren().map(child => child.text).join(" ");
    }

    findJsonParamsStructure() {
        if (typeof this.jsonParamsStructure !== "undefined") return this.jsonParamsStructure;

        const jsonSection = this.section.getSectionChildren().find(section => section.title.includes("JSON"));

        if (jsonSection) {
            const resolvedInterface = this.compiler.resolveTable(this.section, [ "field", "type" ]);

            if (resolvedInterface) {
                const [ resolvedSection, table ] = resolvedInterface;
                const file = this.compiler.createFile("requests/" + this.getCodeFriendlyName() + "JsonParams");
    
                const interfaceStructure = new InterfaceStructure(
                    this.compiler,
                    file,
                    resolvedSection,
                    this.getCodeFriendlyName() + "JsonParams",
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

        const querySection = this.section.getSectionChildren().find(section => section.title.includes("Query"));

        if (querySection) {
            const resolvedInterface = this.compiler.resolveTable(this.section, [ "field", "type" ]);

            if (resolvedInterface) {
                const [ resolvedSection, table ] = resolvedInterface;
                const file = this.compiler.createFile("requests/" + this.getCodeFriendlyName() + "QueryParams");
    
                const interfaceStructure = new InterfaceStructure(
                    this.compiler,
                    file,
                    resolvedSection,
                    this.getCodeFriendlyName() + "QueryParams",
                    []
                );

                this.queryParamsStructure = interfaceStructure;
    
                return this.compiler.addStructure(interfaceStructure, table);
            }
        }

        return null;
    }

    findResponseStructure() {
        if (typeof this.responseSymbol !== "undefined") return this.responseSymbol;

        const responseStructure = this.section.getSectionChildren().find(section => section.title.includes("Response"));

        if (responseStructure) {
            const resolvedInterface = this.compiler.resolveTable(this.section, [ "field", "type" ]);

            if (resolvedInterface) {
                const [ resolvedSection, table ] = resolvedInterface;
                const file = this.compiler.createFile("responses/" + this.getCodeFriendlyName() + "Response");
    
                const interfaceStructure = new InterfaceStructure(
                    this.compiler,
                    file,
                    resolvedSection,
                    this.getCodeFriendlyName() + "Response",
                    []
                );

                this.compiler.addStructure(interfaceStructure, table);
                this.responseSymbol = new BasicSymbol(interfaceStructure);
    
                return this.responseSymbol;
            }
        }

        return null;
    }

    findResponseSymbol() {
        const structure = this.findResponseStructure();

        if (structure) return structure;

        const haystack = this.getDescription();
        const all_occurences = haystack.match(RegExp(returnsRegex, "g"));

        if (all_occurences) {
            const last_occurence = all_occurences[all_occurences.length - 1];
            const matched = returnsRegex.exec(last_occurence);
    
            if (matched) {
                const object = matched.groups?.object;
    
                if (!object)
                    return null;
    
                const stripped = object.replace(" object", "").replace(/(on )?success/, "").trim();
    
                const resolved = this.compiler.resolveType(stripped);
                const resolvedStructure = resolved.getRootSymbol().ref;
    
                if (resolvedStructure instanceof BaseStructure) {
                    this.responseSymbol = resolved;
    
                    return resolved;
                }
            }
        }

        return null;
    }

    serialize() {
        let endpointText = "";

        if (this.compiler.options.comments) endpointText += indentMultilineString(prependCommentLines(this.section.serialize())) + "\n";
        endpointText += "    " + this.getCodeFriendlyName() + ": ";
        if (this.compiler.options.typings) endpointText += "(";

        const params = this.getEndpointParams();

        if (params.length) {
            endpointText += "(\n        "
                + (this.getEndpointParams().map(param => param.name + (this.compiler.options.typings ? ": string" : "")).join(",\n        "))
                + "\n    ) => ";
        } else {
            endpointText += "() => ";
        }

        endpointText += "`/" + this.endpoint.parts.map(part =>
            part.type === "param" ? "${" + part.name + "}" : part.name).join("/") + "`";

        if (this.compiler.options.typings) {
            endpointText += ")"

            endpointText += " as DeclareEndpoint<";
            endpointText += this.jsonParamsStructure
                ? this.jsonParamsStructure.name
                : "{}";
            endpointText += ", ";
            endpointText += this.queryParamsStructure
                ? this.queryParamsStructure.name
                : "{}";
            endpointText += ", ";
            endpointText += this.responseSymbol
                ? this.responseSymbol.serialize()
                : "{}";
            endpointText += ">";
        }

        return endpointText
    }
}

export class EndpointStructure extends BaseStructure {
    constructor(
        public readonly compiler: Compiler,
        public readonly file: OutputFile,
        public readonly name: string,
        public readonly requests: DocumentedRequest[]
    ) {
        super(compiler, file, null, name);

        if (this.compiler.options.typings) {
            for (let i = 0; i < this.requests.length; i++) {
                const request = this.requests[i];

                if (request.getDescription().toLowerCase().includes("same as above")) {
                    const last = this.requests[i - 1];
                    if (last) {
                        request.jsonParamsStructure = last.jsonParamsStructure;
                        request.queryParamsStructure = last.queryParamsStructure;
                        request.responseSymbol = last.responseSymbol;
                        continue;
                    }
                }

                const jsonParamsStructure = request.findJsonParamsStructure();
                const queryParamsStructure = request.findQueryParamsStructure();
                const responseSymbol = request.findResponseSymbol();
        
                if (jsonParamsStructure)
                    this.file.registerImport(jsonParamsStructure);
                    
                if (queryParamsStructure)
                    this.file.registerImport(queryParamsStructure);
                    
                if (responseSymbol)  {
                    const resolvedStructure = responseSymbol.getRootSymbol().ref;

                    if (resolvedStructure instanceof BaseStructure) {
                        this.file.registerImport(resolvedStructure);
                    }
                }
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
        endpointText += this.requests.map(request => request.serialize()).join(",\n");
        endpointText += "}";

        return endpointText;
    }
}