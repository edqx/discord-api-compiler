import { ApplicationCommandPermissionType } from "../enums/ApplicationCommandPermissionType";

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandpermissions
 * 
 * Application command permissions allow you to enable or disable commands for 
 * specific users or roles within a guild.
 */
export interface ApplicationCommandPermissions {
    /**
     * The id of the role or user.
     */
    id: string;
    /**
     * Role or user.
     */
    type: ApplicationCommandPermissionType;
    /**
     * `true` to allow, `false`, to disallow.
     */
    permission: boolean;
}
