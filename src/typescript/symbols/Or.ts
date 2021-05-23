import { BaseSymbol } from "./Symbol";

export class OrSymbol extends BaseSymbol {
    constructor(
        public readonly symbol: BaseSymbol,
        public readonly other: BaseSymbol
    ) {
        super(symbol);
    }

    serialize() {
        return this.symbol.serialize() + "|" + this.other.serialize();
    }
}