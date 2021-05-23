import { BaseStructure } from "../Structure";
import { BaseSymbol } from "./Symbol";

export class BasicSymbol extends BaseSymbol {
    constructor(
        public readonly ref: BaseStructure|string
    ) {
        super();
    }

    serialize() {
        return typeof this.ref === "string"
            ? this.ref
            : this.ref.name;
    }
}