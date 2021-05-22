/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface BeginGuildPruneJsonParams {
    /**
     * Number of days to prune (1-30).
     */
    days: number;
    /**
     * Whether 'pruned' is returned, discouraged for large guilds.
     */
    compute_prune_count: boolean;
    /**
     * Role(s) to include.
     */
    include_roles: string[];
    /**
     * Reason for the prune.
     */
    reason?: string;
}
