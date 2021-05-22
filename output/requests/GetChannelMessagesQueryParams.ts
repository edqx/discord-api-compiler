/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface GetChannelMessagesQueryParams {
    /**
     * Get messages around this message ID.
     */
    around: string;
    /**
     * Get messages before this message ID.
     */
    before: string;
    /**
     * Get messages after this message ID.
     */
    after: string;
    /**
     * Max number of messages to return (1-100).
     */
    limit: number;
}
