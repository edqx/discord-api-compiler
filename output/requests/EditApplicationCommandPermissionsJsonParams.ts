import { ApplicationCommandPermissions } from "../interfaces/ApplicationCommandPermissions";

/**
 * https://discord.com/developers/docs/interactions/slash/commands#json-params
 */
export interface EditApplicationCommandPermissionsJsonParams {
    /**
     * The permissions for the command in the guild.
     */
    permissions: ApplicationCommandPermissions[];
}
