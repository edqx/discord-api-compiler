/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface SearchGuildMembersQueryParams {
    /**
     * Query string to match username(s) and nickname(s) against.
     */
    query: string;
    /**
     * Max number of members to return (1-1000).
     */
    limit: number;
}
