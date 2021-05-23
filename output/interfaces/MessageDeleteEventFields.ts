/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-message-delete-event-fields
 */
export interface MessageDeleteEventFields {
    /**
     * The id of the message.
     */
    id: string;
    /**
     * The id of the channel.
     */
    channel_id: string;
    /**
     * The id of the guild.
     */
    guild_id?: string;
}
