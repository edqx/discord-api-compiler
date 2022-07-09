import { BaseSymbol } from "./Symbol";

export class ArraySymbol extends BaseSymbol {
    constructor(
        public readonly symbol: BaseSymbol
    ) {
        super(symbol);
    }

    serialize() {
        const childName = this.symbol.serialize();

        if (childName.includes("|")) {
            return "(" + childName + ")[]";
        }

        return childName + "[]";
    }
}