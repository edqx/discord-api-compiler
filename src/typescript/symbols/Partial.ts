import { BaseSymbol } from "./Symbol";

export class PartialSymbol extends BaseSymbol {
    constructor(
        public readonly symbol: BaseSymbol
    ) {
        super(symbol);
    }

    serialize() {
        return "Partial<" + this.symbol.serialize() + ">";
    }
}