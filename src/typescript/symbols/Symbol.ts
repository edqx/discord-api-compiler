import { BasicSymbol } from "./Basic";

export class BaseSymbol {
    constructor(
        public readonly symbol?: BaseSymbol
    ) {}

    getRootSymbol(): BasicSymbol {
        return (this.symbol?.getRootSymbol() || this) as BasicSymbol;
    }

    serialize(): string { return "" }
}