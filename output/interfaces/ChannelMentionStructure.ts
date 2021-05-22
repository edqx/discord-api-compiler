/**
 * https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure
 */
export interface ChannelMentionStructure {
    /**
     * Id of the channel.
     */
    id: string;
    /**
     * Id of the guild containing the channel.
     */
    guild_id: string;
    /**
     * The [type of 
     * channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types).
     */
    type: number;
    /**
     * The name of the channel.
     */
    name: string;
}
