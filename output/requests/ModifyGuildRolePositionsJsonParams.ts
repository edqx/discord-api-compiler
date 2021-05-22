/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildRolePositionsJsonParams {
    /**
     * Role.
     */
    id: string;
    /**
     * Sorting position of the role.
     */
    ?position: number|null;
}
