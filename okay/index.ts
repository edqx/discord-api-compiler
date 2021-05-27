/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommand
 * 
 * An application command is the base "command" model that belongs to an 
 * application. This is what you are creating when you `POST` a new command.
 * 
 * A command, or each individual subcommand, can have a maximum of 25 `options`
 * 
 * Required `options` must be listed before optional options
 */
export interface ApplicationCommand {
    /**
     * Unique id of the command.
     */
    id: string;
    /**
     * Unique id of the parent application.
     */
    application_id: string;
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * The parameters for the command.
     */
    options?: ApplicationCommandOption[];
    /**
     * Whether the command is enabled by default when the app is added to a guild.
     */
    default_permission?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandoption
 * 
 * You can specify a maximum of 25 `choices` per option
 */
export interface ApplicationCommandOption {
    /**
     * Value of 
     * [ApplicationCommandOptionType](https://discord.com/developers/docs/interactions/slash/commands#applicationcommandoptiontype).
     */
    type: number;
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * If the parameter is required or optional--default `false`.
     */
    required?: boolean;
    /**
     * Choices for `string` and `int` types for the user to pick from.
     */
    choices?: ApplicationCommandOptionChoice[];
    /**
     * If the option is a subcommand or subcommand group type, this nested options will 
     * be the parameters.
     */
    options?: ApplicationCommandOption[];
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandoptiontype
 */
export enum ApplicationCommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandoptionchoice
 * 
 * If you specify `choices` for an option, they are the **only** valid values for a 
 * user to pick
 */
export interface ApplicationCommandOptionChoice {
    /**
     * 1-100 character choice name.
     */
    name: string;
    /**
     * Value of the choice, up to 100 characters if string.
     */
    value: string|number;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#json-params
 */
export interface CreateGlobalApplicationCommandJsonParams {
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * The parameters for the command.
     */
    options?: ApplicationCommandOption[];
    /**
     * Whether the command is enabled by default when the app is added to a guild.
     */
    default_permission?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#json-params
 */
export interface EditGlobalApplicationCommandJsonParams {
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * The parameters for the command.
     */
    options: (ApplicationCommandOption|null)[];
    /**
     * Whether the command is enabled by default when the app is added to a guild.
     */
    default_permission: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#json-params
 */
export interface CreateGuildApplicationCommandJsonParams {
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * The parameters for the command.
     */
    options?: ApplicationCommandOption[];
    /**
     * Whether the command is enabled by default when the app is added to a guild.
     */
    default_permission?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#json-params
 */
export interface EditGuildApplicationCommandJsonParams {
    /**
     * 1-32 lowercase character name matching `^[\w-]{1,32}$`.
     */
    name: string;
    /**
     * 1-100 character description.
     */
    description: string;
    /**
     * The parameters for the command.
     */
    options: (ApplicationCommandOption|null)[];
    /**
     * Whether the command is enabled by default when the app is added to a guild.
     */
    default_permission: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#guildapplicationcommandpermissions
 * 
 * Returned when fetching the permissions for a command in a guild.
 */
export interface GuildApplicationCommandPermissions {
    /**
     * The id of the command.
     */
    id: string;
    /**
     * The id of the application the command belongs to.
     */
    application_id: string;
    /**
     * The id of the guild.
     */
    guild_id: string;
    /**
     * The permissions for the command in the guild.
     */
    permissions: ApplicationCommandPermissions[];
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandpermissions
 * 
 * Application command permissions allow you to enable or disable commands for 
 * specific users or roles within a guild.
 */
export interface ApplicationCommandPermissions {
    /**
     * The id of the role or user.
     */
    id: string;
    /**
     * Role or user.
     */
    type: ApplicationCommandPermissionType;
    /**
     * `true` to allow, `false`, to disallow.
     */
    permission: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#applicationcommandpermissiontype
 */
export enum ApplicationCommandPermissionType {
    ROLE = 1,
    USER = 2
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#json-params
 */
export interface EditApplicationCommandPermissionsJsonParams {
    /**
     * The permissions for the command in the guild.
     */
    permissions: ApplicationCommandPermissions[];
}

/**
 * https://discord.com/developers/docs/resources/audit/log#query-string-params
 */
export interface GetGuildAuditLogQueryParams {
    /**
     * Filter the log for actions made by a user.
     */
    user_id: string;
    /**
     * The type of [audit log 
     * event](https://discord.com/developers/docs/resources/audit/log#audit-log-entry-object-audit-log-events).
     */
    action_type: number;
    /**
     * Filter the log before a certain entry id.
     */
    before: string;
    /**
     * How many entries are returned (default 50, minimum 1, maximum 100).
     */
    limit: number;
}

/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-object-audit-log-structure
 */
export interface AuditLogStructure {
    /**
     * List of webhooks found in the audit log.
     */
    webhooks: WebhookStructure[];
    /**
     * List of users found in the audit log.
     */
    users: UserStructure[];
    /**
     * List of audit log entries.
     */
    audit_log_entries: AuditLogEntryStructure[];
    /**
     * List of partial integration objects.
     */
    integrations: Partial<IntegrationStructure>[];
}

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export interface WebhookStructure {
    /**
     * The id of the webhook.
     */
    id: string;
    /**
     * The 
     * [type](https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types) 
     * of the webhook.
     */
    type: number;
    /**
     * The guild id this webhook is for, if any.
     */
    guild_id?: string|null;
    /**
     * The channel id this webhook is for, if any.
     */
    channel_id: string|null;
    /**
     * The user this webhook was created by (not returned when getting a webhook with 
     * its token).
     */
    user?: UserStructure;
    /**
     * The default name of the webhook.
     */
    name: string|null;
    /**
     * The default user avatar 
     * [hash](https://discord.com/developers/docs/reference#image-formatting) of the 
     * webhook.
     */
    avatar: string|null;
    /**
     * The secure token of the webhook (returned for Incoming Webhooks).
     */
    token?: string;
    /**
     * The bot/OAuth2 application that created this webhook.
     */
    application_id: string|null;
    /**
     * The guild of the channel that this webhook is following (returned for Channel 
     * Follower Webhooks).
     */
    source_guild?: Partial<GuildStructure>;
    /**
     * The channel that this webhook is following (returned for Channel Follower 
     * Webhooks).
     */
    source_channel?: Partial<ChannelStructure>;
    /**
     * The url used for executing the webhook (returned by the 
     * [webhooks](https://discord.com/developers/docs/topics/oauth2#webhooks) OAuth2 
     * flow).
     */
    url?: string;
}

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
 */
export enum WebhookTypes {
    Incoming = 1,
    ChannelFollower = 2,
    Application = 3
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface UserStructure {
    /**
     * The user's id.
     */
    id: string;
    /**
     * The user's username, not unique across the platform.
     */
    username: string;
    /**
     * The user's 4-digit discord-tag.
     */
    discriminator: string;
    /**
     * The user's [avatar 
     * hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    avatar: string|null;
    /**
     * Whether the user belongs to an OAuth2 application.
     */
    bot?: boolean;
    /**
     * Whether the user is an Official Discord System user (part of the urgent message 
     * system).
     */
    system?: boolean;
    /**
     * Whether the user has two factor enabled on their account.
     */
    mfa_enabled?: boolean;
    /**
     * The user's chosen language option.
     */
    locale?: string;
    /**
     * Whether the email on this account has been verified.
     */
    verified?: boolean;
    /**
     * The user's email.
     */
    email?: string|null;
    /**
     * The 
     * [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) 
     * on a user's account.
     */
    flags?: number;
    /**
     * The [type of Nitro 
     * subscription](https://discord.com/developers/docs/resources/user#user-object-premium-types) 
     * on a user's account.
     */
    premium_type?: number;
    /**
     * The public 
     * [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) 
     * on a user's account.
     */
    public_flags?: number;
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 * 
 * Premium types denote the level of premium a user has. Visit the 
 * [Nitro](https://discord.com/nitro) page to learn more about the premium plans we 
 * currently offer.
 */
export enum PremiumTypes {
    None = 0,
    NitroClassic = 1,
    Nitro = 2
}

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
     * [guild NSFW 
     * level](https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level).
     */
    nsfw_level: number;
    /**
     * Stage instances in the guild.
     */
    stage_instances?: StageInstanceStructure[];
}

/**
 * https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface VoiceRegionStructure {
    /**
     * Unique ID for the region.
     */
    id: string;
    /**
     * Name of the region.
     */
    name: string;
    /**
     * True if this is a vip-only server.
     */
    vip: boolean;
    /**
     * True for a single server that is closest to the current user's client.
     */
    optimal: boolean;
    /**
     * Whether this is a deprecated voice region (avoid switching to these).
     */
    deprecated: boolean;
    /**
     * Whether this is a custom voice region (used for events/etc).
     */
    custom: boolean;
}

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 * 
 * Roles without colors (`color == 0`) do not count towards the final computed 
 * color in the user list.
 */
export interface RoleStructure {
    /**
     * Role id.
     */
    id: string;
    /**
     * Role name.
     */
    name: string;
    /**
     * Integer representation of hexadecimal color code.
     */
    color: number;
    /**
     * If this role is pinned in the user listing.
     */
    hoist: boolean;
    /**
     * Position of this role.
     */
    position: number;
    /**
     * Permission bit set.
     */
    permissions: string;
    /**
     * Whether this role is managed by an integration.
     */
    managed: boolean;
    /**
     * Whether this role is mentionable.
     */
    mentionable: boolean;
    /**
     * The tags this role has.
     */
    tags?: RoleTagsStructure;
}

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface RoleTagsStructure {
    /**
     * The id of the bot this role belongs to.
     */
    bot_id?: string;
    /**
     * The id of the integration this role belongs to.
     */
    integration_id?: string;
    /**
     * Whether this is the guild's premium subscriber role.
     */
    premium_subscriber?: null;
}

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface EmojiStructure {
    /**
     * [emoji id](https://discord.com/developers/docs/reference#image-formatting).
     */
    id: string|null;
    /**
     * Emoji name.
     */
    name: string|null;
    /**
     * Roles allowed to use this emoji.
     */
    roles?: RoleStructure[];
    /**
     * User that created this emoji.
     */
    user?: UserStructure;
    /**
     * Whether this emoji must be wrapped in colons.
     */
    require_colons?: boolean;
    /**
     * Whether this emoji is managed.
     */
    managed?: boolean;
    /**
     * Whether this emoji is animated.
     */
    animated?: boolean;
    /**
     * Whether this emoji can be used, may be false due to loss of Server Boosts.
     */
    available?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum SystemChannelFlags {
    SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
    SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
    SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2
}

/**
 * https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface VoiceStateStructure {
    /**
     * The guild id this voice state is for.
     */
    guild_id?: string;
    /**
     * The channel id this user is connected to.
     */
    channel_id: string|null;
    /**
     * The user id this voice state is for.
     */
    user_id: string;
    /**
     * The guild member this voice state is for.
     */
    member?: GuildMemberStructure;
    /**
     * The session id for this voice state.
     */
    session_id: string;
    /**
     * Whether this user is deafened by the server.
     */
    deaf: boolean;
    /**
     * Whether this user is muted by the server.
     */
    mute: boolean;
    /**
     * Whether this user is locally deafened.
     */
    self_deaf: boolean;
    /**
     * Whether this user is locally muted.
     */
    self_mute: boolean;
    /**
     * Whether this user is streaming using "Go Live".
     */
    self_stream?: boolean;
    /**
     * Whether this user's camera is enabled.
     */
    self_video: boolean;
    /**
     * Whether this user is muted by the current user.
     */
    suppress: boolean;
    /**
     * The time at which the user requested to speak.
     */
    request_to_speak_timestamp: string|null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 * 
 * The field `user` won't be included in the member object attached to 
 * `MESSAGE_CREATE` and `MESSAGE_UPDATE` gateway events.
 * 
 * In `GUILD_` events, `pending` will always be included as true or false. In non 
 * `GUILD_` events which can only be triggered by non-`pending` users, `pending` 
 * will not be included.
 */
export interface GuildMemberStructure {
    /**
     * The user this guild member represents.
     */
    user?: UserStructure;
    /**
     * This users guild nickname.
     */
    nick?: string|null;
    /**
     * Array of 
     * [role](https://discord.com/developers/docs/topics/permissions#role-object) 
     * object ids.
     */
    roles: string[];
    /**
     * When the user joined the guild.
     */
    joined_at: string;
    /**
     * When the user started 
     * [boosting](https://discord.com/developers/ttps:##support.discord.com#hc#en-us#articles#360028038352-server-boosting-) 
     * the guild.
     */
    premium_since?: string|null;
    /**
     * Whether the user is deafened in voice channels.
     */
    deaf: boolean;
    /**
     * Whether the user is muted in voice channels.
     */
    mute: boolean;
    /**
     * Whether the user has not yet passed the guild's [Membership 
     * Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) 
     * requirements.
     */
    pending?: boolean;
    /**
     * Total permissions of the member in the channel, including overwrites, returned 
     * when in the interaction object.
     */
    permissions?: string;
}

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

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface OverwriteStructure {
    /**
     * Role or user id.
     */
    id: string;
    /**
     * Either 0 (role) or 1 (member).
     */
    type: number;
    /**
     * Permission bit set.
     */
    allow: string;
    /**
     * Permission bit set.
     */
    deny: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export interface ThreadMetadataStructure {
    /**
     * Whether the thread is archived.
     */
    archived: boolean;
    /**
     * Id of the user that last archived or unarchived the thread.
     */
    archiver_id?: string;
    /**
     * Duration in minutes to automatically archive the thread after recent activity, 
     * can be set to: 60, 1440, 4320, 10080.
     */
    auto_archive_duration: number;
    /**
     * Timestamp when the thread's archive status was last changed, used for 
     * calculating recent activity.
     */
    archive_timestamp: string;
    /**
     * When a thread is locked, only users with MANAGE_THREADS can unarchive it.
     */
    locked?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface ThreadMemberStructure {
    /**
     * The id of the thread.
     */
    id: string;
    /**
     * The id of the user.
     */
    user_id: string;
    /**
     * The time the current user last joined the thread.
     */
    join_timestamp: string;
    /**
     * Any user-thread settings, currently only used for notifications.
     */
    flags: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
 */
export interface PresenceUpdateEventFields {
    /**
     * The user presence is being updated for.
     */
    user: UserStructure;
    /**
     * Id of the guild.
     */
    guild_id: string;
    /**
     * Either "idle", "dnd", "online", or "offline".
     */
    status: string;
    /**
     * User's current activities.
     */
    activities: ActivityStructure[];
    /**
     * User's platform-dependent status.
     */
    client_status: ClientStatusObject;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
 * 
 * Bots are only able to send `name`, `type`, and optionally `url`.
 */
export interface ActivityStructure {
    /**
     * The activity's name.
     */
    name: string;
    /**
     * [activity 
     * type](https://discord.com/developers/docs/topics/gateway#activity-object-activity-types).
     */
    type: number;
    /**
     * Stream url, is validated when type is 1.
     */
    url?: string|null;
    /**
     * Unix timestamp of when the activity was added to the user's session.
     */
    created_at: number;
    /**
     * Unix timestamps for start and/or end of the game.
     */
    timestamps?: ActivityTimestamps;
    /**
     * Application id for the game.
     */
    application_id?: string;
    /**
     * What the player is currently doing.
     */
    details?: string|null;
    /**
     * The user's current party status.
     */
    state?: string|null;
    /**
     * The emoji used for a custom status.
     */
    emoji?: ActivityEmoji|null;
    /**
     * Information for the current party of the player.
     */
    party?: ActivityParty;
    /**
     * Images for the presence and their hover texts.
     */
    assets?: ActivityAssets;
    /**
     * Secrets for Rich Presence joining and spectating.
     */
    secrets?: ActivitySecrets;
    /**
     * Whether or not the activity is an instanced game session.
     */
    instance?: boolean;
    /**
     * [activity 
     * flags](https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags) 
     * `OR`d together, describes what the payload includes.
     */
    flags?: number;
    /**
     * The custom buttons shown in the Rich Presence (max 2).
     */
    buttons?: ActivityButtons[];
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
 */
export interface ActivityTimestamps {
    /**
     * Unix time (in milliseconds) of when the activity started.
     */
    start?: number;
    /**
     * Unix time (in milliseconds) of when the activity ends.
     */
    end?: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji
 */
export interface ActivityEmoji {
    /**
     * The name of the emoji.
     */
    name: string;
    /**
     * The id of the emoji.
     */
    id?: string;
    /**
     * Whether this emoji is animated.
     */
    animated?: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export interface ActivityParty {
    /**
     * The id of the party.
     */
    id?: string;
    /**
     * Used to show the party's current and maximum size.
     */
    size?: any[];
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export interface ActivityAssets {
    /**
     * The id for a large asset of the activity, usually a snowflake.
     */
    large_image?: string;
    /**
     * Text displayed when hovering over the large image of the activity.
     */
    large_text?: string;
    /**
     * The id for a small asset of the activity, usually a snowflake.
     */
    small_image?: string;
    /**
     * Text displayed when hovering over the small image of the activity.
     */
    small_text?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
export interface ActivitySecrets {
    /**
     * The secret for joining a party.
     */
    join?: string;
    /**
     * The secret for spectating a game.
     */
    spectate?: string;
    /**
     * The secret for a specific instanced match.
     */
    match?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
 */
export enum ActivityFlags {
    INSTANCE = 1 << 0,
    JOIN = 1 << 1,
    SPECTATE = 1 << 2,
    JOIN_REQUEST = 1 << 3,
    SYNC = 1 << 4,
    PLAY = 1 << 5
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons
 * 
 * When received over the gateway, the `buttons` field is an array of strings, 
 * which are the button labels. Bots cannot access a user's activity button URLs. 
 * When sending, the `buttons` field must be an array of the below object:
 */
export interface ActivityButtons {
    /**
     * The text shown on the button (1-32 characters).
     */
    label: string;
    /**
     * The url opened when clicking the button (1-512 characters).
     */
    url: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#client-status-object
 * 
 * Active sessions are indicated with an "online", "idle", or "dnd" string per 
 * platform. If a user is offline or invisible, the corresponding field is not 
 * present.
 */
export interface ClientStatusObject {
    /**
     * The user's status set for an active desktop (Windows, Linux, Mac) application 
     * session.
     */
    desktop?: string;
    /**
     * The user's status set for an active mobile (iOS, Android) application session.
     */
    mobile?: string;
    /**
     * The user's status set for an active web (browser, bot account) application 
     * session.
     */
    web?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
 */
export interface WelcomeScreenStructure {
    /**
     * The server description shown in the welcome screen.
     */
    description: string|null;
    /**
     * The channels shown in the welcome screen, up to 5.
     */
    welcome_channels: WelcomeScreenChannelStructure[];
}

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export interface WelcomeScreenChannelStructure {
    /**
     * The channel's id.
     */
    channel_id: string;
    /**
     * The description shown for the channel.
     */
    description: string;
    /**
     * The [emoji id](https://discord.com/developers/docs/reference#image-formatting), 
     * if the emoji is custom.
     */
    emoji_id: string|null;
    /**
     * The emoji name if custom, the unicode character if standard, or `null` if no 
     * emoji is set.
     */
    emoji_name: string|null;
}

/**
 * https://discord.com/developers/docs/resources/invite#invite-object-invite-structure
 */
export interface InviteStructure {
    /**
     * The invite code (unique ID).
     */
    code: string;
    /**
     * The guild this invite is for.
     */
    guild?: Partial<GuildStructure>;
    /**
     * The channel this invite is for.
     */
    channel: Partial<ChannelStructure>;
    /**
     * The user who created the invite.
     */
    inviter?: UserStructure;
    /**
     * The [type of 
     * target](https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types) 
     * for this voice channel invite.
     */
    target_type?: number;
    /**
     * The user whose stream to display for this voice channel stream invite.
     */
    target_user?: UserStructure;
    /**
     * The embedded application to open for this voice channel embedded application 
     * invite.
     */
    target_application?: Partial<ApplicationStructure>;
    /**
     * Approximate count of online members, returned from the `GET /invites/<code>` 
     * endpoint when `with_counts` is `true`.
     */
    approximate_presence_count?: number;
    /**
     * Approximate count of total members, returned from the `GET /invites/<code>` 
     * endpoint when `with_counts` is `true`.
     */
    approximate_member_count?: number;
    /**
     * The expiration date of this invite, returned from the `GET /invites/<code>` 
     * endpoint when `with_expiration` is `true`.
     */
    expires_at?: string|null;
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface ApplicationStructure {
    /**
     * The id of the app.
     */
    id: string;
    /**
     * The name of the app.
     */
    name: string;
    /**
     * The [icon hash](https://discord.com/developers/docs/reference#image-formatting) 
     * of the app.
     */
    icon: string|null;
    /**
     * The description of the app.
     */
    description: string;
    /**
     * An array of rpc origin urls, if rpc is enabled.
     */
    rpc_origins?: string[];
    /**
     * When false only app owner can join the app's bot to guilds.
     */
    bot_public: boolean;
    /**
     * When true the app's bot will only join upon completion of the full oauth2 code 
     * grant flow.
     */
    bot_require_code_grant: boolean;
    /**
     * The url of the app's terms of service.
     */
    terms_of_service_url?: string;
    /**
     * The url of the app's privacy policy.
     */
    privacy_policy_url?: string;
    /**
     * Partial user object containing info on the owner of the application.
     */
    owner: Partial<UserStructure>;
    /**
     * If this application is a game sold on Discord, this field will be the summary 
     * field for the store page of its primary sku.
     */
    summary: string;
    /**
     * The hex encoded key for verification in interactions and the GameSDK's 
     * [GetTicket](https://discord.com/developers/docs/game/sdk/applications#getticket).
     */
    verify_key: string;
    /**
     * If the application belongs to a team, this will be a list of the members of that 
     * team.
     */
    team: any|null;
    /**
     * If this application is a game sold on Discord, this field will be the guild to 
     * which it has been linked.
     */
    guild_id?: string;
    /**
     * If this application is a game sold on Discord, this field will be the id of the 
     * "Game SKU" that is created, if exists.
     */
    primary_sku_id?: string;
    /**
     * If this application is a game sold on Discord, this field will be the URL slug 
     * that links to the store page.
     */
    slug?: string;
    /**
     * The application's default rich presence invite [cover image 
     * hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    cover_image?: string;
    /**
     * The application's public 
     * [flags](https://discord.com/developers/docs/resources/application#application-application-flags).
     */
    flags: number;
}

/**
 * https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-stage-instance-structure
 */
export interface StageInstanceStructure {
    /**
     * The id of this Stage instance.
     */
    id: string;
    /**
     * The guild id of the associated Stage channel.
     */
    guild_id: string;
    /**
     * The id of the associated Stage channel.
     */
    channel_id: string;
    /**
     * The topic of the Stage instance (1-120 characters).
     */
    topic: string;
    /**
     * The [privacy 
     * level](https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-privacy-level) 
     * of the Stage instance.
     */
    privacy_level: number;
    /**
     * Whether or not Stage discovery is disabled.
     */
    discoverable_disabled: boolean;
}

/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-entry-object-audit-log-entry-structure
 */
export interface AuditLogEntryStructure {
    /**
     * Id of the affected entity (webhook, user, role, etc.).
     */
    target_id: string|null;
    /**
     * Changes made to the target_id.
     */
    changes?: AuditLogChangeStructure[];
    /**
     * The user who made the changes.
     */
    user_id: string|null;
    /**
     * Id of the entry.
     */
    id: string;
    /**
     * Type of action that occurred.
     */
    action_type: any;
    /**
     * Additional info for certain action types.
     */
    options?: OptionalAuditEntryInfo;
    /**
     * The reason for the change (0-512 characters).
     */
    reason?: string;
}

/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-change-object-audit-log-change-structure
 * 
 * If `new_value` is not present in the change object, while `old_value` is, that 
 * means the property that was changed has been reset, or set to `null`
 */
export interface AuditLogChangeStructure {
    /**
     * New value of the key.
     */
    new_value?: any;
    /**
     * Old value of the key.
     */
    old_value?: any;
    /**
     * Name of audit log [change 
     * key](https://discord.com/developers/docs/resources/audit/log#audit-log-change-object-audit-log-change-key).
     */
    key: string;
}

/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-entry-object-optional-audit-entry-info
 */
export interface OptionalAuditEntryInfo {
    /**
     * Number of days after which inactive members were kicked.
     */
    delete_member_days: string;
    /**
     * Number of members removed by the prune.
     */
    members_removed: string;
    /**
     * Channel in which the entities were targeted.
     */
    channel_id: string;
    /**
     * Id of the message that was targeted.
     */
    message_id: string;
    /**
     * Number of entities that were targeted.
     */
    count: string;
    /**
     * Id of the overwritten entity.
     */
    id: string;
    /**
     * Type of overwritten entity - "0" for "role" or "1" for "member".
     */
    type: string;
    /**
     * Name of the role if type is "0" (not present if type is "1").
     */
    role_name: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 * 
 * ** \* These fields are not provided for discord bot integrations. **
 */
export interface IntegrationStructure {
    /**
     * Integration id.
     */
    id: string;
    /**
     * Integration name.
     */
    name: string;
    /**
     * Integration type (twitch, youtube, or discord).
     */
    type: string;
    /**
     * Is this integration enabled.
     */
    enabled: boolean;
    /**
     * Is this integration syncing.
     */
    syncing?: boolean;
    /**
     * Id that this integration uses for "subscribers".
     */
    role_id?: string;
    /**
     * Whether emoticons should be synced for this integration (twitch only currently).
     */
    enable_emoticons?: boolean;
    /**
     * The behavior of expiring subscribers.
     */
    expire_behavior?: IntegrationExpireBehaviors;
    /**
     * The grace period (in days) before expiring subscribers.
     */
    expire_grace_period?: number;
    /**
     * User for this integration.
     */
    user?: UserStructure;
    /**
     * Integration account information.
     */
    account: IntegrationAccountStructure;
    /**
     * When this integration was last synced.
     */
    synced_at?: string;
    /**
     * How many subscribers this integration has.
     */
    subscriber_count?: number;
    /**
     * Has this integration been revoked.
     */
    revoked?: boolean;
    /**
     * The bot/OAuth2 application for discord integrations.
     */
    application?: IntegrationApplicationStructure;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
export enum IntegrationExpireBehaviors {
    RemoveRole = 0,
    Kick = 1
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure
 */
export interface IntegrationAccountStructure {
    /**
     * Id of the account.
     */
    id: string;
    /**
     * Name of the account.
     */
    name: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
 */
export interface IntegrationApplicationStructure {
    /**
     * The id of the app.
     */
    id: string;
    /**
     * The name of the app.
     */
    name: string;
    /**
     * The [icon hash](https://discord.com/developers/docs/reference#image-formatting) 
     * of the app.
     */
    icon: string|null;
    /**
     * The description of the app.
     */
    description: string;
    /**
     * The description of the app.
     */
    summary: string;
    /**
     * The bot associated with this application.
     */
    bot?: UserStructure;
}

/**
 * https://discord.com/developers/docs/resources/channel#json-params-(group-dm)
 * 
 * Fires a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway event.
 */
export interface ModifyChannelJsonParams {
    /**
     * 2-100 character channel name.
     */
    name: string;
    /**
     * Base64 encoded icon.
     */
    icon: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface GetChannelMessagesQueryParams {
    /**
     * Get messages around this message ID.
     */
    around: string;
    /**
     * Get messages before this message ID.
     */
    before: string;
    /**
     * Get messages after this message ID.
     */
    after: string;
    /**
     * Max number of messages to return (1-100).
     */
    limit: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-structure
 * 
 * \* The author object follows the structure of the user object, but is only a 
 * valid user in the case where the message is generated by a user or bot user. If 
 * the message is generated by a webhook, the author object corresponds to the 
 * webhook's id, username, and avatar. You can tell if a message is generated by a 
 * webhook by checking for the `webhook_id` on the message object.
 * \*\* The member object exists in 
 * [MESSAGE_CREATE](#DOCS_TOPICS_GATEWAY/message-create) and 
 * [MESSAGE_UPDATE](#DOCS_TOPICS_GATEWAY/message-update) events from text-based 
 * guild channels. This allows bots to obtain real-time member data without 
 * requiring bots to store member state in memory.
 * \*\*\* The user objects in the mentions array will only have the partial 
 * `member` field present in [MESSAGE_CREATE](#DOCS_TOPICS_GATEWAY/message-create) 
 * and [MESSAGE_UPDATE](#DOCS_TOPICS_GATEWAY/message-update) events from text-based 
 * guild channels.
 * \*\*\*\* Not all channel mentions in a message will appear in 
 * `mention_channels`. Only textual channels that are visible to everyone in a 
 * lurkable guild will ever be included. Only crossposted messages (via Channel 
 * Following) currently include `mention_channels` at all. If no mentions in the 
 * message meet these requirements, this field will not be sent.
 * \*\*\*\*\* This field is only returned for messages with a `type` of `19` 
 * (REPLY) or `21` (THREAD_STARTER_MESSAGE). If the message is a reply but the 
 * `referenced_message` field is not present, the backend did not attempt to fetch 
 * the message that was being replied to, so its state is unknown. If the field 
 * exists but is null, the referenced message was deleted.
 */
export interface MessageStructure {
    /**
     * Id of the message.
     */
    id: string;
    /**
     * Id of the channel the message was sent in.
     */
    channel_id: string;
    /**
     * Id of the guild the message was sent in.
     */
    guild_id?: string;
    /**
     * The author of this message (not guaranteed to be a valid user, see below).
     */
    author: UserStructure;
    /**
     * Member properties for this message's author.
     */
    member?: Partial<GuildMemberStructure>;
    /**
     * Contents of the message.
     */
    content: string;
    /**
     * When this message was sent.
     */
    timestamp: string;
    /**
     * When this message was edited (or null if never).
     */
    edited_timestamp: string|null;
    /**
     * Whether this was a TTS message.
     */
    tts: boolean;
    /**
     * Whether this message mentions everyone.
     */
    mention_everyone: boolean;
    /**
     * Users specifically mentioned in the message.
     */
    mentions: Partial<UserStructure>[];
    /**
     * Roles specifically mentioned in this message.
     */
    mention_roles: RoleStructure[];
    /**
     * Channels specifically mentioned in this message.
     */
    mention_channels?: ChannelMentionStructure[];
    /**
     * Any attached files.
     */
    attachments: AttachmentStructure[];
    /**
     * Any embedded content.
     */
    embeds: EmbedStructure[];
    /**
     * Reactions to the message.
     */
    reactions?: ReactionStructure[];
    /**
     * Used for validating a message was sent.
     */
    nonce?: number|string;
    /**
     * Whether this message is pinned.
     */
    pinned: boolean;
    /**
     * If the message is generated by a webhook, this is the webhook's id.
     */
    webhook_id?: string;
    /**
     * [type of 
     * message](https://discord.com/developers/docs/resources/channel#message-object-message-types).
     */
    type: number;
    /**
     * Sent with Rich Presence-related chat embeds.
     */
    activity?: MessageActivityStructure;
    /**
     * Sent with Rich Presence-related chat embeds.
     */
    application?: Partial<ApplicationStructure>;
    /**
     * If the message is a response to an 
     * [Interaction](https://discord.com/developers/docs/interactions/slash/commands#), 
     * this is the id of the interaction's application.
     */
    application_id?: string;
    /**
     * Data showing the source of a crosspost, channel follow add, pin, or reply 
     * message.
     */
    message_reference?: MessageReferenceStructure;
    /**
     * [message 
     * flags](https://discord.com/developers/docs/resources/channel#message-object-message-flags) 
     * combined as a 
     * [bitfield](https://discord.com/developers/ttps:##en.wikipedia.org#wiki#bit/field).
     */
    flags?: number;
    /**
     * The stickers sent with the message (bots currently can only receive messages 
     * with stickers, not send).
     */
    stickers?: MessageStickerStructure[];
    /**
     * The message associated with the message_reference.
     */
    referenced_message?: MessageStructure|null;
    /**
     * Sent if the message is a response to an 
     * [Interaction](https://discord.com/developers/docs/interactions/slash/commands#).
     */
    interaction?: MessageInteraction;
    /**
     * The thread that was started from this message, includes [thread 
     * member](https://discord.com/developers/docs/resources/channel#thread-member-object) 
     * object.
     */
    thread?: any;
    /**
     * Sent if the message contains components like buttons, action rows, or other 
     * interactive components.
     */
    components?: any;
}

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

/**
 * https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure
 */
export interface AttachmentStructure {
    /**
     * Attachment id.
     */
    id: string;
    /**
     * Name of file attached.
     */
    filename: string;
    /**
     * The attachment's [media 
     * type](https://discord.com/developers/ttps:##en.wikipedia.org#wiki#media/type).
     */
    content_type?: string;
    /**
     * Size of file in bytes.
     */
    size: number;
    /**
     * Source url of file.
     */
    url: string;
    /**
     * A proxied url of file.
     */
    proxy_url: string;
    /**
     * Height of file (if image).
     */
    height?: number|null;
    /**
     * Width of file (if image).
     */
    width?: number|null;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
 */
export interface EmbedStructure {
    /**
     * Title of embed.
     */
    title?: string;
    /**
     * [type of 
     * embed](https://discord.com/developers/docs/resources/channel#embed-object-embed-types) 
     * (always "rich" for webhook embeds).
     */
    type?: string;
    /**
     * Description of embed.
     */
    description?: string;
    /**
     * Url of embed.
     */
    url?: string;
    /**
     * Timestamp of embed content.
     */
    timestamp?: string;
    /**
     * Color code of the embed.
     */
    color?: number;
    /**
     * Footer information.
     */
    footer?: EmbedFooterStructure;
    /**
     * Image information.
     */
    image?: EmbedImageStructure;
    /**
     * Thumbnail information.
     */
    thumbnail?: EmbedThumbnailStructure;
    /**
     * Video information.
     */
    video?: EmbedVideoStructure;
    /**
     * Provider information.
     */
    provider?: EmbedProviderStructure;
    /**
     * Author information.
     */
    author?: EmbedAuthorStructure;
    /**
     * Fields information.
     */
    fields?: EmbedFieldStructure[];
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export interface EmbedFooterStructure {
    /**
     * Footer text.
     */
    text: string;
    /**
     * Url of footer icon (only supports http(s) and attachments).
     */
    icon_url?: string;
    /**
     * A proxied url of footer icon.
     */
    proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface EmbedImageStructure {
    /**
     * Source url of image (only supports http(s) and attachments).
     */
    url?: string;
    /**
     * A proxied url of the image.
     */
    proxy_url?: string;
    /**
     * Height of image.
     */
    height?: number;
    /**
     * Width of image.
     */
    width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export interface EmbedThumbnailStructure {
    /**
     * Source url of thumbnail (only supports http(s) and attachments).
     */
    url?: string;
    /**
     * A proxied url of the thumbnail.
     */
    proxy_url?: string;
    /**
     * Height of thumbnail.
     */
    height?: number;
    /**
     * Width of thumbnail.
     */
    width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export interface EmbedVideoStructure {
    /**
     * Source url of video.
     */
    url?: string;
    /**
     * A proxied url of the video.
     */
    proxy_url?: string;
    /**
     * Height of video.
     */
    height?: number;
    /**
     * Width of video.
     */
    width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export interface EmbedProviderStructure {
    /**
     * Name of provider.
     */
    name?: string;
    /**
     * Url of provider.
     */
    url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export interface EmbedAuthorStructure {
    /**
     * Name of author.
     */
    name?: string;
    /**
     * Url of author.
     */
    url?: string;
    /**
     * Url of author icon (only supports http(s) and attachments).
     */
    icon_url?: string;
    /**
     * A proxied url of author icon.
     */
    proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export interface EmbedFieldStructure {
    /**
     * Name of the field.
     */
    name: string;
    /**
     * Value of the field.
     */
    value: string;
    /**
     * Whether or not this field should display inline.
     */
    inline?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure
 */
export interface ReactionStructure {
    /**
     * Times this emoji has been used to react.
     */
    count: number;
    /**
     * Whether the current user reacted using this emoji.
     */
    me: boolean;
    /**
     * Emoji information.
     */
    emoji: Partial<EmojiStructure>;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export interface MessageActivityStructure {
    /**
     * [type of message 
     * activity](https://discord.com/developers/docs/resources/channel#message-object-message-activity-types).
     */
    type: number;
    /**
     * Party_id from a [Rich Presence 
     * event](https://discord.com/developers/docs/rich/presence/how/to#updating-presence-update-presence-payload-fields).
     */
    party_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
 * 
 * \* `channel_id` is optional when creating a reply, but will always be present 
 * when receiving an event/response that includes this data model.
 */
export interface MessageReferenceStructure {
    /**
     * Id of the originating message.
     */
    message_id?: string;
    /**
     * Id of the originating message's channel.
     */
    channel_id?: string;
    /**
     * Id of the originating message's guild.
     */
    guild_id?: string;
    /**
     * When sending, whether to error if the referenced message doesn't exist instead 
     * of sending as a normal (non-reply) message, default true.
     */
    fail_if_not_exists?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-flags
 */
export enum MessageFlags {
    CROSSPOSTED = 1 << 0,
    IS_CROSSPOST = 1 << 1,
    SUPPRESS_EMBEDS = 1 << 2,
    SOURCE_MESSAGE_DELETED = 1 << 3,
    URGENT = 1 << 4,
    HAS_THREAD = 1 << 5,
    EPHEMERAL = 1 << 6,
    LOADING = 1 << 7
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure
 * 
 * \* The URL for fetching sticker assets is currently private.
 */
export interface MessageStickerStructure {
    /**
     * Id of the sticker.
     */
    id: string;
    /**
     * Id of the pack the sticker is from.
     */
    pack_id: string;
    /**
     * Name of the sticker.
     */
    name: string;
    /**
     * Description of the sticker.
     */
    description: string;
    /**
     * A comma-separated list of tags for the sticker.
     */
    tags?: string;
    /**
     * Sticker asset hash.
     */
    asset: string;
    /**
     * [type of sticker 
     * format](https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types).
     */
    format_type: number;
}

/**
 * https://discord.com/developers/docs/interactions/slash/commands#messageinteraction
 * 
 * This is sent on the [message object](#DOCS_RESOURCES_CHANNEL/message-object) 
 * when the message is a response to an Interaction.
 */
export enum MessageInteraction {
    Id = snowflake,
    Type = InteractionType,
    Name = string,
    User = [user object](#DOCS_RESOURCES_USER/user-object)
}

/**
 * https://discord.com/developers/docs/resources/channel#json#form-params
 */
export interface CreateMessageJsonParams {
    /**
     * The message contents (up to 2000 characters).
     */
    content: string;
    /**
     * True if this is a TTS message.
     */
    tts: boolean;
    /**
     * The contents of the file being sent.
     */
    file: string;
    /**
     * Embedded `rich` content.
     */
    embed: EmbedStructure;
    /**
     * JSON encoded body of non-file params.
     */
    payload_json: string;
    /**
     * Allowed mentions for the message.
     */
    allowed_mentions: AllowedMentionsStructure;
    /**
     * Include to make your message a reply.
     */
    message_reference: MessageReferenceStructure;
}

/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure
 */
export interface AllowedMentionsStructure {
    /**
     * An array of [allowed mention 
     * types](https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types) 
     * to parse from the content.
     */
    parse: any[];
    /**
     * Array of role_ids to mention (Max size of 100).
     */
    roles: string[];
    /**
     * Array of user_ids to mention (Max size of 100).
     */
    users: string[];
    /**
     * For replies, whether to mention the author of the message being replied to 
     * (default false).
     */
    replied_user: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface GetReactionsQueryParams {
    /**
     * Get users after this user ID.
     */
    after: string;
    /**
     * Max number of users to return (1-100).
     */
    limit: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#json#form-params
 */
export interface EditMessageJsonParams {
    /**
     * The message contents (up to 2000 characters).
     */
    content: string;
    /**
     * Embedded `rich` content.
     */
    embed: EmbedStructure;
    /**
     * Edit the 
     * [flags](https://discord.com/developers/docs/resources/channel#message-object-message-flags) 
     * of a message (only `SUPPRESS_EMBEDS` can currently be set/unset).
     */
    flags: number;
    /**
     * The contents of the file being sent/edited.
     */
    file: string;
    /**
     * JSON encoded body of non-file params (multipart/form-data only).
     */
    payload_json: string;
    /**
     * Allowed mentions for the message.
     */
    allowed_mentions: AllowedMentionsStructure;
    /**
     * Attached files to keep.
     */
    attachments: AttachmentStructure[];
}

/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface BulkDeleteMessagesJsonParams {
    /**
     * An array of message ids to delete (2-100).
     */
    messages: string[];
}

/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface EditChannelPermissionsJsonParams {
    /**
     * The bitwise value of all allowed permissions.
     */
    allow: string;
    /**
     * The bitwise value of all disallowed permissions.
     */
    deny: string;
    /**
     * 0 for a role or 1 for a member.
     */
    type: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface CreateChannelInviteJsonParams {
    /**
     * Duration of invite in seconds before expiry, or 0 for never. between 0 and 
     * 604800 (7 days).
     */
    max_age: number;
    /**
     * Max number of uses or 0 for unlimited. between 0 and 100.
     */
    max_uses: number;
    /**
     * Whether this invite only grants temporary membership.
     */
    temporary: boolean;
    /**
     * If true, don't try to reuse a similar invite (useful for creating many unique 
     * one time use invites).
     */
    unique: boolean;
    /**
     * The [type of 
     * target](https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types) 
     * for this voice channel invite.
     */
    target_type: number;
    /**
     * The id of the user whose stream to display for this invite, required if 
     * `target_type` is 1, the user must be streaming in the channel.
     */
    target_user_id: string;
    /**
     * The id of the embedded application to open for this invite, required if 
     * `target_type` is 2, the application must have the `EMBEDDED` flag.
     */
    target_application_id: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface FollowNewsChannelJsonParams {
    /**
     * Id of target channel.
     */
    webhook_channel_id: string;
}

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

/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface GroupDMAddRecipientJsonParams {
    /**
     * Access token of a user that has granted your app the `gdm.join` scope.
     */
    access_token: string;
    /**
     * Nickname of the user being added.
     */
    nick: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface StartThreadWithMessageJsonParams {
    /**
     * 2-100 character channel name.
     */
    name: string;
    /**
     * Duration in minutes to automatically archive the thread after recent activity, 
     * can be set to: 60, 1440, 4320, 10080.
     */
    auto_archive_duration: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface StartThreadWithoutMessageJsonParams {
    /**
     * 2-100 character channel name.
     */
    name: string;
    /**
     * Duration in minutes to automatically archive the thread after recent activity, 
     * can be set to: 60, 1440, 4320, 10080.
     */
    auto_archive_duration: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#response-body
 */
export interface ListActiveThreadsResponse {
    /**
     * The active threads.
     */
    threads: ChannelStructure[];
    /**
     * A thread member object for each returned thread the current user has joined.
     */
    members: ThreadMemberStructure[];
    /**
     * Whether there are potentially additional threads that could be returned on a 
     * subsequent call.
     */
    has_more: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListPublicArchivedThreadsQueryParams {
    /**
     * Returns threads before this timestamp.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListPublicArchivedThreadsResponse {
    /**
     * Returns threads before this timestamp.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListPrivateArchivedThreadsQueryParams {
    /**
     * Returns threads before this timestamp.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListPrivateArchivedThreadsResponse {
    /**
     * Returns threads before this timestamp.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListJoinedPrivateArchivedThreadsQueryParams {
    /**
     * Returns threads before this id.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#query-string-params
 */
export interface ListJoinedPrivateArchivedThreadsResponse {
    /**
     * Returns threads before this id.
     */
    before?: string;
    /**
     * Optional maximum number of threads to return.
     */
    limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/emoji#json-params
 */
export interface CreateGuildEmojiJsonParams {
    /**
     * Name of the emoji.
     */
    name: string;
    /**
     * The 128x128 emoji image.
     */
    image: string;
    /**
     * Roles allowed to use this emoji.
     */
    roles: string[];
}

/**
 * https://discord.com/developers/docs/resources/emoji#json-params
 */
export interface ModifyGuildEmojiJsonParams {
    /**
     * Name of the emoji.
     */
    name: string;
    /**
     * Roles allowed to use this emoji.
     */
    roles: (string|null)[];
}

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
    icon?: string;
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

/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface GetGuildQueryParams {
    /**
     * When `true`, will return approximate member and presence counts for the guild.
     */
    with_counts?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface GetGuildResponse {
    /**
     * When `true`, will return approximate member and presence counts for the guild.
     */
    with_counts?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure
 */
export interface GuildPreviewStructure {
    /**
     * Guild id.
     */
    id: string;
    /**
     * Guild name (2-100 characters).
     */
    name: string;
    /**
     * [icon hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    icon: string|null;
    /**
     * [splash hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    splash: string|null;
    /**
     * [discovery splash 
     * hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    discovery_splash: string|null;
    /**
     * Custom guild emojis.
     */
    emojis: EmojiStructure[];
    /**
     * Enabled guild features.
     */
    features: any[];
    /**
     * Approximate number of members in this guild.
     */
    approximate_member_count: number;
    /**
     * Approximate number of online members in this guild.
     */
    approximate_presence_count: number;
    /**
     * The description for the guild, if the guild is discoverable.
     */
    description: string|null;
}

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
    icon: string|null;
    /**
     * User id to transfer guild ownership to (must be owner).
     */
    owner_id: string;
    /**
     * Base64 16:9 png/jpeg image for the guild splash (when the server has the 
     * `INVITE_SPLASH` feature).
     */
    splash: string|null;
    /**
     * Base64 16:9 png/jpeg image for the guild discovery splash (when the server has 
     * the `DISCOVERABLE` feature).
     */
    discovery_splash: string|null;
    /**
     * Base64 16:9 png/jpeg image for the guild banner (when the server has the 
     * `BANNER` feature).
     */
    banner: string|null;
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

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildChannelPositionsJsonParams {
    /**
     * Channel id.
     */
    id: string;
    /**
     * Sorting position of the channel.
     */
    position: number|null;
    /**
     * Syncs the permission overwrites with the new parent, if moving to a new 
     * category.
     */
    lock_permissions: boolean|null;
    /**
     * The new parent ID for the channel that is moved.
     */
    parent_id: string|null;
}

/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface ListGuildMembersQueryParams {
    /**
     * Max number of members to return (1-1000).
     */
    limit: number;
    /**
     * The highest user id in the previous page.
     */
    after: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface SearchGuildMembersQueryParams {
    /**
     * Query string to match username(s) and nickname(s) against.
     */
    query: string;
    /**
     * Max number of members to return (1-1000).
     */
    limit: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 * 
 * For guilds with Membership Screening enabled, assigning a role using the `roles` 
 * parameter will add the user to the guild as a full member (`pending` is false in 
 * the [member object](#DOCS_RESOURCES_GUILD/guild-member-object)). A member with a 
 * role will bypass membership screening and the guild's verification level, and 
 * get immediate access to chat. Therefore, instead of assigning a role when the 
 * member joins, it is recommended to grant roles only after the user completes 
 * screening.
 */
export interface AddGuildMemberJsonParams {
    /**
     * An oauth2 access token granted with the `guilds.join` to the bot's application 
     * for the user you want to add to the guild.
     */
    access_token: string;
    /**
     * Value to set users nickname to.
     */
    nick: string;
    /**
     * Array of role ids the member is assigned.
     */
    roles: string[];
    /**
     * Whether the user is muted in voice channels.
     */
    mute: boolean;
    /**
     * Whether the user is deafened in voice channels.
     */
    deaf: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildMemberJsonParams {
    /**
     * Value to set users nickname to.
     */
    nick: string;
    /**
     * Array of role ids the member is assigned.
     */
    roles: string[];
    /**
     * Whether the user is muted in voice channels. Will throw a 400 if the user is not 
     * in a voice channel.
     */
    mute: boolean;
    /**
     * Whether the user is deafened in voice channels. Will throw a 400 if the user is 
     * not in a voice channel.
     */
    deaf: boolean;
    /**
     * Id of channel to move user to (if they are connected to voice).
     */
    channel_id: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyCurrentUserNickJsonParams {
    /**
     * Value to set users nickname to.
     */
    nick?: string|null;
}

/**
 * https://discord.com/developers/docs/resources/guild#ban-object-ban-structure
 */
export interface BanStructure {
    /**
     * The reason for the ban.
     */
    reason: string|null;
    /**
     * The banned user.
     */
    user: UserStructure;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface CreateGuildBanJsonParams {
    /**
     * Number of days to delete messages for (0-7).
     */
    delete_message_days?: number;
    /**
     * Reason for the ban.
     */
    reason?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface CreateGuildRoleJsonParams {
    /**
     * Name of the role.
     */
    name: string;
    /**
     * Bitwise value of the enabled/disabled permissions.
     */
    permissions: string;
    /**
     * RGB color value.
     */
    color: number;
    /**
     * Whether the role should be displayed separately in the sidebar.
     */
    hoist: boolean;
    /**
     * Whether the role should be mentionable.
     */
    mentionable: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildRolePositionsJsonParams {
    /**
     * Role.
     */
    id: string;
    /**
     * Sorting position of the role.
     */
    position?: number|null;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildRoleJsonParams {
    /**
     * Name of the role.
     */
    name: string;
    /**
     * Bitwise value of the enabled/disabled permissions.
     */
    permissions: string;
    /**
     * RGB color value.
     */
    color: number;
    /**
     * Whether the role should be displayed separately in the sidebar.
     */
    hoist: boolean;
    /**
     * Whether the role should be mentionable.
     */
    mentionable: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface GetGuildPruneCountQueryParams {
    /**
     * Number of days to count prune for (1-30).
     */
    days: number;
    /**
     * Role(s) to include.
     */
    include_roles: any[];
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface BeginGuildPruneJsonParams {
    /**
     * Number of days to prune (1-30).
     */
    days: number;
    /**
     * Whether 'pruned' is returned, discouraged for large guilds.
     */
    compute_prune_count: boolean;
    /**
     * Role(s) to include.
     */
    include_roles: string[];
    /**
     * Reason for the prune.
     */
    reason?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure
 */
export interface GuildWidgetStructure {
    /**
     * Whether the widget is enabled.
     */
    enabled: boolean;
    /**
     * The widget channel id.
     */
    channel_id: string|null;
}

/**
 * https://discord.com/developers/docs/resources/guild#query-string-params
 */
export interface GetGuildWidgetImageQueryParams {
    /**
     * Style of the widget image returned (see below).
     */
    style: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildWelcomeScreenJsonParams {
    /**
     * Whether the welcome screen is enabled.
     */
    enabled: boolean;
    /**
     * Channels linked in the welcome screen and their display options.
     */
    welcome_channels: WelcomeScreenChannelStructure[];
    /**
     * The server description to show in the welcome screen.
     */
    description: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface UpdateCurrentUserVoiceStateJsonParams {
    /**
     * The id of the channel the user is currently in.
     */
    channel_id: string;
    /**
     * Toggles the user's suppress state.
     */
    suppress?: boolean;
    /**
     * Sets the user's request to speak.
     */
    request_to_speak_timestamp?: string|null;
}

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface UpdateUserVoiceStateJsonParams {
    /**
     * The id of the channel the user is currently in.
     */
    channel_id: string;
    /**
     * Toggles the user's suppress state.
     */
    suppress?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild/template#guild-template-object-guild-template-structure
 */
export interface GuildTemplateStructure {
    /**
     * The template code (unique ID).
     */
    code: string;
    /**
     * Template name.
     */
    name: string;
    /**
     * The description for the template.
     */
    description: string|null;
    /**
     * Number of times this template has been used.
     */
    usage_count: number;
    /**
     * The ID of the user who created the template.
     */
    creator_id: string;
    /**
     * The user who created the template.
     */
    creator: UserStructure;
    /**
     * When this template was created.
     */
    created_at: string;
    /**
     * When this template was last synced to the source guild.
     */
    updated_at: string;
    /**
     * The ID of the guild this template is based on.
     */
    source_guild_id: string;
    /**
     * The guild snapshot this template contains.
     */
    serialized_source_guild: Partial<GuildStructure>;
    /**
     * Whether the template has unsynced changes.
     */
    is_dirty: boolean|null;
}

/**
 * https://discord.com/developers/docs/resources/guild/template#json-params
 */
export interface CreateGuildFromGuildTemplateJsonParams {
    /**
     * Name of the guild (2-100 characters).
     */
    name: string;
    /**
     * Base64 128x128 image for the guild icon.
     */
    icon?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild/template#json-params
 */
export interface CreateGuildTemplateJsonParams {
    /**
     * Name of the template (1-100 characters).
     */
    name: string;
    /**
     * Description for the template (0-120 characters).
     */
    description?: string|null;
}

/**
 * https://discord.com/developers/docs/resources/guild/template#json-params
 */
export interface ModifyGuildTemplateJsonParams {
    /**
     * Name of the template (1-100 characters).
     */
    name?: string;
    /**
     * Description for the template (0-120 characters).
     */
    description?: string|null;
}

/**
 * https://discord.com/developers/docs/resources/invite#query-string-params
 */
export interface GetInviteQueryParams {
    /**
     * Whether the invite should contain approximate member counts.
     */
    with_counts?: boolean;
    /**
     * Whether the invite should contain the expiration date.
     */
    with_expiration?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/stage/instance#json-params
 */
export interface CreateStageInstanceJsonParams {
    /**
     * The id of the Stage channel.
     */
    channel_id: string;
    /**
     * The topic of the Stage instance (1-120 characters).
     */
    topic: string;
    /**
     * The [privacy 
     * level](https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-privacy-level) 
     * of the Stage instance (default GUILD_ONLY).
     */
    privacy_level?: number;
}

/**
 * https://discord.com/developers/docs/resources/stage/instance#json-params
 */
export interface UpdateStageInstanceJsonParams {
    /**
     * The topic of the Stage instance (1-120 characters).
     */
    topic?: string;
    /**
     * The [privacy 
     * level](https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-privacy-level) 
     * of the Stage instance.
     */
    privacy_level?: number;
}

/**
 * https://discord.com/developers/docs/resources/user#json-params
 */
export interface ModifyCurrentUserJsonParams {
    /**
     * User's username, if changed may cause the user's discriminator to be randomized.
     */
    username: string;
    /**
     * If passed, modifies the user's avatar.
     */
    avatar: string|null;
}

/**
 * https://discord.com/developers/docs/resources/user#query-string-params
 */
export interface GetCurrentUserGuildsQueryParams {
    /**
     * Get guilds before this guild ID.
     */
    before: string;
    /**
     * Get guilds after this guild ID.
     */
    after: string;
    /**
     * Max number of guilds to return (1-200).
     */
    limit: number;
}

/**
 * https://discord.com/developers/docs/resources/user#json-params
 */
export interface CreateDMJsonParams {
    /**
     * The recipient to open a DM channel with.
     */
    recipient_id: string;
}

/**
 * https://discord.com/developers/docs/resources/user#json-params
 */
export interface CreateGroupDMJsonParams {
    /**
     * Access tokens of users that have granted your app the `gdm.join` scope.
     */
    access_tokens: string[];
    /**
     * A dictionary of user ids to their respective nicknames.
     */
    nicks: Record<string, string>;
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface ConnectionStructure {
    /**
     * Id of the connection account.
     */
    id: string;
    /**
     * The username of the connection account.
     */
    name: string;
    /**
     * The service of the connection (twitch, youtube).
     */
    type: string;
    /**
     * Whether the connection is revoked.
     */
    revoked?: boolean;
    /**
     * An array of partial [server 
     * integrations](https://discord.com/developers/docs/resources/guild#integration-object).
     */
    integrations?: any;
    /**
     * Whether the connection is verified.
     */
    verified: boolean;
    /**
     * Whether friend sync is enabled for this connection.
     */
    friend_sync: boolean;
    /**
     * Whether activities related to this connection will be shown in presence updates.
     */
    show_activity: boolean;
    /**
     * [visibility](https://discord.com/developers/docs/resources/user#connection-object-visibility-types) 
     * of this connection.
     */
    visibility: number;
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-visibility-types
 */
export enum VisibilityTypes {
    None = 0,
    Everyone = 1
}

/**
 * https://discord.com/developers/docs/resources/webhook#json-params
 */
export interface CreateWebhookJsonParams {
    /**
     * Name of the webhook (1-80 characters).
     */
    name: string;
    /**
     * Image for the default webhook avatar.
     */
    avatar?: string|null;
}

/**
 * https://discord.com/developers/docs/resources/webhook#json-params
 */
export interface ModifyWebhookJsonParams {
    /**
     * The default name of the webhook.
     */
    name: string;
    /**
     * Image for the default webhook avatar.
     */
    avatar: string|null;
    /**
     * The new channel id this webhook should be moved to.
     */
    channel_id: string;
}

/**
 * https://discord.com/developers/docs/resources/webhook#query-string-params
 */
export interface ExecuteWebhookJsonParams {
    /**
     * Waits for server confirmation of message send before response, and returns the 
     * created message body (defaults to `false`; when `false` a message that is not 
     * saved does not return an error).
     */
    wait: boolean;
    /**
     * Send a message to the specified thread within a webhook's channel. The thread 
     * will automatically be unarchived.
     */
    thread_id: string;
}

/**
 * https://discord.com/developers/docs/resources/webhook#query-string-params
 */
export interface ExecuteWebhookQueryParams {
    /**
     * Waits for server confirmation of message send before response, and returns the 
     * created message body (defaults to `false`; when `false` a message that is not 
     * saved does not return an error).
     */
    wait: boolean;
    /**
     * Send a message to the specified thread within a webhook's channel. The thread 
     * will automatically be unarchived.
     */
    thread_id: string;
}

/**
 * https://discord.com/developers/docs/resources/webhook#query-string-params
 */
export interface ExecuteSlackCompatibleWebhookQueryParams {
    /**
     * Waits for server confirmation of message send before response (defaults to 
     * `true`; when `false` a message that is not saved does not return an error).
     */
    wait: boolean;
}

/**
 * https://discord.com/developers/docs/resources/webhook#query-string-params
 */
export interface ExecuteGitHubCompatibleWebhookQueryParams {
    /**
     * Waits for server confirmation of message send before response (defaults to 
     * `true`; when `false` a message that is not saved does not return an error).
     */
    wait: boolean;
}

/**
 * https://discord.com/developers/docs/resources/webhook#json#form-params
 */
export interface EditWebhookMessageJsonParams {
    /**
     * The message contents (up to 2000 characters).
     */
    content: string;
    /**
     * Embedded `rich` content.
     */
    embeds: EmbedStructure[];
    /**
     * The contents of the file being sent/edited.
     */
    file: string;
    /**
     * JSON encoded body of non-file params (multipart/form-data only).
     */
    payload_json: string;
    /**
     * Allowed mentions for the message.
     */
    allowed_mentions: AllowedMentionsStructure;
    /**
     * Attached files to keep.
     */
    attachments: AttachmentStructure[];
}

/**
 * https://discord.com/developers/docs/topics/gateway#json-response
 */
export interface GetGatewayBotJsonParams {
    /**
     * The WSS URL that can be used for connecting to the gateway.
     */
    url: string;
    /**
     * The recommended number of 
     * [shards](https://discord.com/developers/docs/topics/gateway#sharding) to use 
     * when connecting.
     */
    shards: number;
    /**
     * Information on the current session start limit.
     */
    session_start_limit: SessionStartLimitStructure;
}

/**
 * https://discord.com/developers/docs/topics/gateway#session-start-limit-structure
 */
export interface SessionStartLimitStructure {
    /**
     * The total number of session starts the current user is allowed.
     */
    total: number;
    /**
     * The remaining number of session starts the current user is allowed.
     */
    remaining: number;
    /**
     * The number of milliseconds after which the limit resets.
     */
    reset_after: number;
    /**
     * The number of identify requests allowed per 5 seconds.
     */
    max_concurrency: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#json-response
 */
export interface GetGatewayBotResponse {
    /**
     * The WSS URL that can be used for connecting to the gateway.
     */
    url: string;
    /**
     * The recommended number of 
     * [shards](https://discord.com/developers/docs/topics/gateway#sharding) to use 
     * when connecting.
     */
    shards: number;
    /**
     * Information on the current session start limit.
     */
    session_start_limit: SessionStartLimitStructure;
}

/**
 * https://discord.com/developers/docs/topics/oauth2#response-structure
 */
export interface GetCurrentAuthorizationInformationResponse {
    /**
     * The current application.
     */
    application: Partial<ApplicationStructure>;
    /**
     * The scopes the user has authorized the application for.
     */
    scopes: string[];
    /**
     * When the access token expires.
     */
    expires: string;
    /**
     * The user who has authorized, if the user has authorized with the `identify` 
     * scope.
     */
    user?: UserStructure;
}

type DeclareEndpoint<
    JSONParams extends Record<string, any> = {},
    QueryParams extends Record<string, any> = {},
    ResponseType extends Record<string, any> = {}
> = (...args: string[]) => string;

export type ExtractJSONParams<
    T extends DeclareEndpoint<any, any, any>
> = T extends DeclareEndpoint<infer X, any, any> ? X : never

export type ExtractQueryParams<
    T extends DeclareEndpoint<any, any, any>
> = T extends DeclareEndpoint<any, infer X, any> ? X: never

export type ExtractResponseType<
    T extends DeclareEndpoint<any, any, any>
> = T extends DeclareEndpoint<any, any, infer X> ? X: never

export const ApiEndpoints = {
    /**
     * https://discord.com/developers/docs/game/sdk/store#get-entitlements-%-get-#applications#{application.id#docs/game/sdk/sdk/starter/guide#get-set-up}#entitlements
     * 
     * Gets entitlements for a given user. You can use this on your game backend to 
     * check entitlements of an arbitrary user, or perhaps in an administrative panel 
     * for your support team.
     * 
     * @example
     * ```
     * curl https://discord.com/api/v6/applications/461618159171141643/entitlements?user_id=53908232506183680&sku_ids=53908232599983680&with_payments=true&limit=1 \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns
     * 
     * {
     *   [
     *     {
     *       "user_id": "53908232506183680",
     *       "sku_id": "53908232599983680",
     *       "application_id": "461618159171141643",
     *       "id": "53908232506183999",
     *       "type": 1,
     *       "payment": {
     *         "id": "538491076055400999",
     *         "currency": "usd",
     *         "amount": 999,
     *         "tax": 0,
     *         "tax_inclusive": false
     *       }
     *     }
     *   ]
     * }
     * ```
     */
    GetEntitlements: ((
        applicationid: string
    ) => `/applications/${applicationid}/entitlements`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/game/sdk/store#get-entitlement-%-get-#applications#{application.id#docs/game/sdk/sdk/starter/guide#get-set-up}#entitlements#{entitlement.id#docs/game/sdk/store#data-models-entitlement-struct}
     * 
     * Fetch an entitlement by its ID. This may be useful in confirming that a user has 
     * a given entitlement that another call or the SDK says they do.
     * 
     * @example
     * ```
     * curl https://discord.com/api/v6/applications/461618159171141643/entitlements/53908232506183999?with_payment=true \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns
     * 
     * {
     *   "user_id": "53908232506183680",
     *   "sku_id": "53908232599983680",
     *   "application_id": "461618159171141643",
     *   "id": "53908232506183999",
     *   "type": 3,
     *   "payment": {
     *     "id": "538491076055400999",
     *     "currency": "usd",
     *     "amount": 999,
     *     "tax": 0,
     *     "tax_inclusive": false
     *   }
     * }
     * ```
     */
    GetEntitlement: ((
        applicationid: string,
        entitlementid: string
    ) => `/applications/${applicationid}/entitlements/${entitlementid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/game/sdk/store#get-skus-%-get-#applications#{application.id#docs/game/sdk/sdk/starter/guide#get-set-up}#skus
     * 
     * Get all SKUs for an application.
     * 
     * @example
     * ```
     * curl https://discord.com/api/v6/applications/461618159171141643/skus \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns
     * 
     * {
     *   [
     *     {
     *       "id": "53908232599983680",
     *       "type": 1,
     *       "dependent_sku_id": null,
     *       "application_id": "461618159171141643",
     *       "manifest_labels": ["461618159171111111"],
     *       "name": "My Awesome Test Game",
     *       "access_type": 1,
     *       "features": [1, 2, 3],
     *       "system_requirements": {},
     *       "content_ratings": {},
     *       "release_date": "1999-01-01",
     *       "legal_notice": {},
     *       "price_tier": 1099,
     *       "price": {},
     *       "premium": false,
     *       "locales": ["en-US"],
     *       "bundled_skus": null
     *     }
     *   ]
     * }
     * ```
     */
    GetSKUs: ((
        applicationid: string
    ) => `/applications/${applicationid}/skus`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/game/sdk/store#consume-sku-%-post-#applications#{application.id#docs/game/sdk/sdk/starter/guide#get-set-up}#entitlements#{entitlement.id#docs/game/sdk/store#data-models-entitlement-struct}#consume
     * 
     * Marks a given entitlement for the user as consumed, meaning it will no longer be 
     * returned in an entitlements check. **Ensure the user was granted whatever items 
     * the entitlement was for before consuming it!**
     * 
     * @example
     * ```
     * curl -X POST https://discord.com/api/v6/applications/461618159171141643/entitlements/53908232506183999/consume \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns 204 No Content
     * ```
     */
    ConsumeSKU: ((
        applicationid: string,
        entitlementid: string
    ) => `/applications/${applicationid}/entitlements/${entitlementid}/consume`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/game/sdk/store#delete-test-entitlement-%-delete-#applications#{application.id#docs/game/sdk/sdk/starter/guide#get-set-up}#entitlements#{entitlement.id#docs/game/sdk/store#data-models-entitlement-struct}
     * 
     * Deletes a test entitlement for an application. You can only delete entitlements 
     * that were "purchased" in developer test mode; these are entitlements of `type == 
     * TestModePurchase`. You cannot use this route to delete arbitrary entitlements 
     * that users actually purchased.
     * 
     * @example
     * ```
     * curl -X DELETE https://discord.com/api/v6/applications/461618159171141643/entitlements/53908232506183999 \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns 204 No Content
     * ```
     */
    DeleteTestEntitlement: ((
        applicationid: string,
        entitlementid: string
    ) => `/applications/${applicationid}/entitlements/${entitlementid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/game/sdk/store#create-purchase-discount-%-put-#store#skus#{sku.id#docs/game/sdk/store#data-models-sku-struct}#discounts#{user.id#docs/resources/user#user-object}
     * 
     * Creates a discount for the given user on their next purchase of the given SKU. 
     * You should call this endpoint from your backend server just before calling 
     * [StartPurchase](#DOCS_GAME_SDK_STORE/start-purchase) for the SKU you wish to 
     * discount. The user will then see a discounted price for that SKU at time of 
     * payment. The discount is automatically consumed after successful purchase or if 
     * the TTL expires.
     * 
     * @example
     * ```
     * curl -X PUT https://discord.com/api/v6/store/skus/461618229171141643/discounts/53908232522183999 \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json" \
     * -H "Content-type: application/json" \
     * -d '{"percent_off": 10, "ttl": 600}'
     * 
     * // Returns 204 No Content
     * ```
     */
    CreatePurchaseDiscount: ((
        skuid: string,
        userid: string
    ) => `/store/skus/${skuid}/discounts/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/game/sdk/store#delete-purchase-discount-%-delete-#store#skus#{sku.id#docs/game/sdk/store#data-models-sku-struct}#discounts#{user.id#docs/resources/user#user-object}
     * 
     * Deletes the currently active discount on the given SKU for the given user. You 
     * **do not need** to call this after a user has made a discounted purchase; 
     * successful discounted purchases will automatically remove the discount for that 
     * user for subsequent purchases.
     * 
     * @example
     * ```
     * curl -X DELETE https://discord.com/api/v6/store/skus/461618229171141643/discounts/53908232522183999 \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns 204 No Content
     * ```
     */
    DeletePurchaseDiscount: ((
        skuid: string,
        userid: string
    ) => `/store/skus/${skuid}/discounts/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#get-global-application-commands-%-get-#applications#{application.id#docs/resources/application#application-object}#commands
     * 
     * Fetch all of the global commands for your application. Returns an array of 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * objects.
     */
    GetGlobalApplicationCommands: ((
        applicationid: string
    ) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{}, {}, ApplicationCommand[]>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#create-global-application-command-%-post-#applications#{application.id#docs/resources/application#application-object}#commands
     * 
     * Create a new global command. New global commands will be available in all guilds 
     * after 1 hour. Returns `201` and an 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * object.
     * 
     * Creating a command with the same name as an existing command for your 
     * application will overwrite the old command.
     */
    CreateGlobalApplicationCommand: ((
        applicationid: string
    ) => `/applications/${applicationid}/commands`) as DeclareEndpoint<CreateGlobalApplicationCommandJsonParams, {}, ApplicationCommand>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#get-global-application-command-%-get-#applications#{application.id#docs/resources/application#application-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}
     * 
     * Fetch a global command for your application. Returns an 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * object.
     */
    GetGlobalApplicationCommand: ((
        applicationid: string,
        commandid: string
    ) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, ApplicationCommand>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#edit-global-application-command-%-patch-#applications#{application.id#docs/resources/application#application-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}
     * 
     * Edit a global command. Updates will be available in all guilds after 1 hour. 
     * Returns `200` and an 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * object.
     * 
     * All parameters for this endpoint are optional.
     */
    EditGlobalApplicationCommand: ((
        applicationid: string,
        commandid: string
    ) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<EditGlobalApplicationCommandJsonParams, {}, ApplicationCommand>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#delete-global-application-command-%-delete-#applications#{application.id#docs/resources/application#application-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}
     * 
     * Deletes a global command. Returns `204`.
     */
    DeleteGlobalApplicationCommand: ((
        applicationid: string,
        commandid: string
    ) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#get-guild-application-commands-%-get-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands
     * 
     * Fetch all of the guild commands for your application for a specific guild. 
     * Returns an array of 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * objects.
     */
    GetGuildApplicationCommands: ((
        applicationid: string,
        guildid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{}, {}, ApplicationCommand[]>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#bulk-overwrite-global-application-commands-%-put-#applications#{application.id#docs/resources/application#application-object}#commands
     * 
     * Takes a list of application commands, overwriting existing commands that are 
     * registered globally for this application. Updates will be available in all 
     * guilds after 1 hour. Returns `200` and a list of 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * objects. Commands that do not already exist will count toward daily application 
     * command create limits.
     */
    BulkOverwriteGlobalApplicationCommands: ((
        applicationid: string
    ) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{}, {}, ApplicationCommand[]>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#create-guild-application-command-%-post-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands
     * 
     * Create a new guild command. New guild commands will be available in the guild 
     * immediately. Returns `201` and an 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * object.  If the command did not already exist, it will count toward daily 
     * application command create limits.
     * 
     * Creating a command with the same name as an existing command for your 
     * application will overwrite the old command.
     */
    CreateGuildApplicationCommand: ((
        applicationid: string,
        guildid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<CreateGuildApplicationCommandJsonParams, {}, ApplicationCommand>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#get-guild-application-command-%-get-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}
     * 
     * Fetch a guild command for your application. Returns an 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * object.
     */
    GetGuildApplicationCommand: ((
        applicationid: string,
        guildid: string,
        commandid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, ApplicationCommand>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#edit-guild-application-command-%-patch-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}
     * 
     * Edit a guild command. Updates for guild commands will be available immediately. 
     * Returns `200` and an 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * object.
     * 
     * All parameters for this endpoint are optional.
     */
    EditGuildApplicationCommand: ((
        applicationid: string,
        guildid: string,
        commandid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<EditGuildApplicationCommandJsonParams, {}, ApplicationCommand>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#delete-guild-application-command-%-delete-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}
     * 
     * Delete a guild command. Returns `204` on success.
     */
    DeleteGuildApplicationCommand: ((
        applicationid: string,
        guildid: string,
        commandid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#bulk-overwrite-guild-application-commands-%-put-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands
     * 
     * Takes a list of application commands, overwriting existing commands for the 
     * guild. Returns `200` and a list of 
     * [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) 
     * objects.
     */
    BulkOverwriteGuildApplicationCommands: ((
        applicationid: string,
        guildid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{}, {}, ApplicationCommand[]>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#create-interaction-response-%-post-#interactions#{interaction.id#docs/interactions/slash/commands#interaction}#{interaction.token#docs/interactions/slash/commands#interaction}#callback
     * 
     * Create a response to an Interaction from the gateway. Takes an [Interaction 
     * response](#DOCS_INTERACTIONS_SLASH_COMMANDS/interaction-response).
     */
    CreateInteractionResponse: ((
        interactionid: string,
        interactiontoken: string
    ) => `/interactions/${interactionid}/${interactiontoken}/callback`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#get-original-interaction-response-%-get-#webhooks#{application.id#docs/resources/application#application-object}#{interaction.token#docs/interactions/slash/commands#interaction}#messages#@original
     * 
     * Returns the initial Interaction response. Functions the same as [Get Webhook 
     * Message](#DOCS_RESOURCES_WEBHOOK/get-webhook-message).
     */
    GetOriginalInteractionResponse: ((
        applicationid: string,
        interactiontoken: string
    ) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#edit-original-interaction-response-%-patch-#webhooks#{application.id#docs/resources/application#application-object}#{interaction.token#docs/interactions/slash/commands#interaction}#messages#@original
     * 
     * Edits the initial Interaction response. Functions the same as [Edit Webhook 
     * Message](#DOCS_RESOURCES_WEBHOOK/edit-webhook-message).
     */
    EditOriginalInteractionResponse: ((
        applicationid: string,
        interactiontoken: string
    ) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#delete-original-interaction-response-%-delete-#webhooks#{application.id#docs/resources/application#application-object}#{interaction.token#docs/interactions/slash/commands#interaction}#messages#@original
     * 
     * Deletes the initial Interaction response. Returns `204` on success.
     */
    DeleteOriginalInteractionResponse: ((
        applicationid: string,
        interactiontoken: string
    ) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#create-followup-message-%-post-#webhooks#{application.id#docs/resources/application#application-object}#{interaction.token#docs/interactions/slash/commands#interaction}
     * 
     * Create a followup message for an Interaction. Functions the same as [Execute 
     * Webhook](#DOCS_RESOURCES_WEBHOOK/execute-webhook), but `wait` is always true, 
     * and `flags` can be set to `64` in the body to send an ephemeral message. The 
     * `thread_id` query parameter is not required (and is furthermore ignored) when 
     * using this endpoint for interaction followups.
     */
    CreateFollowupMessage: ((
        applicationid: string,
        interactiontoken: string
    ) => `/webhooks/${applicationid}/${interactiontoken}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#edit-followup-message-%-patch-#webhooks#{application.id#docs/resources/application#application-object}#{interaction.token#docs/interactions/slash/commands#interaction}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Edits a followup message for an Interaction. Functions the same as [Edit Webhook 
     * Message](#DOCS_RESOURCES_WEBHOOK/edit-webhook-message).
     */
    EditFollowupMessage: ((
        applicationid: string,
        interactiontoken: string,
        messageid: string
    ) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#delete-followup-message-%-delete-#webhooks#{application.id#docs/resources/application#application-object}#{interaction.token#docs/interactions/slash/commands#interaction}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Deletes a followup message for an Interaction. Returns `204` on success.
     */
    DeleteFollowupMessage: ((
        applicationid: string,
        interactiontoken: string,
        messageid: string
    ) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#get-guild-application-command-permissions-%-get-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands#permissions
     * 
     * Fetches command permissions for all commands for your application in a guild. 
     * Returns an array of 
     * [GuildApplicationCommandPermissions](#DOCS_INTERACTIONS_SLASH_COMMANDS/guildapplicationcommandpermissions) 
     * objects.
     */
    GetGuildApplicationCommandPermissions: ((
        applicationid: string,
        guildid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`) as DeclareEndpoint<{}, {}, GuildApplicationCommandPermissions[]>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#get-application-command-permissions-%-get-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}#permissions
     * 
     * Fetches command permissions for a specific command for your application in a 
     * guild. Returns a 
     * [GuildApplicationCommandPermissions](#DOCS_INTERACTIONS_SLASH_COMMANDS/guildapplicationcommandpermissions) 
     * object.
     */
    GetApplicationCommandPermissions: ((
        applicationid: string,
        guildid: string,
        commandid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`) as DeclareEndpoint<{}, {}, GuildApplicationCommandPermissions>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#edit-application-command-permissions-%-put-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands#{command.id#docs/interactions/slash/commands#applicationcommand}#permissions
     * 
     * Edits command permissions for a specific command for your application in a 
     * guild.
     * 
     * This endpoint will overwrite existing permissions for the command in that guild
     * 
     * Deleting or renaming a command will permanently delete all permissions for that 
     * command
     */
    EditApplicationCommandPermissions: ((
        applicationid: string,
        guildid: string,
        commandid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`) as DeclareEndpoint<EditApplicationCommandPermissionsJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash/commands#batch-edit-application-command-permissions-%-put-#applications#{application.id#docs/resources/application#application-object}#guilds#{guild.id#docs/resources/guild#guild-object}#commands#permissions
     * 
     * Batch edits permissions for all commands in a guild. Takes an array of partial 
     * [GuildApplicationCommandPermissions](#DOCS_INTERACTIONS_SLASH_COMMANDS/guildapplicationcommandpermissions) 
     * objects including `id` and `permissions`.
     * 
     * This endpoint will overwrite all existing permissions for all commands in a 
     * guild
     * 
     * @example
     * ```py
     * FIRST_COMMAND_ID = "<first_command_id>"
     * SECOND_COMMAND_ID = "<second_command_id>"
     * ADMIN_ROLE_ID = "<admin_role_id>"
     * 
     * url = "https://discord.com/api/v8/applications/<my_application_id>/guilds/<my_guild_id>/commands/permissions"
     * 
     * json = [
     *     {
     *         "id": FIRST_COMMAND_ID,
     *         "permissions": [
     *             {
     *                 "id": ADMIN_ROLE_ID,
     *                 "type": 1,
     *                 "permission": true
     *             }
     *         ]
     *     },
     *     {
     *         "id": SECOND_COMMAND_ID,
     *         "permissions": [
     *             {
     *                 "id": ADMIN_ROLE_ID,
     *                 "type": 1,
     *                 "permission": false
     *             }
     *         ]
     *     }
     * ]
     * 
     * headers = {
     *     "Authorization": "Bot 123456"
     * }
     * 
     * r = requests.put(url, headers=headers, json=json)
     * ```
     */
    BatchEditApplicationCommandPermissions: ((
        applicationid: string,
        guildid: string
    ) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/audit/log#get-guild-audit-log-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#audit-logs
     * 
     * Returns an [audit log](#DOCS_RESOURCES_AUDIT_LOG/audit-log-object) object for 
     * the guild. Requires the 'VIEW_AUDIT_LOG' permission.
     */
    GetGuildAuditLog: ((
        guildid: string
    ) => `/guilds/${guildid}/audit-logs`) as DeclareEndpoint<{}, GetGuildAuditLogQueryParams, AuditLogStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel-%-get-#channels#{channel.id#docs/resources/channel#channel-object}
     * 
     * Get a channel by ID. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) 
     * object.  If the channel is a thread, a [thread 
     * member](#DOCS_RESOURCES_CHANNEL/thread-member-object) object is included in the 
     * returned result.
     */
    GetChannel: ((
        channelid: string
    ) => `/channels/${channelid}`) as DeclareEndpoint<{}, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#modify-channel-%-patch-#channels#{channel.id#docs/resources/channel#channel-object}
     * 
     * Update a channel's settings. Returns a 
     * [channel](#DOCS_RESOURCES_CHANNEL/channel-object) on success, and a 400 BAD 
     * REQUEST on invalid parameters. All JSON parameters are optional.
     */
    ModifyChannel: ((
        channelid: string
    ) => `/channels/${channelid}`) as DeclareEndpoint<ModifyChannelJsonParams, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete#close-channel-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}
     * 
     * Delete a channel, or close a private message. Requires the `MANAGE_CHANNELS` 
     * permission for the guild, or `MANAGE_THREADS` if the channel is a thread. 
     * Deleting a category does not delete its child channels; they will have their 
     * `parent_id` removed and a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) 
     * Gateway event will fire for each of them. Returns a 
     * [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object on success. Fires a 
     * [Channel Delete](#DOCS_TOPICS_GATEWAY/channel-delete) Gateway event (or [Thread 
     * Delete](#DOCS_TOPICS_GATEWAY/thread-delete) if the channel was a thread).
     * 
     * Deleting a guild channel cannot be undone. Use this with caution, as it is 
     * impossible to undo this action when performed on a guild channel. In contrast, 
     * when used with a private message, it is possible to undo the action by opening a 
     * private message with the recipient again.
     * 
     * For Community guilds, the Rules or Guidelines channel and the Community Updates 
     * channel cannot be deleted.
     */
    DeleteChannel: ((
        channelid: string
    ) => `/channels/${channelid}`) as DeclareEndpoint<{}, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel-messages-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#messages
     * 
     * Returns the messages for a channel. If operating on a guild channel, this 
     * endpoint requires the `VIEW_CHANNEL` permission to be present on the current 
     * user. If the current user is missing the 'READ_MESSAGE_HISTORY' permission in 
     * the channel then this will return no messages (since they cannot read the 
     * message history). Returns an array of 
     * [message](#DOCS_RESOURCES_CHANNEL/message-object) objects on success.
     * 
     * The before, after, and around keys are mutually exclusive, only one may be 
     * passed at a time.
     */
    GetChannelMessages: ((
        channelid: string
    ) => `/channels/${channelid}/messages`) as DeclareEndpoint<{}, GetChannelMessagesQueryParams, MessageStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel-message-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Returns a specific message in the channel. If operating on a guild channel, this 
     * endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the 
     * current user. Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object 
     * on success.
     */
    GetChannelMessage: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{}, {}, MessageStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#create-message-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#messages
     * 
     * Post a message to a guild text or DM channel. Returns a 
     * [message](#DOCS_RESOURCES_CHANNEL/message-object) object. Fires a [Message 
     * Create](#DOCS_TOPICS_GATEWAY/message-create) Gateway event. See [message 
     * formatting](#DOCS_REFERENCE/message-formatting) for more information on how to 
     * properly format messages.
     * 
     * Before using this endpoint, you must connect to and identify with a 
     * [gateway](#DOCS_TOPICS_GATEWAY/gateways) at least once.
     * 
     * Discord may strip certain characters from message content, like invalid unicode 
     * characters or characters which cause unexpected message formatting. If you are 
     * passing user-generated strings into message content, consider sanitizing the 
     * data to prevent unexpected behavior and utilizing `allowed_mentions` to prevent 
     * unexpected mentions.
     * 
     * @example
     * ```json
     * {
     *   "content": "Hello, World!",
     *   "tts": false,
     *   "embed": {
     *     "title": "Hello, Embed!",
     *     "description": "This is an embedded message."
     *   }
     * }
     * ```
     * 
     * @example
     * ```
     * --boundary
     * Content-Disposition: form-data; name="content"
     * 
     * Hello, World!
     * --boundary
     * Content-Disposition: form-data; name="tts"
     * 
     * true
     * --boundary--
     * ```
     */
    CreateMessage: ((
        channelid: string
    ) => `/channels/${channelid}/messages`) as DeclareEndpoint<CreateMessageJsonParams, {}, MessageStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#crosspost-message-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#crosspost
     * 
     * Crosspost a message in a News Channel to following channels. This endpoint 
     * requires the 'SEND_MESSAGES' permission, if the current user sent the message, 
     * or additionally the 'MANAGE_MESSAGES' permission, for all other messages, to be 
     * present for the current user.
     * Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object.
     */
    CrosspostMessage: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/messages/${messageid}/crosspost`) as DeclareEndpoint<{}, {}, MessageStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#create-reaction-%-put-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#reactions#{emoji#docs/resources/emoji#emoji-object}#@me
     * 
     * Create a reaction for the message. This endpoint requires the 
     * 'READ_MESSAGE_HISTORY' permission to be present on the current user. 
     * Additionally, if nobody else has reacted to the message using this emoji, this 
     * endpoint requires the 'ADD_REACTIONS' permission to be present on the current 
     * user. Returns a 204 empty response on success.
     * The `emoji` must be [URL 
     * Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will 
     * fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the 
     * format `name:id` with the emoji name and emoji id.
     */
    CreateReaction: ((
        channelid: string,
        messageid: string,
        emoji: string
    ) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-own-reaction-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#reactions#{emoji#docs/resources/emoji#emoji-object}#@me
     * 
     * Delete a reaction the current user has made for the message. Returns a 204 empty 
     * response on success.
     * The `emoji` must be [URL 
     * Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will 
     * fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the 
     * format `name:id` with the emoji name and emoji id.
     */
    DeleteOwnReaction: ((
        channelid: string,
        messageid: string,
        emoji: string
    ) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-user-reaction-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#reactions#{emoji#docs/resources/emoji#emoji-object}#{user.id#docs/resources/user#user-object}
     * 
     * Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES' 
     * permission to be present on the current user. Returns a 204 empty response on 
     * success.
     * The `emoji` must be [URL 
     * Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will 
     * fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the 
     * format `name:id` with the emoji name and emoji id.
     */
    DeleteUserReaction: ((
        channelid: string,
        messageid: string,
        emoji: string,
        userid: string
    ) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-reactions-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#reactions#{emoji#docs/resources/emoji#emoji-object}
     * 
     * Get a list of users that reacted with this emoji. Returns an array of 
     * [user](#DOCS_RESOURCES_USER/user-object) objects on success.
     * The `emoji` must be [URL 
     * Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will 
     * fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the 
     * format `name:id` with the emoji name and emoji id.
     */
    GetReactions: ((
        channelid: string,
        messageid: string,
        emoji: string
    ) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`) as DeclareEndpoint<{}, GetReactionsQueryParams, UserStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-all-reactions-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#reactions
     * 
     * Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES' 
     * permission to be present on the current user. Fires a [Message Reaction Remove 
     * All](#DOCS_TOPICS_GATEWAY/message-reaction-remove-all) Gateway event.
     */
    DeleteAllReactions: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/messages/${messageid}/reactions`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#reactions#{emoji#docs/resources/emoji#emoji-object}
     * 
     * Deletes all the reactions for a given emoji on a message. This endpoint requires 
     * the `MANAGE_MESSAGES` permission to be present on the current user. Fires a 
     * [Message Reaction Remove 
     * Emoji](#DOCS_TOPICS_GATEWAY/message-reaction-remove-emoji) Gateway event.
     * The `emoji` must be [URL 
     * Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will 
     * fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the 
     * format `name:id` with the emoji name and emoji id.
     */
    DeleteAllReactionsForEmoji: ((
        channelid: string,
        messageid: string,
        emoji: string
    ) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#edit-message-%-patch-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Edit a previously sent message. The fields `content`, `embed`, and `flags` can 
     * be edited by the original message author. Other users can only edit `flags` and 
     * only if they have the `MANAGE_MESSAGES` permission in the corresponding channel. 
     * When specifying flags, ensure to include all previously set flags/bits in 
     * addition to ones that you are modifying. Only `flags` documented in the table 
     * below may be modified by users (unsupported flag changes are currently ignored 
     * without error).
     * When the `content` field is edited, the `mentions` array in the message object 
     * will be reconstructed from scratch based on the new content. The 
     * `allowed_mentions` field of the edit request controls how this happens. If there 
     * is no explicit `allowed_mentions` in the edit request, the content will be 
     * parsed with _default_ allowances, that is, without regard to whether or not an 
     * `allowed_mentions` was present in the request that originally created the 
     * message.
     * Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object. Fires a 
     * [Message Update](#DOCS_TOPICS_GATEWAY/message-update) Gateway event.
     * 
     * For a `file` attachment, the `Content-Disposition` subpart header MUST contain a 
     * `filename` parameter.
     * 
     * This endpoint supports both `application/json` and `multipart/form-data` bodies. 
     * When uploading files the `multipart/form-data` content type must be used.
     * Note that in multipart form data, the `embed`, `allowed_mentions`, and 
     * `attachments` fields cannot be used. You can pass a stringified JSON body as a 
     * form value as `payload_json` instead.
     * **If you supply a `payload_json` form value, all fields except for `file` fields 
     * will be ignored in the form data**.
     * 
     * All parameters to this endpoint are optional and nullable.
     */
    EditMessage: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<EditMessageJsonParams, {}, MessageStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-message-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Delete a message. If operating on a guild channel and trying to delete a message 
     * that was not sent by the current user, this endpoint requires the 
     * `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a 
     * [Message Delete](#DOCS_TOPICS_GATEWAY/message-delete) Gateway event.
     */
    DeleteMessage: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#bulk-delete-messages-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#messages#bulk-delete
     * 
     * Delete multiple messages in a single request. This endpoint can only be used on 
     * guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204 
     * empty response on success. Fires a [Message Delete 
     * Bulk](#DOCS_TOPICS_GATEWAY/message-delete-bulk) Gateway event.
     * Any message IDs given that do not exist or are invalid will count towards the 
     * minimum and maximum message count (currently 2 and 100 respectively).
     * 
     * This endpoint will not delete messages older than 2 weeks, and will fail with a 
     * 400 BAD REQUEST if any message provided is older than that or if any duplicate 
     * message IDs are provided.
     */
    BulkDeleteMessages: ((
        channelid: string
    ) => `/channels/${channelid}/messages/bulk-delete`) as DeclareEndpoint<BulkDeleteMessagesJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#edit-channel-permissions-%-put-#channels#{channel.id#docs/resources/channel#channel-object}#permissions#{overwrite.id#docs/resources/channel#overwrite-object}
     * 
     * Edit the channel permission overwrites for a user or role in a channel. Only 
     * usable for guild channels. Requires the `MANAGE_ROLES` permission. Only 
     * permissions your bot has in the guild or channel can be allowed/denied (unless 
     * your bot has a `MANAGE_ROLES` overwrite in the channel). Returns a 204 empty 
     * response on success. For more information about permissions, see 
     * [permissions](#DOCS_TOPICS_PERMISSIONS/permissions).
     */
    EditChannelPermissions: ((
        channelid: string,
        overwriteid: string
    ) => `/channels/${channelid}/permissions/${overwriteid}`) as DeclareEndpoint<EditChannelPermissionsJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel-invites-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#invites
     * 
     * Returns a list of [invite](#DOCS_RESOURCES_INVITE/invite-object) objects (with 
     * [invite metadata](#DOCS_RESOURCES_INVITE/invite-metadata-object)) for the 
     * channel. Only usable for guild channels. Requires the `MANAGE_CHANNELS` 
     * permission.
     */
    GetChannelInvites: ((
        channelid: string
    ) => `/channels/${channelid}/invites`) as DeclareEndpoint<{}, {}, InviteStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/channel#create-channel-invite-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#invites
     * 
     * Create a new [invite](#DOCS_RESOURCES_INVITE/invite-object) object for the 
     * channel. Only usable for guild channels. Requires the `CREATE_INSTANT_INVITE` 
     * permission. All JSON parameters for this route are optional, however the request 
     * body is not. If you are not sending any fields, you still have to send an empty 
     * JSON object (`{}`). Returns an [invite](#DOCS_RESOURCES_INVITE/invite-object) 
     * object. Fires an [Invite Create](#DOCS_TOPICS_GATEWAY/invite-create) Gateway 
     * event.
     */
    CreateChannelInvite: ((
        channelid: string
    ) => `/channels/${channelid}/invites`) as DeclareEndpoint<CreateChannelInviteJsonParams, {}, InviteStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-channel-permission-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#permissions#{overwrite.id#docs/resources/channel#overwrite-object}
     * 
     * Delete a channel permission overwrite for a user or role in a channel. Only 
     * usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 
     * empty response on success. For more information about permissions, see 
     * [permissions](#DOCS_TOPICS_PERMISSIONS/permissions)
     */
    DeleteChannelPermission: ((
        channelid: string,
        overwriteid: string
    ) => `/channels/${channelid}/permissions/${overwriteid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#follow-news-channel-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#followers
     * 
     * Follow a News Channel to send messages to a target channel. Requires the 
     * `MANAGE_WEBHOOKS` permission in the target channel. Returns a [followed 
     * channel](#DOCS_RESOURCES_CHANNEL/followed-channel-object) object.
     */
    FollowNewsChannel: ((
        channelid: string
    ) => `/channels/${channelid}/followers`) as DeclareEndpoint<FollowNewsChannelJsonParams, {}, FollowedChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#trigger-typing-indicator-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#typing
     * 
     * Post a typing indicator for the specified channel. Generally bots should **not** 
     * implement this route. However, if a bot is responding to a command and expects 
     * the computation to take a few seconds, this endpoint may be called to let the 
     * user know that the bot is processing their message. Returns a 204 empty response 
     * on success. Fires a [Typing Start](#DOCS_TOPICS_GATEWAY/typing-start) Gateway 
     * event.
     */
    TriggerTypingIndicator: ((
        channelid: string
    ) => `/channels/${channelid}/typing`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-pinned-messages-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#pins
     * 
     * Returns all pinned messages in the channel as an array of 
     * [message](#DOCS_RESOURCES_CHANNEL/message-object) objects.
     */
    GetPinnedMessages: ((
        channelid: string
    ) => `/channels/${channelid}/pins`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#pin-message-%-put-#channels#{channel.id#docs/resources/channel#channel-object}#pins#{message.id#docs/resources/channel#message-object}
     * 
     * Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 
     * 204 empty response on success.
     * 
     * The max pinned messages is 50.
     */
    PinMessage: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/pins/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#unpin-message-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#pins#{message.id#docs/resources/channel#message-object}
     * 
     * Unpin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns 
     * a 204 empty response on success.
     */
    UnpinMessage: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/pins/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#group-dm-add-recipient-%-put-#channels#{channel.id#docs/resources/channel#channel-object}#recipients#{user.id#docs/resources/user#user-object}
     * 
     * Adds a recipient to a Group DM using their access token.
     */
    GroupDMAddRecipient: ((
        channelid: string,
        userid: string
    ) => `/channels/${channelid}/recipients/${userid}`) as DeclareEndpoint<GroupDMAddRecipientJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#recipients#{user.id#docs/resources/user#user-object}
     * 
     * Removes a recipient from a Group DM.
     */
    GroupDMRemoveRecipient: ((
        channelid: string,
        userid: string
    ) => `/channels/${channelid}/recipients/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#start-thread-with-message-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#messages#{message.id#docs/resources/channel#message-object}#threads
     * 
     * Creates a new thread from an existing message. Returns a 
     * [channel](#DOCS_RESOURCES_CHANNEL/channel-object) on success, and a 400 BAD 
     * REQUEST on invalid parameters. Fires a [Thread 
     * Create](#DOCS_TOPICS_GATEWAY/thread-create) Gateway event.
     * When called on a `GUILD_TEXT` channel, creates a `GUILD_PUBLIC_THREAD`. When 
     * called on a `GUILD_NEWS` channel, creates a `GUILD_NEWS_THREAD`. The id of the 
     * created thread will be the same as the id of the message, and as such a message 
     * can only have a single thread created from it.
     */
    StartThreadWithMessage: ((
        channelid: string,
        messageid: string
    ) => `/channels/${channelid}/messages/${messageid}/threads`) as DeclareEndpoint<StartThreadWithMessageJsonParams, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#start-thread-without-message-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#threads
     * 
     * Creates a new thread that is not connected to an existing message. The created 
     * thread is always a `GUILD_PRIVATE_THREAD`. Returns a 
     * [channel](#DOCS_RESOURCES_CHANNEL/channel-object) on success, and a 400 BAD 
     * REQUEST on invalid parameters. Fires a [Thread 
     * Create](#DOCS_TOPICS_GATEWAY/thread-create) Gateway event.
     */
    StartThreadWithoutMessage: ((
        channelid: string
    ) => `/channels/${channelid}/threads`) as DeclareEndpoint<StartThreadWithoutMessageJsonParams, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/channel#join-thread-%-put-#channels#{channel.id#docs/resources/channel#channel-object}#thread-members#@me
     * 
     * Adds the current user to a thread. Also requires the thread is not archived. 
     * Returns a 204 empty response on success. Fires a [Thread Members 
     * Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.
     */
    JoinThread: ((
        channelid: string
    ) => `/channels/${channelid}/thread-members/@me`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#add-thread-member-%-put-#channels#{channel.id#docs/resources/channel#channel-object}#thread-members#{user.id#docs/resources/user#user-object}
     * 
     * Adds another member to a thread. Requires the ability to send messages in the 
     * thread. Also requires the thread is not archived. Returns a 204 empty response 
     * on success. Fires a [Thread Members 
     * Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.
     */
    AddThreadMember: ((
        channelid: string,
        userid: string
    ) => `/channels/${channelid}/thread-members/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#leave-thread-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#thread-members#@me
     * 
     * Removes the current user from a thread. Also requires the thread is not 
     * archived. Returns a 204 empty response on success. Fires a [Thread Members 
     * Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.
     */
    LeaveThread: ((
        channelid: string
    ) => `/channels/${channelid}/thread-members/@me`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#remove-thread-member-%-delete-#channels#{channel.id#docs/resources/channel#channel-object}#thread-members#{user.id#docs/resources/user#user-object}
     * 
     * Removes another member from a thread. Requires the `MANAGE_THREADS` permission 
     * or that you are the creator of the thread. Also requires the thread is not 
     * archived. Returns a 204 empty response on success. Fires a [Thread Members 
     * Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.
     */
    RemoveThreadMember: ((
        channelid: string,
        userid: string
    ) => `/channels/${channelid}/thread-members/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-thread-members-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#thread-members
     * 
     * Returns array of [thread members](#DOCS_RESOURCES_CHANNEL/thread-member-object) 
     * objects that are members of the thread.
     * 
     * This endpoint is restricted according to whether the `GUILD_MEMBERS` [Privileged 
     * Intent](#DOCS_TOPICS_GATEWAY/privileged-intents) is enabled for your 
     * application.
     */
    ListThreadMembers: ((
        channelid: string
    ) => `/channels/${channelid}/thread-members`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-active-threads-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#threads#active
     * 
     * Returns all active threads in the channel, including public and private threads. 
     * Threads are ordered by their `id`, in descending order. Requires the 
     * `READ_MESSAGE_HISTORY` permission.
     */
    ListActiveThreads: ((
        channelid: string
    ) => `/channels/${channelid}/threads/active`) as DeclareEndpoint<{}, {}, ListActiveThreadsResponse>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-public-archived-threads-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#threads#archived#public
     * 
     * Returns archived threads in the channel that are public. When called on a 
     * `GUILD_TEXT` channel, returns threads of 
     * [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) 
     * `GUILD_PUBLIC_THREAD`. When called on a `GUILD_NEWS` channel returns threads of 
     * [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) 
     * `GUILD_NEWS_THREAD`. Threads are ordered by `archive_timestamp`, in descending 
     * order. Requires the `READ_MESSAGE_HISTORY` permission.
     */
    ListPublicArchivedThreads: ((
        channelid: string
    ) => `/channels/${channelid}/threads/archived/public`) as DeclareEndpoint<{}, ListPublicArchivedThreadsQueryParams, ListPublicArchivedThreadsResponse>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-private-archived-threads-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#threads#archived#private
     * 
     * Returns archived threads in the channel that are of 
     * [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) 
     * `GUILD_PRIVATE_THREAD`. Threads are ordered by `archive_timestamp`, in 
     * descending order. Requires both the `READ_MESSAGE_HISTORY` and `MANAGE_THREADS` 
     * permissions.
     */
    ListPrivateArchivedThreads: ((
        channelid: string
    ) => `/channels/${channelid}/threads/archived/private`) as DeclareEndpoint<{}, ListPrivateArchivedThreadsQueryParams, ListPrivateArchivedThreadsResponse>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#users#@me#threads#archived#private
     * 
     * Returns archived threads in the channel that are of 
     * [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) 
     * `GUILD_PRIVATE_THREAD`, and the user has joined. Threads are ordered by their 
     * `id`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.
     */
    ListJoinedPrivateArchivedThreads: ((
        channelid: string
    ) => `/channels/${channelid}/users/@me/threads/archived/private`) as DeclareEndpoint<{}, ListJoinedPrivateArchivedThreadsQueryParams, ListJoinedPrivateArchivedThreadsResponse>,
    /**
     * https://discord.com/developers/docs/resources/emoji#list-guild-emojis-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#emojis
     * 
     * Returns a list of [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) objects for the 
     * given guild.
     */
    ListGuildEmojis: ((
        guildid: string
    ) => `/guilds/${guildid}/emojis`) as DeclareEndpoint<{}, {}, EmojiStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/emoji#get-guild-emoji-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#emojis#{emoji.id#docs/resources/emoji#emoji-object}
     * 
     * Returns an [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) object for the given 
     * guild and emoji IDs.
     */
    GetGuildEmoji: ((
        guildid: string,
        emojiid: string
    ) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{}, {}, EmojiStructure>,
    /**
     * https://discord.com/developers/docs/resources/emoji#create-guild-emoji-%-post-#guilds#{guild.id#docs/resources/guild#guild-object}#emojis
     * 
     * Create a new emoji for the guild. Requires the `MANAGE_EMOJIS` permission. 
     * Returns the new [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) object on success. 
     * Fires a [Guild Emojis Update](#DOCS_TOPICS_GATEWAY/guild-emojis-update) Gateway 
     * event.
     * 
     * Emojis and animated emojis have a maximum file size of 256kb. Attempting to 
     * upload an emoji larger than this limit will fail and return 400 Bad Request and 
     * an error message, but not a [JSON status 
     * code](#DOCS_TOPICS_OPCODES_AND_STATUS_CODES/json).
     */
    CreateGuildEmoji: ((
        guildid: string
    ) => `/guilds/${guildid}/emojis`) as DeclareEndpoint<CreateGuildEmojiJsonParams, {}, EmojiStructure>,
    /**
     * https://discord.com/developers/docs/resources/emoji#modify-guild-emoji-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#emojis#{emoji.id#docs/resources/emoji#emoji-object}
     * 
     * Modify the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns the 
     * updated [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) object on success. Fires a 
     * [Guild Emojis Update](#DOCS_TOPICS_GATEWAY/guild-emojis-update) Gateway event.
     * 
     * All parameters to this endpoint are optional.
     */
    ModifyGuildEmoji: ((
        guildid: string,
        emojiid: string
    ) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<ModifyGuildEmojiJsonParams, {}, EmojiStructure>,
    /**
     * https://discord.com/developers/docs/resources/emoji#delete-guild-emoji-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}#emojis#{emoji.id#docs/resources/emoji#emoji-object}
     * 
     * Delete the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns `204 No 
     * Content` on success. Fires a [Guild Emojis 
     * Update](#DOCS_TOPICS_GATEWAY/guild-emojis-update) Gateway event.
     */
    DeleteGuildEmoji: ((
        guildid: string,
        emojiid: string
    ) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild-%-post-#guilds
     * 
     * Create a new guild. Returns a [guild](#DOCS_RESOURCES_GUILD/guild-object) object 
     * on success. Fires a [Guild Create](#DOCS_TOPICS_GATEWAY/guild-create) Gateway 
     * event.
     * 
     * This endpoint can be used only by bots in less than 10 guilds.
     * 
     * @example
     * ```json
     * {
     *   "name": "naming-things-is-hard",
     *   "type": 0
     * }
     * ```
     * 
     * @example
     * ```json
     * {
     *   "name": "my-category",
     *   "type": 4,
     *   "id": 1
     * }
     * {
     *   "name": "naming-things-is-hard",
     *   "type": 0,
     *   "id": 2,
     *   "parent_id": 1
     * }
     * ```
     */
    CreateGuild: (() => `/guilds`) as DeclareEndpoint<CreateGuildJsonParams, {}, GuildStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}
     * 
     * Returns the [guild](#DOCS_RESOURCES_GUILD/guild-object) object for the given id. 
     * If `with_counts` is set to `true`, this endpoint will also return 
     * `approximate_member_count` and `approximate_presence_count` for the guild.
     * 
     * @example
     * ```json
     * {
     *   "id": "2909267986263572999",
     *   "name": "Mason's Test Server",
     *   "icon": "389030ec9db118cb5b85a732333b7c98",
     *   "description": null,
     *   "splash": "75610b05a0dd09ec2c3c7df9f6975ea0",
     *   "discovery_splash": null,
     *   "approximate_member_count": 2,
     *   "approximate_presence_count": 2,
     *   "features": [
     *     "INVITE_SPLASH",
     *     "VANITY_URL",
     *     "COMMERCE",
     *     "BANNER",
     *     "NEWS",
     *     "VERIFIED",
     *     "VIP_REGIONS"
     *   ],
     *   "emojis": [
     *     {
     *       "name": "ultrafastparrot",
     *       "roles": [],
     *       "id": "393564762228785161",
     *       "require_colons": true,
     *       "managed": false,
     *       "animated": true,
     *       "available": true
     *     }
     *   ],
     *   "banner": "5c3cb8d1bc159937fffe7e641ec96ca7",
     *   "owner_id": "53908232506183680",
     *   "application_id": null,
     *   "region": "us-east",
     *   "afk_channel_id": null,
     *   "afk_timeout": 300,
     *   "system_channel_id": null,
     *   "widget_enabled": true,
     *   "widget_channel_id": "639513352485470208",
     *   "verification_level": 0,
     *   "roles": [
     *     {
     *       "id": "2909267986263572999",
     *       "name": "@everyone",
     *       "permissions": "49794752",
     *       "position": 0,
     *       "color": 0,
     *       "hoist": false,
     *       "managed": false,
     *       "mentionable": false
     *     }
     *   ],
     *   "default_message_notifications": 1,
     *   "mfa_level": 0,
     *   "explicit_content_filter": 0,
     *   "max_presences": null,
     *   "max_members": 250000,
     *   "max_video_channel_users": 25,
     *   "vanity_url_code": "no",
     *   "premium_tier": 0,
     *   "premium_subscription_count": 0,
     *   "system_channel_flags": 0,
     *   "preferred_locale": "en-US",
     *   "rules_channel_id": null,
     *   "public_updates_channel_id": null
     * }
     * ```
     */
    GetGuild: ((
        guildid: string
    ) => `/guilds/${guildid}`) as DeclareEndpoint<{}, GetGuildQueryParams, GetGuildResponse>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-preview-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#preview
     * 
     * Returns the [guild preview](#DOCS_RESOURCES_GUILD/guild-preview-object) object 
     * for the given id. If the user is not in the guild, then the guild must be 
     * Discoverable.
     */
    GetGuildPreview: ((
        guildid: string
    ) => `/guilds/${guildid}/preview`) as DeclareEndpoint<{}, {}, GuildPreviewStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}
     * 
     * Modify a guild's settings. Requires the `MANAGE_GUILD` permission. Returns the 
     * updated [guild](#DOCS_RESOURCES_GUILD/guild-object) object on success. Fires a 
     * [Guild Update](#DOCS_TOPICS_GATEWAY/guild-update) Gateway event.
     * 
     * All parameters to this endpoint are optional
     */
    ModifyGuild: ((
        guildid: string
    ) => `/guilds/${guildid}`) as DeclareEndpoint<ModifyGuildJsonParams, {}, GuildStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#delete-guild-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}
     * 
     * Delete a guild permanently. User must be owner. Returns `204 No Content` on 
     * success. Fires a [Guild Delete](#DOCS_TOPICS_GATEWAY/guild-delete) Gateway 
     * event.
     */
    DeleteGuild: ((
        guildid: string
    ) => `/guilds/${guildid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-channels-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#channels
     * 
     * Returns a list of guild [channel](#DOCS_RESOURCES_CHANNEL/channel-object) 
     * objects. Does not include threads.
     */
    GetGuildChannels: ((
        guildid: string
    ) => `/guilds/${guildid}/channels`) as DeclareEndpoint<{}, {}, ChannelStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild-channel-%-post-#guilds#{guild.id#docs/resources/guild#guild-object}#channels
     * 
     * Create a new [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object for the 
     * guild. Requires the `MANAGE_CHANNELS` permission. If setting permission 
     * overwrites, only permissions your bot has in the guild can be allowed/denied. 
     * Setting `MANAGE_ROLES` permission in channels is only possible for guild 
     * administrators. Returns the new 
     * [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object on success. Fires a 
     * [Channel Create](#DOCS_TOPICS_GATEWAY/channel-create) Gateway event.
     * 
     * All parameters to this endpoint are optional excluding 'name'
     */
    CreateGuildChannel: ((
        guildid: string
    ) => `/guilds/${guildid}/channels`) as DeclareEndpoint<CreateGuildChannelJsonParams, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#channels
     * 
     * Modify the positions of a set of 
     * [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects for the guild. 
     * Requires `MANAGE_CHANNELS` permission. Returns a 204 empty response on success. 
     * Fires multiple [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway 
     * events.
     * 
     * This endpoint takes a JSON array of parameters in the following format:
     * 
     * Only channels to be modified are required, with the minimum being a swap between 
     * at least two channels.
     */
    ModifyGuildChannelPositions: ((
        guildid: string
    ) => `/guilds/${guildid}/channels`) as DeclareEndpoint<ModifyGuildChannelPositionsJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-member-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#members#{user.id#docs/resources/user#user-object}
     * 
     * Returns a [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) object for 
     * the specified user.
     */
    GetGuildMember: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{}, {}, GuildMemberStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#list-guild-members-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#members
     * 
     * Returns a list of [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) 
     * objects that are members of the guild.
     * 
     * This endpoint is restricted according to whether the `GUILD_MEMBERS` [Privileged 
     * Intent](#DOCS_TOPICS_GATEWAY/privileged-intents) is enabled for your 
     * application.
     * 
     * All parameters to this endpoint are optional
     */
    ListGuildMembers: ((
        guildid: string
    ) => `/guilds/${guildid}/members`) as DeclareEndpoint<{}, ListGuildMembersQueryParams, GuildMemberStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#search-guild-members-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#members#search
     * 
     * Returns a list of [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) 
     * objects whose username or nickname starts with a provided string.
     * 
     * All parameters to this endpoint except for `query` are optional
     */
    SearchGuildMembers: ((
        guildid: string
    ) => `/guilds/${guildid}/members/search`) as DeclareEndpoint<{}, SearchGuildMembersQueryParams, (GuildMemberStructure|any)[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#add-guild-member-%-put-#guilds#{guild.id#docs/resources/guild#guild-object}#members#{user.id#docs/resources/user#user-object}
     * 
     * Adds a user to the guild, provided you have a valid oauth2 access token for the 
     * user with the `guilds.join` scope. Returns a 201 Created with the [guild 
     * member](#DOCS_RESOURCES_GUILD/guild-member-object) as the body, or 204 No 
     * Content if the user is already a member of the guild. Fires a [Guild Member 
     * Add](#DOCS_TOPICS_GATEWAY/guild-member-add) Gateway event.
     * For guilds with [Membership 
     * Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) enabled, this 
     * endpoint will default to adding new members as `pending` in the [guild member 
     * object](#DOCS_RESOURCES_GUILD/guild-member-object). Members that are `pending` 
     * will have to complete membership screening before they become full members that 
     * can talk.
     * 
     * All parameters to this endpoint except for `access_token` are optional.
     * 
     * The Authorization header must be a Bot token (belonging to the same application 
     * used for authorization), and the bot must be a member of the guild with 
     * `CREATE_INSTANT_INVITE` permission.
     */
    AddGuildMember: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<AddGuildMemberJsonParams, {}, GuildMemberStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-member-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#members#{user.id#docs/resources/user#user-object}
     * 
     * Modify attributes of a [guild 
     * member](#DOCS_RESOURCES_GUILD/guild-member-object). Returns a 200 OK with the 
     * [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) as the body. Fires a 
     * [Guild Member Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway event. 
     * If the `channel_id` is set to null, this will force the target user to be 
     * disconnected from voice.
     * 
     * All parameters to this endpoint are optional and nullable. When moving members 
     * to channels, the API user _must_ have permissions to both connect to the channel 
     * and have the `MOVE_MEMBERS` permission.
     */
    ModifyGuildMember: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<ModifyGuildMemberJsonParams, {}, GuildMemberStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-current-user-nick-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#members#@me#nick
     * 
     * Modifies the nickname of the current user in a guild. Returns a 200 with the 
     * nickname on success. Fires a [Guild Member 
     * Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway event.
     */
    ModifyCurrentUserNick: ((
        guildid: string
    ) => `/guilds/${guildid}/members/@me/nick`) as DeclareEndpoint<ModifyCurrentUserNickJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#add-guild-member-role-%-put-#guilds#{guild.id#docs/resources/guild#guild-object}#members#{user.id#docs/resources/user#user-object}#roles#{role.id#docs/topics/permissions#role-object}
     * 
     * Adds a role to a [guild member](#DOCS_RESOURCES_GUILD/guild-member-object). 
     * Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. 
     * Fires a [Guild Member Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway 
     * event.
     */
    AddGuildMemberRole: ((
        guildid: string,
        userid: string,
        roleid: string
    ) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#remove-guild-member-role-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}#members#{user.id#docs/resources/user#user-object}#roles#{role.id#docs/topics/permissions#role-object}
     * 
     * Removes a role from a [guild member](#DOCS_RESOURCES_GUILD/guild-member-object). 
     * Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. 
     * Fires a [Guild Member Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway 
     * event.
     */
    RemoveGuildMemberRole: ((
        guildid: string,
        userid: string,
        roleid: string
    ) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#remove-guild-member-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}#members#{user.id#docs/resources/user#user-object}
     * 
     * Remove a member from a guild. Requires `KICK_MEMBERS` permission. Returns a 204 
     * empty response on success. Fires a [Guild Member 
     * Remove](#DOCS_TOPICS_GATEWAY/guild-member-remove) Gateway event.
     */
    RemoveGuildMember: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-bans-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#bans
     * 
     * Returns a list of [ban](#DOCS_RESOURCES_GUILD/ban-object) objects for the users 
     * banned from this guild. Requires the `BAN_MEMBERS` permission.
     */
    GetGuildBans: ((
        guildid: string
    ) => `/guilds/${guildid}/bans`) as DeclareEndpoint<{}, {}, BanStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-ban-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#bans#{user.id#docs/resources/user#user-object}
     * 
     * Returns a [ban](#DOCS_RESOURCES_GUILD/ban-object) object for the given user or a 
     * 404 not found if the ban cannot be found. Requires the `BAN_MEMBERS` permission.
     */
    GetGuildBan: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{}, {}, BanStructure|any>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild-ban-%-put-#guilds#{guild.id#docs/resources/guild#guild-object}#bans#{user.id#docs/resources/user#user-object}
     * 
     * Create a guild ban, and optionally delete previous messages sent by the banned 
     * user. Requires the `BAN_MEMBERS` permission. Returns a 204 empty response on 
     * success. Fires a [Guild Ban Add](#DOCS_TOPICS_GATEWAY/guild-ban-add) Gateway 
     * event.
     * 
     * Supplying a reason in the JSON body will override `X-Audit-Log-Reason` header if 
     * both are provided.
     */
    CreateGuildBan: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<CreateGuildBanJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#remove-guild-ban-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}#bans#{user.id#docs/resources/user#user-object}
     * 
     * Remove the ban for a user. Requires the `BAN_MEMBERS` permissions. Returns a 204 
     * empty response on success. Fires a [Guild Ban 
     * Remove](#DOCS_TOPICS_GATEWAY/guild-ban-remove) Gateway event.
     */
    RemoveGuildBan: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-roles-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#roles
     * 
     * Returns a list of [role](#DOCS_TOPICS_PERMISSIONS/role-object) objects for the 
     * guild.
     */
    GetGuildRoles: ((
        guildid: string
    ) => `/guilds/${guildid}/roles`) as DeclareEndpoint<{}, {}, RoleStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild-role-%-post-#guilds#{guild.id#docs/resources/guild#guild-object}#roles
     * 
     * Create a new [role](#DOCS_TOPICS_PERMISSIONS/role-object) for the guild. 
     * Requires the `MANAGE_ROLES` permission. Returns the new 
     * [role](#DOCS_TOPICS_PERMISSIONS/role-object) object on success. Fires a [Guild 
     * Role Create](#DOCS_TOPICS_GATEWAY/guild-role-create) Gateway event. All JSON 
     * params are optional.
     */
    CreateGuildRole: ((
        guildid: string
    ) => `/guilds/${guildid}/roles`) as DeclareEndpoint<CreateGuildRoleJsonParams, {}, RoleStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-role-positions-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#roles
     * 
     * Modify the positions of a set of [role](#DOCS_TOPICS_PERMISSIONS/role-object) 
     * objects for the guild. Requires the `MANAGE_ROLES` permission. Returns a list of 
     * all of the guild's [role](#DOCS_TOPICS_PERMISSIONS/role-object) objects on 
     * success. Fires multiple [Guild Role 
     * Update](#DOCS_TOPICS_GATEWAY/guild-role-update) Gateway events.
     * This endpoint takes a JSON array of parameters in the following format:
     */
    ModifyGuildRolePositions: ((
        guildid: string
    ) => `/guilds/${guildid}/roles`) as DeclareEndpoint<ModifyGuildRolePositionsJsonParams, {}, RoleStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-role-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#roles#{role.id#docs/topics/permissions#role-object}
     * 
     * Modify a guild role. Requires the `MANAGE_ROLES` permission. Returns the updated 
     * [role](#DOCS_TOPICS_PERMISSIONS/role-object) on success. Fires a [Guild Role 
     * Update](#DOCS_TOPICS_GATEWAY/guild-role-update) Gateway event.
     * 
     * All parameters to this endpoint are optional and nullable.
     */
    ModifyGuildRole: ((
        guildid: string,
        roleid: string
    ) => `/guilds/${guildid}/roles/${roleid}`) as DeclareEndpoint<ModifyGuildRoleJsonParams, {}, RoleStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#delete-guild-role-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}#roles#{role.id#docs/topics/permissions#role-object}
     * 
     * Delete a guild role. Requires the `MANAGE_ROLES` permission. Returns a 204 empty 
     * response on success. Fires a [Guild Role 
     * Delete](#DOCS_TOPICS_GATEWAY/guild-role-delete) Gateway event.
     */
    DeleteGuildRole: ((
        guildid: string,
        roleid: string
    ) => `/guilds/${guildid}/roles/${roleid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-prune-count-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#prune
     * 
     * Returns an object with one 'pruned' key indicating the number of members that 
     * would be removed in a prune operation. Requires the `KICK_MEMBERS` permission.
     * By default, prune will not remove users with roles. You can optionally include 
     * specific roles in your prune by providing the `include_roles` parameter. Any 
     * inactive user that has a subset of the provided role(s) will be counted in the 
     * prune and users with additional roles will not.
     */
    GetGuildPruneCount: ((
        guildid: string
    ) => `/guilds/${guildid}/prune`) as DeclareEndpoint<{}, GetGuildPruneCountQueryParams, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#begin-guild-prune-%-post-#guilds#{guild.id#docs/resources/guild#guild-object}#prune
     * 
     * Begin a prune operation. Requires the `KICK_MEMBERS` permission. Returns an 
     * object with one 'pruned' key indicating the number of members that were removed 
     * in the prune operation. For large guilds it's recommended to set the 
     * `compute_prune_count` option to `false`, forcing 'pruned' to `null`. Fires 
     * multiple [Guild Member Remove](#DOCS_TOPICS_GATEWAY/guild-member-remove) Gateway 
     * events.
     * By default, prune will not remove users with roles. You can optionally include 
     * specific roles in your prune by providing the `include_roles` parameter. Any 
     * inactive user that has a subset of the provided role(s) will be included in the 
     * prune and users with additional roles will not.
     * 
     * Supplying a reason in the JSON body will override `X-Audit-Log-Reason` header if 
     * both are provided.
     */
    BeginGuildPrune: ((
        guildid: string
    ) => `/guilds/${guildid}/prune`) as DeclareEndpoint<BeginGuildPruneJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-voice-regions-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#regions
     * 
     * Returns a list of [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) 
     * objects for the guild. Unlike the similar `/voice` route, this returns VIP 
     * servers when the guild is VIP-enabled.
     */
    GetGuildVoiceRegions: ((
        guildid: string
    ) => `/guilds/${guildid}/regions`) as DeclareEndpoint<{}, {}, VoiceRegionStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-invites-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#invites
     * 
     * Returns a list of [invite](#DOCS_RESOURCES_INVITE/invite-object) objects (with 
     * [invite metadata](#DOCS_RESOURCES_INVITE/invite-metadata-object)) for the guild. 
     * Requires the `MANAGE_GUILD` permission.
     */
    GetGuildInvites: ((
        guildid: string
    ) => `/guilds/${guildid}/invites`) as DeclareEndpoint<{}, {}, InviteStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-integrations-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#integrations
     * 
     * Returns a list of [integration](#DOCS_RESOURCES_GUILD/integration-object) 
     * objects for the guild. Requires the `MANAGE_GUILD` permission.
     */
    GetGuildIntegrations: ((
        guildid: string
    ) => `/guilds/${guildid}/integrations`) as DeclareEndpoint<{}, {}, IntegrationStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild#delete-guild-integration-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}#integrations#{integration.id#docs/resources/guild#integration-object}
     * 
     * Delete the attached [integration](#DOCS_RESOURCES_GUILD/integration-object) 
     * object for the guild. Deletes any associated webhooks and kicks the associated 
     * bot if there is one. Requires the `MANAGE_GUILD` permission. Returns a 204 empty 
     * response on success. Fires a [Guild Integrations 
     * Update](#DOCS_TOPICS_GATEWAY/guild-integrations-update) Gateway event.
     */
    DeleteGuildIntegration: ((
        guildid: string,
        integrationid: string
    ) => `/guilds/${guildid}/integrations/${integrationid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-widget-settings-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#widget
     * 
     * Returns a [guild widget](#DOCS_RESOURCES_GUILD/guild-widget-object) object. 
     * Requires the `MANAGE_GUILD` permission.
     */
    GetGuildWidgetSettings: ((
        guildid: string
    ) => `/guilds/${guildid}/widget`) as DeclareEndpoint<{}, {}, GuildWidgetStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-widget-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#widget
     * 
     * Modify a [guild widget](#DOCS_RESOURCES_GUILD/guild-widget-object) object for 
     * the guild. All attributes may be passed in with JSON and modified. Requires the 
     * `MANAGE_GUILD` permission. Returns the updated [guild 
     * widget](#DOCS_RESOURCES_GUILD/guild-widget-object) object.
     */
    ModifyGuildWidget: ((
        guildid: string
    ) => `/guilds/${guildid}/widget`) as DeclareEndpoint<{}, {}, GuildWidgetStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-widget-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#widget.json
     * 
     * Returns the widget for the guild.
     * 
     * @example
     * ```json
     * {
     *   "id": "290926798626999250",
     *   "name": "Test Server",
     *   "instant_invite": "https://discord.com/invite/abcdefg",
     *   "channels": [
     *     {
     *       "id": "705216630279993882",
     *       "name": "elephant",
     *       "position": 2
     *     },
     *     {
     *       "id": "669583461748992190",
     *       "name": "groovy-music",
     *       "position": 1
     *     }
     *   ],
     *   "members": [
     *     {
     *       "id": "0",
     *       "username": "1234",
     *       "discriminator": "0000",
     *       "avatar": null,
     *       "status": "online",
     *       "avatar_url": "https://cdn.discordapp.com/widget-avatars/FfvURgcr3Za92K3JtoCppqnYMppMDc5B-Rll74YrGCU/C-1DyBZPQ6t5q2RuATFuMFgq0_uEMZVzd_6LbGN_uJKvZflobA9diAlTjhf6CAESLLeTuu4dLuHFWOb_PNLteooNfhC4C6k5QgAGuxEOP12tVVVCvX6t64k14PMXZrGTDq8pWZhukP40Wg"
     *     }
     *   ],
     *   "presence_count": 1
     * }
     * ```
     */
    GetGuildWidget: ((
        guildid: string
    ) => `/guilds/${guildid}/widget.json`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-vanity-url-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#vanity-url
     * 
     * Returns a partial [invite](#DOCS_RESOURCES_INVITE/invite-object) object for 
     * guilds with that feature enabled. Requires the `MANAGE_GUILD` permission. `code` 
     * will be null if a vanity url for the guild is not set.
     * 
     * @example
     * ```json
     * {
     *   "code": "abc",
     *   "uses": 12
     * }
     * ```
     */
    GetGuildVanityURL: ((
        guildid: string
    ) => `/guilds/${guildid}/vanity-url`) as DeclareEndpoint<{}, {}, Partial<InviteStructure>>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-widget-image-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#widget.png
     * 
     * Returns a PNG image widget for the guild. Requires no permissions or 
     * authentication.
     * 
     * All parameters to this endpoint are optional.
     */
    GetGuildWidgetImage: ((
        guildid: string
    ) => `/guilds/${guildid}/widget.png`) as DeclareEndpoint<{}, GetGuildWidgetImageQueryParams, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#welcome-screen
     * 
     * Returns the [Welcome Screen](#DOCS_RESOURCES_GUILD/welcome-screen-object) object 
     * for the guild.
     */
    GetGuildWelcomeScreen: ((
        guildid: string
    ) => `/guilds/${guildid}/welcome-screen`) as DeclareEndpoint<{}, {}, WelcomeScreenStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#welcome-screen
     * 
     * Modify the guild's [Welcome 
     * Screen](#DOCS_RESOURCES_GUILD/welcome-screen-object). Requires the 
     * `MANAGE_GUILD` permission. Returns the updated [Welcome 
     * Screen](#DOCS_RESOURCES_GUILD/welcome-screen-object) object.
     * 
     * All parameters to this endpoint are optional and nullable
     */
    ModifyGuildWelcomeScreen: ((
        guildid: string
    ) => `/guilds/${guildid}/welcome-screen`) as DeclareEndpoint<ModifyGuildWelcomeScreenJsonParams, {}, WelcomeScreenStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild#update-current-user-voice-state-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#voice-states#@me
     * 
     * Updates the current user's voice state.
     */
    UpdateCurrentUserVoiceState: ((
        guildid: string
    ) => `/guilds/${guildid}/voice-states/@me`) as DeclareEndpoint<UpdateCurrentUserVoiceStateJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#update-user-voice-state-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#voice-states#{user.id#docs/resources/user#user-object}
     * 
     * Updates another user's voice state.
     */
    UpdateUserVoiceState: ((
        guildid: string,
        userid: string
    ) => `/guilds/${guildid}/voice-states/${userid}`) as DeclareEndpoint<UpdateUserVoiceStateJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild/template#get-guild-template-%-get-#guilds#templates#{template.code#docs/resources/guild/template#guild-template-object}
     * 
     * Returns a [guild template](#DOCS_RESOURCES_GUILD_TEMPLATE/guild-template-object) 
     * object for the given code.
     */
    GetGuildTemplate: ((
        templatecode: string
    ) => `/guilds/templates/${templatecode}`) as DeclareEndpoint<{}, {}, GuildTemplateStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild/template#create-guild-from-guild-template-%-post-#guilds#templates#{template.code#docs/resources/guild/template#guild-template-object}
     * 
     * Create a new guild based on a template. Returns a 
     * [guild](#DOCS_RESOURCES_GUILD/guild-object) object on success. Fires a [Guild 
     * Create](#DOCS_TOPICS_GATEWAY/guild-create) Gateway event.
     * 
     * This endpoint can be used only by bots in less than 10 guilds.
     */
    CreateGuildFromGuildTemplate: ((
        templatecode: string
    ) => `/guilds/templates/${templatecode}`) as DeclareEndpoint<CreateGuildFromGuildTemplateJsonParams, {}, GuildStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild/template#get-guild-templates-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#templates
     * 
     * Returns an array of [guild 
     * template](#DOCS_RESOURCES_GUILD_TEMPLATE/guild-template-object) objects. 
     * Requires the `MANAGE_GUILD` permission.
     */
    GetGuildTemplates: ((
        guildid: string
    ) => `/guilds/${guildid}/templates`) as DeclareEndpoint<{}, {}, GuildTemplateStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/guild/template#create-guild-template-%-post-#guilds#{guild.id#docs/resources/guild#guild-object}#templates
     * 
     * Creates a template for the guild. Requires the `MANAGE_GUILD` permission. 
     * Returns the created [guild 
     * template](#DOCS_RESOURCES_GUILD_TEMPLATE/guild-template-object) object on 
     * success.
     */
    CreateGuildTemplate: ((
        guildid: string
    ) => `/guilds/${guildid}/templates`) as DeclareEndpoint<CreateGuildTemplateJsonParams, {}, GuildTemplateStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild/template#sync-guild-template-%-put-#guilds#{guild.id#docs/resources/guild#guild-object}#templates#{template.code#docs/resources/guild/template#guild-template-object}
     * 
     * Syncs the template to the guild's current state. Requires the `MANAGE_GUILD` 
     * permission. Returns the [guild 
     * template](#DOCS_RESOURCES_GUILD_TEMPLATE/guild-template-object) object on 
     * success.
     */
    SyncGuildTemplate: ((
        guildid: string,
        templatecode: string
    ) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{}, {}, GuildTemplateStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild/template#modify-guild-template-%-patch-#guilds#{guild.id#docs/resources/guild#guild-object}#templates#{template.code#docs/resources/guild/template#guild-template-object}
     * 
     * Modifies the template's metadata. Requires the `MANAGE_GUILD` permission. 
     * Returns the [guild 
     * template](#DOCS_RESOURCES_GUILD_TEMPLATE/guild-template-object) object on 
     * success.
     */
    ModifyGuildTemplate: ((
        guildid: string,
        templatecode: string
    ) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<ModifyGuildTemplateJsonParams, {}, GuildTemplateStructure>,
    /**
     * https://discord.com/developers/docs/resources/guild/template#delete-guild-template-%-delete-#guilds#{guild.id#docs/resources/guild#guild-object}#templates#{template.code#docs/resources/guild/template#guild-template-object}
     * 
     * Deletes the template. Requires the `MANAGE_GUILD` permission. Returns the 
     * deleted [guild template](#DOCS_RESOURCES_GUILD_TEMPLATE/guild-template-object) 
     * object on success.
     */
    DeleteGuildTemplate: ((
        guildid: string,
        templatecode: string
    ) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{}, {}, GuildTemplateStructure>,
    /**
     * https://discord.com/developers/docs/resources/invite#get-invite-%-get-#invites#{invite.code#docs/resources/invite#invite-object}
     * 
     * Returns an [invite](#DOCS_RESOURCES_INVITE/invite-object) object for the given 
     * code.
     */
    GetInvite: ((
        invitecode: string
    ) => `/invites/${invitecode}`) as DeclareEndpoint<{}, GetInviteQueryParams, InviteStructure>,
    /**
     * https://discord.com/developers/docs/resources/invite#delete-invite-%-delete-#invites#{invite.code#docs/resources/invite#invite-object}
     * 
     * Delete an invite. Requires the `MANAGE_CHANNELS` permission on the channel this 
     * invite belongs to, or `MANAGE_GUILD` to remove any invite across the guild. 
     * Returns an [invite](#DOCS_RESOURCES_INVITE/invite-object) object on success. 
     * Fires a [Invite Delete](#DOCS_TOPICS_GATEWAY/invite-delete) Gateway event.
     */
    DeleteInvite: ((
        invitecode: string
    ) => `/invites/${invitecode}`) as DeclareEndpoint<{}, {}, InviteStructure>,
    /**
     * https://discord.com/developers/docs/resources/stage/instance#create-stage-instance-%-post-#stage-instances
     * 
     * Creates a new Stage instance associated to a Stage channel.
     * Requires the user to be a moderator of the Stage channel.
     */
    CreateStageInstance: (() => `/stage-instances`) as DeclareEndpoint<CreateStageInstanceJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/stage/instance#get-stage-instance-%-get-#stage-instances#{channel.id#docs/resources/channel#channel-object}
     * 
     * Gets the stage instance associated with the Stage channel, if it exists.
     */
    GetStageInstance: ((
        channelid: string
    ) => `/stage-instances/${channelid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/stage/instance#update-stage-instance-%-patch-#stage-instances#{channel.id#docs/resources/channel#channel-object}
     * 
     * Updates fields of an existing Stage instance.
     * Requires the user to be a moderator of the Stage channel.
     */
    UpdateStageInstance: ((
        channelid: string
    ) => `/stage-instances/${channelid}`) as DeclareEndpoint<UpdateStageInstanceJsonParams, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/stage/instance#delete-stage-instance-%-delete-#stage-instances#{channel.id#docs/resources/channel#channel-object}
     * 
     * Deletes the Stage instance.
     * Requires the user to be a moderator of the Stage channel.
     */
    DeleteStageInstance: ((
        channelid: string
    ) => `/stage-instances/${channelid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/user#get-current-user-%-get-#users#@me
     * 
     * Returns the [user](#DOCS_RESOURCES_USER/user-object) object of the requester's 
     * account. For OAuth2, this requires the `identify` scope, which will return the 
     * object _without_ an email, and optionally the `email` scope, which returns the 
     * object _with_ an email.
     */
    GetCurrentUser: (() => `/users/@me`) as DeclareEndpoint<{}, {}, UserStructure>,
    /**
     * https://discord.com/developers/docs/resources/user#get-user-%-get-#users#{user.id#docs/resources/user#user-object}
     * 
     * Returns a [user](#DOCS_RESOURCES_USER/user-object) object for a given user ID.
     */
    GetUser: ((
        userid: string
    ) => `/users/${userid}`) as DeclareEndpoint<{}, {}, UserStructure>,
    /**
     * https://discord.com/developers/docs/resources/user#modify-current-user-%-patch-#users#@me
     * 
     * Modify the requester's user account settings. Returns a 
     * [user](#DOCS_RESOURCES_USER/user-object) object on success.
     * 
     * All parameters to this endpoint are optional.
     */
    ModifyCurrentUser: (() => `/users/@me`) as DeclareEndpoint<ModifyCurrentUserJsonParams, {}, UserStructure>,
    /**
     * https://discord.com/developers/docs/resources/user#get-current-user-guilds-%-get-#users#@me#guilds
     * 
     * Returns a list of partial [guild](#DOCS_RESOURCES_GUILD/guild-object) objects 
     * the current user is a member of. Requires the `guilds` OAuth2 scope.
     * 
     * @example
     * ```json
     * {
     *   "id": "80351110224678912",
     *   "name": "1337 Krew",
     *   "icon": "8342729096ea3675442027381ff50dfe",
     *   "owner": true,
     *   "permissions": "36953089",
     *   "features": ["COMMUNITY", "NEWS"]
     * }
     * ```
     */
    GetCurrentUserGuilds: (() => `/users/@me/guilds`) as DeclareEndpoint<{}, GetCurrentUserGuildsQueryParams, Partial<GuildStructure>[]>,
    /**
     * https://discord.com/developers/docs/resources/user#leave-guild-%-delete-#users#@me#guilds#{guild.id#docs/resources/guild#guild-object}
     * 
     * Leave a guild. Returns a 204 empty response on success.
     */
    LeaveGuild: ((
        guildid: string
    ) => `/users/@me/guilds/${guildid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/user#create-dm-%-post-#users#@me#channels
     * 
     * Create a new DM channel with a user. Returns a [DM 
     * channel](#DOCS_RESOURCES_CHANNEL/channel-object) object.
     * 
     * You should not use this endpoint to DM everyone in a server about something. DMs 
     * should generally be initiated by a user action. If you open a significant amount 
     * of DMs too quickly, your bot may be rate limited or blocked from opening new 
     * ones.
     */
    CreateDM: (() => `/users/@me/channels`) as DeclareEndpoint<CreateDMJsonParams, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/user#create-group-dm-%-post-#users#@me#channels
     * 
     * Create a new group DM channel with multiple users. Returns a [DM 
     * channel](#DOCS_RESOURCES_CHANNEL/channel-object) object. This endpoint was 
     * intended to be used with the now-deprecated GameBridge SDK. DMs created with 
     * this endpoint will not be shown in the Discord client
     * 
     * This endpoint is limited to 10 active group DMs.
     */
    CreateGroupDM: (() => `/users/@me/channels`) as DeclareEndpoint<CreateGroupDMJsonParams, {}, ChannelStructure>,
    /**
     * https://discord.com/developers/docs/resources/user#get-user-connections-%-get-#users#@me#connections
     * 
     * Returns a list of [connection](#DOCS_RESOURCES_USER/connection-object) objects. 
     * Requires the `connections` OAuth2 scope.
     */
    GetUserConnections: (() => `/users/@me/connections`) as DeclareEndpoint<{}, {}, ConnectionStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/voice#list-voice-regions-%-get-#voice#regions
     * 
     * Returns an array of [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) 
     * objects that can be used when creating servers.
     */
    ListVoiceRegions: (() => `/voice/regions`) as DeclareEndpoint<{}, {}, VoiceRegionStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/webhook#create-webhook-%-post-#channels#{channel.id#docs/resources/channel#channel-object}#webhooks
     * 
     * Create a new webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns a 
     * [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) object on success. Webhook 
     * names follow our naming restrictions that can be found in our [Usernames and 
     * Nicknames](#DOCS_RESOURCES_USER/usernames-and-nicknames) documentation, with the 
     * following additional stipulations:
     * - Webhook names cannot be: 'clyde'
     */
    CreateWebhook: ((
        channelid: string
    ) => `/channels/${channelid}/webhooks`) as DeclareEndpoint<CreateWebhookJsonParams, {}, WebhookStructure>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-channel-webhooks-%-get-#channels#{channel.id#docs/resources/channel#channel-object}#webhooks
     * 
     * Returns a list of channel [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) 
     * objects. Requires the `MANAGE_WEBHOOKS` permission.
     */
    GetChannelWebhooks: ((
        channelid: string
    ) => `/channels/${channelid}/webhooks`) as DeclareEndpoint<{}, {}, WebhookStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-guild-webhooks-%-get-#guilds#{guild.id#docs/resources/guild#guild-object}#webhooks
     * 
     * Returns a list of guild [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) 
     * objects. Requires the `MANAGE_WEBHOOKS` permission.
     */
    GetGuildWebhooks: ((
        guildid: string
    ) => `/guilds/${guildid}/webhooks`) as DeclareEndpoint<{}, {}, WebhookStructure[]>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-webhook-%-get-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}
     * 
     * Returns the new [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) object for the 
     * given id.
     */
    GetWebhook: ((
        webhookid: string
    ) => `/webhooks/${webhookid}`) as DeclareEndpoint<{}, {}, WebhookStructure>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-webhook-with-token-%-get-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}
     * 
     * Same as above, except this call does not require authentication and returns no 
     * user in the webhook object.
     */
    GetWebhookWithToken: ((
        webhookid: string,
        webhooktoken: string
    ) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}, WebhookStructure>,
    /**
     * https://discord.com/developers/docs/resources/webhook#modify-webhook-%-patch-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}
     * 
     * Modify a webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns the updated 
     * [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) object on success.
     * 
     * All parameters to this endpoint are optional
     */
    ModifyWebhook: ((
        webhookid: string
    ) => `/webhooks/${webhookid}`) as DeclareEndpoint<ModifyWebhookJsonParams, {}, WebhookStructure>,
    /**
     * https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token-%-patch-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}
     * 
     * Same as above, except this call does not require authentication, does not accept 
     * a `channel_id` parameter in the body, and does not return a user in the webhook 
     * object.
     */
    ModifyWebhookWithToken: ((
        webhookid: string,
        webhooktoken: string
    ) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<ModifyWebhookJsonParams, {}, WebhookStructure>,
    /**
     * https://discord.com/developers/docs/resources/webhook#delete-webhook-%-delete-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}
     * 
     * Delete a webhook permanently. Requires the `MANAGE_WEBHOOKS` permission. Returns 
     * a 204 NO CONTENT response on success.
     */
    DeleteWebhook: ((
        webhookid: string
    ) => `/webhooks/${webhookid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token-%-delete-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}
     * 
     * Same as above, except this call does not require authentication.
     */
    DeleteWebhookWithToken: ((
        webhookid: string,
        webhooktoken: string
    ) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#execute-webhook-%-post-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}
     * 
     * Note that when sending a message, you must provide a value for at **least one 
     * of** `content`, `embeds`, or `file`.
     * 
     * For a `file` attachment, the `Content-Disposition` subpart header MUST contain a 
     * `filename` parameter.
     * 
     * This endpoint supports both `application/json` and `multipart/form-data` bodies. 
     * When uploading files the `multipart/form-data` content type must be used.
     * Note that in multipart form data, the `embed` and `allowed_mentions` fields 
     * cannot be used. You can pass a stringified JSON body as a form value as 
     * `payload_json` instead.
     * **If you supply a `payload_json` form value, all fields except for `file` fields 
     * will be ignored in the form data**.
     */
    ExecuteWebhook: ((
        webhookid: string,
        webhooktoken: string
    ) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<ExecuteWebhookJsonParams, ExecuteWebhookQueryParams, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#execute-slack-compatible-webhook-%-post-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}#slack
     * 
     * Refer to [Slack's documentation](https://api.slack.com/incoming-webhooks) for 
     * more information. We do not support Slack's `channel`, `icon_emoji`, `mrkdwn`, 
     * or `mrkdwn_in` properties.
     */
    ExecuteSlackCompatibleWebhook: ((
        webhookid: string,
        webhooktoken: string
    ) => `/webhooks/${webhookid}/${webhooktoken}/slack`) as DeclareEndpoint<{}, ExecuteSlackCompatibleWebhookQueryParams, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#execute-github-compatible-webhook-%-post-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}#github
     * 
     * Add a new webhook to your GitHub repo (in the repo's settings), and use this 
     * endpoint as the "Payload URL." You can choose what events your Discord channel 
     * receives by choosing the "Let me select individual events" option and selecting 
     * individual events for the new webhook you're configuring.
     */
    ExecuteGitHubCompatibleWebhook: ((
        webhookid: string,
        webhooktoken: string
    ) => `/webhooks/${webhookid}/${webhooktoken}/github`) as DeclareEndpoint<{}, ExecuteGitHubCompatibleWebhookQueryParams, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-webhook-message-%-get-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Returns a previously-sent webhook message from the same token. Returns a 
     * [message](#DOCS_RESOURCES_CHANNEL/message-object) object on success.
     */
    GetWebhookMessage: ((
        webhookid: string,
        webhooktoken: string,
        messageid: string
    ) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}, MessageStructure>,
    /**
     * https://discord.com/developers/docs/resources/webhook#edit-webhook-message-%-patch-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Edits a previously-sent webhook message from the same token. Returns a 
     * [message](#DOCS_RESOURCES_CHANNEL/message-object) object on success.
     * When the `content` field is edited, the `mentions` array in the message object 
     * will be reconstructed from scratch based on the new content. The 
     * `allowed_mentions` field of the edit request controls how this happens. If there 
     * is no explicit `allowed_mentions` in the edit request, the content will be 
     * parsed with _default_ allowances, that is, without regard to whether or not an 
     * `allowed_mentions` was present in the request that originally created the 
     * message.
     * 
     * For a `file` attachment, the `Content-Disposition` subpart header MUST contain a 
     * `filename` parameter.
     * 
     * This endpoint supports both `application/json` and `multipart/form-data` bodies. 
     * When uploading files the `multipart/form-data` content type must be used.
     * Note that in multipart form data, the `embed`, `allowed_mentions`, and 
     * `attachments` fields cannot be used. You can pass a stringified JSON body as a 
     * form value as `payload_json` instead.
     * **If you supply a `payload_json` form value, all fields except for `file` fields 
     * will be ignored in the form data**.
     * 
     * All parameters to this endpoint are optional and nullable.
     */
    EditWebhookMessage: ((
        webhookid: string,
        webhooktoken: string,
        messageid: string
    ) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<EditWebhookMessageJsonParams, {}, MessageStructure>,
    /**
     * https://discord.com/developers/docs/resources/webhook#delete-webhook-message-%-delete-#webhooks#{webhook.id#docs/resources/webhook#webhook-object}#{webhook.token#docs/resources/webhook#webhook-object}#messages#{message.id#docs/resources/channel#message-object}
     * 
     * Deletes a message that was created by the webhook. Returns a 204 NO CONTENT 
     * response on success.
     */
    DeleteWebhookMessage: ((
        webhookid: string,
        webhooktoken: string,
        messageid: string
    ) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/topics/gateway#get-gateway-%-get-#gateway
     * 
     * Returns an object with a single valid WSS URL, which the client can use for 
     * [Connecting](#DOCS_TOPICS_GATEWAY/connecting). Clients **should** cache this 
     * value and only call this endpoint to retrieve a new URL if they are unable to 
     * properly establish a connection using the cached version of the URL.
     * 
     * This endpoint does not require authentication.
     * 
     * @example
     * ```json
     * {
     *   "url": "wss://gateway.discord.gg/"
     * }
     * ```
     */
    GetGateway: (() => `/gateway`) as DeclareEndpoint<{}, {}, {}>,
    /**
     * https://discord.com/developers/docs/topics/gateway#get-gateway-bot-%-get-#gateway#bot
     * 
     * Returns an object based on the information in [Get 
     * Gateway](#DOCS_TOPICS_GATEWAY/get-gateway), plus additional metadata that can 
     * help during the operation of large or [sharded](#DOCS_TOPICS_GATEWAY/sharding) 
     * bots. Unlike the [Get Gateway](#DOCS_TOPICS_GATEWAY/get-gateway), this route 
     * should not be cached for extended periods of time as the value is not guaranteed 
     * to be the same per-call, and changes as the bot joins/leaves guilds.
     * 
     * This endpoint requires authentication using a valid bot token.
     * 
     * @example
     * ```json
     * {
     *   "url": "wss://gateway.discord.gg/",
     *   "shards": 9,
     *   "session_start_limit": {
     *     "total": 1000,
     *     "remaining": 999,
     *     "reset_after": 14400000,
     *     "max_concurrency": 1
     *   }
     * }
     * ```
     */
    GetGatewayBot: (() => `/gateway/bot`) as DeclareEndpoint<GetGatewayBotJsonParams, {}, GetGatewayBotResponse>,
    /**
     * https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information-%-get-#oauth2#applications#@me
     * 
     * Returns the bot's [application](#DOCS_RESOURCES_APPLICATION/application-object) 
     * object without `flags`.
     */
    GetCurrentBotApplicationInformation: (() => `/oauth2/applications/@me`) as DeclareEndpoint<{}, {}, ApplicationStructure>,
    /**
     * https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-%-get-#oauth2#@me
     * 
     * Returns info about the current authorization. Requires authentication with a 
     * bearer token.
     * 
     * @example
     * ```json
     * {
     *     "application": {
     *         "id": "159799960412356608",
     *         "name": "AIRHORN SOLUTIONS",
     *         "icon": "f03590d3eb764081d154a66340ea7d6d",
     *         "description": "",
     *         "summary": "",
     *         "hook": true,
     *         "bot_public": true,
     *         "bot_require_code_grant": false,
     *         "verify_key": "c8cde6a3c8c6e49d86af3191287b3ce255872be1fff6dc285bdb420c06a2c3c8"
     *     },
     *     "scopes": [
     *         "guilds.join",
     *         "identify"
     *     ],
     *     "expires": "2021-01-23T02:33:17.017000+00:00",
     *     "user": {
     *         "id": "268473310986240001",
     *         "username": "Discord",
     *         "avatar": "f749bb0cbeeb26ef21eca719337d20f1",
     *         "discriminator": "0001",
     *         "public_flags": 131072
     *     }
     * }
     * ```
     */
    GetCurrentAuthorizationInformation: (() => `/oauth2/@me`) as DeclareEndpoint<{}, {}, GetCurrentAuthorizationInformationResponse>
}
