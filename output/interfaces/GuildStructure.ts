import { ChannelStructure } from "./ChannelStructure";
import { EmojiStructure } from "./EmojiStructure";
import { GuildMemberStructure } from "./GuildMemberStructure";
import { PresenceUpdateEventFields } from "./PresenceUpdateEventFields";
import { RoleStructure } from "./RoleStructure";
import { StageInstanceStructure } from "./StageInstanceStructure";
import { VoiceStateStructure } from "./VoiceStateStructure";
import { WelcomeScreenStructure } from "./WelcomeScreenStructure";

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 * 
 * ** \* These fields are only sent within the 
 * [GUILD_CREATE](#DOCS_TOPICS_GATEWAY/guild-create) event **
 * ** \*\* These fields are only sent when using the [GET Current User 
 * Guilds](#DOCS_RESOURCES_USER/get-current-user-guilds) endpoint and are relative 
 * to the requested user **
 */
export interface GuildStructure {
    /**
     * Guild id.
     */
    id: string;
    /**
     * Guild name (2-100 characters, excluding trailing and leading whitespace).
     */
    name: string;
    /**
     * [icon hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    icon: string|null;
    /**
     * [icon hash](https://discord.com/developers/docs/reference#image-formatting), 
     * returned when in the template object.
     */
    icon_hash?: string|null;
    /**
     * [splash hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    splash: string|null;
    /**
     * [discovery splash 
     * hash](https://discord.com/developers/docs/reference#image-formatting); only 
     * present for guilds with the "DISCOVERABLE" feature.
     */
    discovery_splash: string|null;
    /**
     * True if [the 
     * user](https://discord.com/developers/docs/resources/user#get-current-user-guilds) 
     * is the owner of the guild.
     */
    owner?: boolean;
    /**
     * Id of owner.
     */
    owner_id: string;
    /**
     * Total permissions for [the 
     * user](https://discord.com/developers/docs/resources/user#get-current-user-guilds) 
     * in the guild (excludes overwrites).
     */
    permissions?: string;
    /**
     * [voice 
     * region](https://discord.com/developers/docs/resources/voice#voice-region-object) 
     * id for the guild.
     */
    region: string;
    /**
     * Id of afk channel.
     */
    afk_channel_id: string|null;
    /**
     * Afk timeout in seconds.
     */
    afk_timeout: number;
    /**
     * True if the server widget is enabled.
     */
    widget_enabled?: boolean;
    /**
     * The channel id that the widget will generate an invite to, or `null` if set to 
     * no invite.
     */
    widget_channel_id?: string|null;
    /**
     * [verification 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-verification-level) 
     * required for the guild.
     */
    verification_level: number;
    /**
     * Default [message notifications 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level).
     */
    default_message_notifications: number;
    /**
     * [explicit content filter 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level).
     */
    explicit_content_filter: number;
    /**
     * Roles in the guild.
     */
    roles: RoleStructure[];
    /**
     * Custom guild emojis.
     */
    emojis: EmojiStructure[];
    /**
     * Enabled guild features.
     */
    features: any[];
    /**
     * Required [MFA 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-mfa-level) 
     * for the guild.
     */
    mfa_level: number;
    /**
     * Application id of the guild creator if it is bot-created.
     */
    application_id: string|null;
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
     * The id of the channel where Community guilds can display rules and/or 
     * guidelines.
     */
    rules_channel_id: string|null;
    /**
     * When this guild was joined at.
     */
    joined_at?: string;
    /**
     * True if this is considered a large guild.
     */
    large?: boolean;
    /**
     * True if this guild is unavailable due to an outage.
     */
    unavailable?: boolean;
    /**
     * Total number of members in this guild.
     */
    member_count?: number;
    /**
     * States of members currently in voice channels; lacks the `guild_id` key.
     */
    voice_states?: Partial<VoiceStateStructure>[];
    /**
     * Users in the guild.
     */
    members?: GuildMemberStructure[];
    /**
     * Channels in the guild.
     */
    channels?: ChannelStructure[];
    /**
     * All active threads in the guild that current user has permission to view.
     */
    threads?: ChannelStructure[];
    /**
     * Presences of the members in the guild, will only include non-offline members if 
     * the size is greater than `large threshold`.
     */
    presences?: Partial<PresenceUpdateEventFields>[];
    /**
     * The maximum number of presences for the guild (the default value, currently 
     * 25000, is in effect when `null` is returned).
     */
    max_presences?: number|null;
    /**
     * The maximum number of members for the guild.
     */
    max_members?: number;
    /**
     * The vanity url code for the guild.
     */
    vanity_url_code: string|null;
    /**
     * The description of a Community guild.
     */
    description: string|null;
    /**
     * [banner hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    banner: string|null;
    /**
     * [premium 
     * tier](https://discord.com/developers/docs/resources/guild#guild-object-premium-tier) 
     * (Server Boost level).
     */
    premium_tier: number;
    /**
     * The number of boosts this guild currently has.
     */
    premium_subscription_count?: number;
    /**
     * The preferred locale of a Community guild; used in server discovery and notices 
     * from Discord; defaults to "en-US".
     */
    preferred_locale: string;
    /**
     * The id of the channel where admins and moderators of Community guilds receive 
     * notices from Discord.
     */
    public_updates_channel_id: string|null;
    /**
     * The maximum amount of users in a video channel.
     */
    max_video_channel_users?: number;
    /**
     * Approximate number of members in this guild, returned from the `GET 
     * /guilds/<id>` endpoint when `with_counts` is `true`.
     */
    approximate_member_count?: number;
    /**
     * Approximate number of non-offline members in this guild, returned from the `GET 
     * /guilds/<id>` endpoint when `with_counts` is `true`.
     */
    approximate_presence_count?: number;
    /**
     * The welcome screen of a Community guild, shown to new members, returned in an 
     * [Invite](https://discord.com/developers/docs/resources/invite#invite-object)'s 
     * guild object.
     */
    welcome_screen?: WelcomeScreenStructure;
    /**
     * True if this guild is [designated as 
     * NSFW](https://discord.com/developers/ttps:##support.discord.com#hc#en-us#articles#1500005389362-nsfw-server-designation).
     */
    nsfw: boolean;
    /**
     * Stage instances in the guild.
     */
    stage_instances?: StageInstanceStructure[];
}
