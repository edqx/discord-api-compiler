/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandoptionchoice
 * 
 * If you specify `choices` for an option, they are the **only** valid values for a 
 * user to pick
 */
export interface ApplicationCommandOptionChoice {
    /**
     * 1-100 character choice name.
     */
    name: string;
    /**
     * Value of the choice, up to 100 characters if string.
     */
    value: string|number;
}
