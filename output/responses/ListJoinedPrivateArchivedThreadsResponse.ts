/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListJoinedPrivateArchivedThreadsResponse {
    /**
     * Returns threads before this id.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}