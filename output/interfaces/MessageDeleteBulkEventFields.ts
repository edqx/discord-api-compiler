/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-bulk-message-delete-bulk-event-fields
 */
export interface MessageDeleteBulkEventFields {
    /**
     * The ids of the messages.
     */
    ids: string[];
    /**
     * The id of the channel.
     */
    channel_id: string;
    /**
     * The id of the guild.
     */
    guild_id?: string;
}
