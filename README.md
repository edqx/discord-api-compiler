Parses the documentation for the [discord api](https://github.com/discord/discord-api-docs) and
compiles it into several different typescript types formats.

Compile API endpoints with full description, json & query string parameter typings, examples and warnings.

## Installation
Run `git clone https://github.com/edqx/discord-api-compiler --recurse-submodules` to install the
repository.

## Usage
Run `yarn start` to see the output of the compiler.

Check out `config.json` to configure the compiler, with the following options:

```ts
export interface CompilerOptions {
    /**
     * Output options for each type of structure.
     */
    output: {
        /**
         * File to output all enums and structures to.
         * @default ""
         */
        single_file: string;

        /**
         * Directory to emit all files to.
         * @default "output"
         */
        output_dir: string;

        /**
         * File to emit each enum to, use %s to replace with the enum name
         * @default "enums"
         */
        enums_output: string;
        
        /**
         * Directory to emit all structures to, relative to the base output directory.
         * @default "interfaces"
         */
        structures_output: string;
        
        /**
         * Directory to emit all request json and query parameter structures to, relative to the base output directory.
         * @default "requests"
         */
        requests_output: string;
        
        /**
         * Directory to emit all special response structures to, relative to the base output directory.
         * @default "responses"
         */
        responses_output: string;

        /**
         * File to emit all endpoint declarations to, relative to the base output directory.
         * @default "endpoints"
         */
        endpoints_output: string;
    };

    /**
     * Whether to emit typescript type declarations.
     */
    typings: boolean;

    /**
     * Whether to emit detailed comments.
     */
    comments: boolean;
}
```