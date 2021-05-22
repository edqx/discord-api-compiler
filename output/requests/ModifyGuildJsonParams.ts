/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildJsonParams {
    /**
     * Guild name.
     */
    name: string;
    /**
     * Guild [voice 
     * region](https://discord.com/developers/docs/resources/voice#voice-region-object) 
     * id.
     */
    region: string|null;
    /**
     * [verification 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level).
     */
    verification_level: number|null;
    /**
     * Default [message notification 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level).
     */
    default_message_notifications: number|null;
    /**
     * [explicit content filter 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level).
     */
    explicit_content_filter: number|null;
    /**
     * Id for afk channel.
     */
    afk_channel_id: string|null;
    /**
     * Afk timeout in seconds.
     */
    afk_timeout: number;
    /**
     * Base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when 
     * the server has the `ANIMATED_ICON` feature).
     */
    icon: any|null;
    /**
     * User id to transfer guild ownership to (must be owner).
     */
    owner_id: string;
    /**
     * Base64 16:9 png/jpeg image for the guild splash (when the server has the 
     * `INVITE_SPLASH` feature).
     */
    splash: any|null;
    /**
     * Base64 16:9 png/jpeg image for the guild discovery splash (when the server has 
     * the `DISCOVERABLE` feature).
     */
    discovery_splash: any|null;
    /**
     * Base64 16:9 png/jpeg image for the guild banner (when the server has the 
     * `BANNER` feature).
     */
    banner: any|null;
    /**
     * The id of the channel where guild notices such as welcome messages and boost 
     * events are posted.
     */
    system_channel_id: string|null;
    /**
     * [system channel 
     * flags](https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags).
     */
    system_channel_flags: number;
    /**
     * The id of the channel where Community guilds display rules and/or guidelines.
     */
    rules_channel_id: string|null;
    /**
     * The id of the channel where admins and moderators of Community guilds receive 
     * notices from Discord.
     */
    public_updates_channel_id: string|null;
    /**
     * The preferred locale of a Community guild used in server discovery and notices 
     * from Discord; defaults to "en-US".
     */
    preferred_locale: string|null;
    /**
     * Enabled guild features.
     */
    features: any[];
    /**
     * The description for the guild, if the guild is discoverable.
     */
    description: string|null;
}
