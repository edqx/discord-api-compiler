/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface ListGuildMembersQueryParams {
    /**
     * Max number of members to return (1-1000).
     */
    limit: number;
    /**
     * The highest user id in the previous page.
     */
    after: string;
}
