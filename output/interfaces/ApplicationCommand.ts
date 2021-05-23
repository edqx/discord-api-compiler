import { ApplicationCommandOption } from "./ApplicationCommandOption";

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommand
 * 
 * An application command is the base "command" model that belongs to an 
 * application. This is what you are creating when you `POST` a new command.
 * 
 * A command, or each individual subcommand, can have a maximum of 25 `options`
 * 
 * Required `options` must be listed before optional options
 */
export interface ApplicationCommand {
    /**
     * Unique id of the command.
     */
    id: string;
    /**
     * Unique id of the parent application.
     */
    application_id: string;
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
    options?: ApplicationCommandOption[];
    /**
     * Whether the command is enabled by default when the app is added to a guild.
     */
    default_permission?: boolean;
}
