export function sentencify(str: string) {
    let out = str[0].toUpperCase() + str.substr(1);
    if (!out.endsWith(".")) out += ".";

    return out;
}