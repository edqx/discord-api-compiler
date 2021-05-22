import { ChannelStructure } from "../interfaces/ChannelStructure";
import { RoleStructure } from "../interfaces/RoleStructure";

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 * 
 * When using the `roles` parameter, the first member of the array is used to 
 * change properties of the guild's `@everyone` role. If you are trying to 
 * bootstrap a guild with additional roles, keep this in mind.
 * 
 * When using the `roles` parameter, the required `id` field within each role 
 * object is an integer placeholder, and will be replaced by the API upon 
 * consumption. Its purpose is to allow you to 
 * [overwrite](#DOCS_RESOURCES_CHANNEL/overwrite-object) a role's permissions in a 
 * channel when also passing in channels with the channels array.
 * 
 * When using the `channels` parameter, the `position` field is ignored, and none 
 * of the default channels are created.
 * 
 * When using the `channels` parameter, the `id` field within each channel object 
 * may be set to an integer placeholder, and will be replaced by the API upon 
 * consumption. Its purpose is to allow you to create `GUILD_CATEGORY` channels by 
 * setting the `parent_id` field on any children to the category's `id` field. 
 * Category channels must be listed before any children.
 */
export interface CreateGuildJsonParams {
    /**
     * Name of the guild (2-100 characters).
     */
    name: string;
    /**
     * [voice 
     * region](https://discord.com/developers/docs/resources/voice#voice-region-object) 
     * id.
     */
    region?: string;
    /**
     * Base64 128x128 image for the guild icon.
     */
    icon?: any;
    /**
     * [verification 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level).
     */
    verification_level?: number;
    /**
     * Default [message notification 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level).
     */
    default_message_notifications?: number;
    /**
     * [explicit content filter 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level).
     */
    explicit_content_filter?: number;
    /**
     * New guild roles.
     */
    roles?: RoleStructure[];
    /**
     * New guild's channels.
     */
    channels?: Partial<ChannelStructure>[];
    /**
     * Id for afk channel.
     */
    afk_channel_id?: string;
    /**
     * Afk timeout in seconds.
     */
    afk_timeout?: number;
    /**
     * The id of the channel where guild notices such as welcome messages and boost 
     * events are posted.
     */
    system_channel_id?: string;
    /**
     * [system channel 
     * flags](https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags).
     */
    system_channel_flags?: number;
}
