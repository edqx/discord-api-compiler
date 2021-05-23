import { BaseSymbol } from "./Symbol";

export class NullableSymbol extends BaseSymbol {
    constructor(
        public readonly symbol: BaseSymbol
    ) {
        super(symbol);
    }

    serialize() {
        return this.symbol.serialize() + "|null";
    }
}