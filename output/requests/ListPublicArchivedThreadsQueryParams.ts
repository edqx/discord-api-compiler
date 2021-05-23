/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListPublicArchivedThreadsQueryParams {
    /**
     * Returns threads before this timestamp.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}