export function makeCodeFriendly(name: string) {
    return name
        .split(" ")
        .map(word => {
            const stripped = word.split("/")[0];

            return stripped[0].toUpperCase() + stripped.substr(1);
        })
        .join("")
        .replace(/\W/g, "");
}