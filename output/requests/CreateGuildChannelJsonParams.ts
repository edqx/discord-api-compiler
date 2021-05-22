import { OverwriteStructure } from "../interfaces/OverwriteStructure";

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface CreateGuildChannelJsonParams {
    /**
     * Channel name (2-100 characters).
     */
    name: string;
    /**
     * The [type of 
     * channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types).
     */
    type: number;
    /**
     * Channel topic (0-1024 characters).
     */
    topic: string;
    /**
     * The bitrate (in bits) of the voice channel (voice only).
     */
    bitrate: number;
    /**
     * The user limit of the voice channel (voice only).
     */
    user_limit: number;
    /**
     * Amount of seconds a user has to wait before sending another message (0-21600); 
     * bots, as well as users with the permission `manage_messages` or 
     * `manage_channel`, are unaffected.
     */
    rate_limit_per_user: number;
    /**
     * Sorting position of the channel.
     */
    position: number;
    /**
     * The channel's permission overwrites.
     */
    permission_overwrites: OverwriteStructure[];
    /**
     * Id of the parent category for a channel.
     */
    parent_id: string;
    /**
     * Whether the channel is nsfw.
     */
    nsfw: boolean;
}
