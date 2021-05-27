import { ApplicationCommandOptionChoice } from "./ApplicationCommandOptionChoice";

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandoption
 * 
 * You can specify a maximum of 25 `choices` per option
 */
export interface ApplicationCommandOption {
    /**
     * Value of 
     * [ApplicationCommandOptionType](https://discord.com/developers/docs/interactions/slash/commands#applicationcommandoptiontype).
     */
    type: number;
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * If the parameter is required or optional--default `false`.
     */
    required?: boolean;
    /**
     * Choices for `string` and `int` types for the user to pick from.
     */
    choices?: ApplicationCommandOptionChoice[];
    /**
     * If the option is a subcommand or subcommand group type, this nested options will 
     * be the parameters.
     */
    options?: ApplicationCommandOption[];
}
