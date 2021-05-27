/**
 * https://discord.com/developers/docs/resources/user#query-string-params
 */
export interface GetCurrentUserGuildsQueryParams {
    /**
     * Get guilds before this guild ID.
     */
    before: string;
    /**
     * Get guilds after this guild ID.
     */
    after: string;
    /**
     * Max number of guilds to return (1-200).
     */
    limit: number;
}
