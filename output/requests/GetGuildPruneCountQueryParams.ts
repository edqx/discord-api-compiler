/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface GetGuildPruneCountQueryParams {
    /**
     * Number of days to count prune for (1-30).
     */
    days: number;
    /**
     * Role(s) to include.
     */
    include_roles: any[];
}
