/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface CreateGuildRoleJsonParams {
    /**
     * Name of the role.
     */
    name: string;
    /**
     * Bitwise value of the enabled/disabled permissions.
     */
    permissions: string;
    /**
     * RGB color value.
     */
    color: number;
    /**
     * Whether the role should be displayed separately in the sidebar.
     */
    hoist: boolean;
    /**
     * Whether the role should be mentionable.
     */
    mentionable: boolean;
}
