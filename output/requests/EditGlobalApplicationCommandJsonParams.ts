/**
 * https://discord.com/developers/docs/interactions/slash-commands#json-params
 */
export interface EditGlobalApplicationCommandJsonParams {
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * The parameters for the command.
     */
    options: (any|null)[];
    /**
     * Whether the command is enabled by default when the app is added to a guild.
     */
    default_permission: boolean;
}
