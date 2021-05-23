import { ApplicationCommandPermissions } from "./ApplicationCommandPermissions";

/**
 * https://discord.com/developers/docs/interactions/slash/commands#guildapplicationcommandpermissions
 * 
 * Returned when fetching the permissions for a command in a guild.
 */
export interface GuildApplicationCommandPermissions {
    /**
     * The id of the command.
     */
    id: string;
    /**
     * The id of the application the command belongs to.
     */
    application_id: string;
    /**
     * The id of the guild.
     */
    guild_id: string;
    /**
     * The permissions for the command in the guild.
     */
    permissions: ApplicationCommandPermissions[];
}
