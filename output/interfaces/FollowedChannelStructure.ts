/**
 * https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure
 */
export interface FollowedChannelStructure {
    /**
     * Source channel id.
     */
    channel_id: string;
    /**
     * Created target webhook id.
     */
    webhook_id: string;
}
