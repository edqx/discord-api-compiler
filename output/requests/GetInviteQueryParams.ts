/**
 * https://discord.com/developers/docs/resources/invite#query-string-params
 */
export interface GetInviteQueryParams {
    /**
     * Whether the invite should contain approximate member counts.
     */
    with_counts?: boolean;
    /**
     * Whether the invite should contain the expiration date.
     */
    with_expiration?: boolean;
}
