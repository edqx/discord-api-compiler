/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface BulkDeleteMessagesJsonParams {
    /**
     * An array of message ids to delete (2-100).
     */
    messages: string[];
}
