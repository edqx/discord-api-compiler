/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface GetReactionsQueryParams {
    /**
     * Get users after this user ID.
     */
    after: string;
    /**
     * Max number of users to return (1-100).
     */
    limit: number;
}
