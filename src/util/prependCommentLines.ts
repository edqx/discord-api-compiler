export function prependCommentLines(comment: string) {
    return "/**\n * " +
        comment.split("\n").join("\n * ")
        + "\n */";
}