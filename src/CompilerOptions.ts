export interface OutputOptions {
    /**
     * Whether to output all enums and structures to a single file.
     * @default false
     */
    single_file: boolean;

    /**
     * Directory to emit all files to, or file if single_file is set to true.
     * @default "output"
     */
    output_dir: string;

    /**
     * Directory to emit all enums to, relative to the output directory.
     * @default "enums"
     */
    enums_output: string;
    
    /**
     * Directory to emit all structures to, relative to the output directory.
     * @default "interfaces"
     */
    structures_output: string;
    
    /**
     * Directory to emit all request json and query parameter structures to, relative to the output directory.
     * @default "requests"
     */
    requests_output: string;
    
    /**
     * Directory to emit all special response structures to, relative to the output directory.
     * @default "responses"
     */
    responses_output: string;

    /**
     * File to emit all endpoint declarations to, relative to the output directory.
     * @default "endpoints"
     */
    endpoints_output: string;
}

export interface CompilerOptions {
    /**
     * Output options for each type of structure.
     */
    output: OutputOptions;

    /**
     * Whether to emit typescript type declarations.
     */
    typings: boolean;

    /**
     * Whether to emit detailed comments.
     */
    comments: boolean;
}