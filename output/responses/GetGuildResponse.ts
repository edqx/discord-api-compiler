/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface GetGuildResponse {
    /**
     * When `true`, will return approximate member and presence counts for the guild.
     */
    with_counts?: boolean;
}
