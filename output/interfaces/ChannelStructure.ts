import { OverwriteStructure } from "./OverwriteStructure";
import { ThreadMemberStructure } from "./ThreadMemberStructure";
import { ThreadMetadataStructure } from "./ThreadMetadataStructure";
import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface ChannelStructure {
    /**
     * The id of this channel.
     */
    id: string;
    /**
     * The [type of 
     * channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types).
     */
    type: number;
    /**
     * The id of the guild (may be missing for some channel objects received over 
     * gateway guild dispatches).
     */
    guild_id?: string;
    /**
     * Sorting position of the channel.
     */
    position?: number;
    /**
     * Explicit permission overwrites for members and roles.
     */
    permission_overwrites?: OverwriteStructure[];
    /**
     * The name of the channel (2-100 characters).
     */
    name?: string;
    /**
     * The channel topic (0-1024 characters).
     */
    topic?: string|null;
    /**
     * Whether the channel is nsfw.
     */
    nsfw?: boolean;
    /**
     * The id of the last message sent in this channel (may not point to an existing or 
     * valid message).
     */
    last_message_id?: string|null;
    /**
     * The bitrate (in bits) of the voice channel.
     */
    bitrate?: number;
    /**
     * The user limit of the voice channel.
     */
    user_limit?: number;
    /**
     * Amount of seconds a user has to wait before sending another message (0-21600); 
     * bots, as well as users with the permission `manage_messages` or 
     * `manage_channel`, are unaffected.
     */
    rate_limit_per_user?: number;
    /**
     * The recipients of the DM.
     */
    recipients?: UserStructure[];
    /**
     * Icon hash.
     */
    icon?: string|null;
    /**
     * Id of the creator of the group DM or thread.
     */
    owner_id?: string;
    /**
     * Application id of the group DM creator if it is bot-created.
     */
    application_id?: string;
    /**
     * For guild channels: id of the parent category for a channel (each parent 
     * category can contain up to 50 channels), for threads: id of the text channel 
     * this thread was created.
     */
    parent_id?: string|null;
    /**
     * When the last pinned message was pinned. This may be `null` in events such as 
     * `GUILD_CREATE` when a message is not pinned.
     */
    last_pin_timestamp?: string|null;
    /**
     * [voice 
     * region](https://discord.com/developers/docs/resources/voice#voice-region-object) 
     * id for the voice channel, automatic when set to null.
     */
    rtc_region?: string|null;
    /**
     * The camera [video quality 
     * mode](https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes) 
     * of the voice channel, 1 when not present.
     */
    video_quality_mode?: number;
    /**
     * An approximate count of messages in a thread, stops counting at 50.
     */
    message_count?: number;
    /**
     * An approximate count of users in a thread, stops counting at 50.
     */
    member_count?: number;
    /**
     * Thread-specific fields not needed by other channels.
     */
    thread_metadata?: ThreadMetadataStructure;
    /**
     * Thread member object for the current user, if they have joined the thread, only 
     * included on certain API endpoints.
     */
    member?: ThreadMemberStructure;
}
