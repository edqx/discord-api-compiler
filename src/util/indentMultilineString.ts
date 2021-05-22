export function indentMultilineString(str: string) {
    return "    " + str.split("\n").join("\n    ");
}