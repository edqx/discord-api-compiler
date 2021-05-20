Parses the documentation for the [discord api](https://github.com/discord/discord-api-docs) and
compiles it into several different typescript types formats.

Currently only compiles API endpoints with full description, json & query string parameter typings, examples and warnings.

## Installation
Run `git clone https://github.com/edqx/discord-api-compiler --recurse-submodules` to install the
repository.

## Usage
Run `node index > output.ts` to see the output of the compiler.

### Command Line Arguments

You can also pass some CLI options to change the behaviour of the compiler.

|  Argument          |                              Description                             |     Default    |
| ------------------ | -------------------------------------------------------------------- | -------------- |
| `--indent`         | The size of indentation, set to `tabs` to use tabs instead of spaces | `4`            |
| `--namespace`      | The name of the object containing endpoints                          | `ApiEndpoints` |
| `--no-links`       | Disable discord api links                                            | `false`        |
| `--no-types`       | Disable typescript typings                                           | `false`        |
| `--no-param-types` | Disable typings for json/query parameters                            | `false`        |
| `--no-comments`    | Disable jsdoc comments                                               | `false`        |
| `--no-examples`    | Disable example requests and responses                               | `false`        |