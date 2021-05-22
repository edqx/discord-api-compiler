type DeclareEndpoint<
    JSONParams extends Record<string, any> = {},
    QueryParams extends Record<string, any> = {},
    ResponseType extends Record<string, any> = {}
> = (...args: string[]) => string;

export type ExtractJSONParams<
    T extends DeclareEndpoint<unknown, unknown, unknown>
> = T extends DeclareEndpoint<infer X, any, any> ? X : never

export type ExtractQueryParams<
    T extends DeclareEndpoint<unknown, unknown, unknown>
> = T extends DeclareEndpoint<any, infer X, any> ? X: never

export type ExtractResponseType<
    T extends DeclareEndpoint<unknown, unknown, unknown>
> = T extends DeclareEndpoint<any, any, infer X> ? X: never

type Snowflake = string
type Binary = string
type FileContent = string
type ISO8601Timestamp = string
type ImageData = string
type GuildFeatureString = string

enum ApplicationCommandOptionType {
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

enum ApplicationCommandPermissionType {
    ROLE = 1,
    USER = 2
}

interface ApplicationCommandOption {
    type: ApplicationCommandOptionType;
    name: string;
    description: string;
    required?: boolean;
    choices?: ApplicationCommandOptionChoice[];
    options?: ApplicationCommandOption[];
}

interface ApplicationCommandPermissions {
    id: Snowflake;
    type: ApplicationCommandPermissionType;
    permission: boolean;
}

interface EmbedStructure {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: ISO8601Timestamp;
    color?: number;
    footer?: EmbedFooterStructure;
    image?: EmbedImageStructure;
    thumbnail?: EmbedThumbnailStructure;
    video?: EmbedVideoStructure;
    provider?: EmbedProviderStructure;
    author?: EmbedAuthorStructure;
    fields?: EmbedFieldStructure[];
}

interface AllowedMentionsStructure {
    parse: any[];
    roles: Snowflake[];
    users: Snowflake[];
    replied_user: boolean;
}

interface MessageReferenceStructure {
    message_id?: Snowflake;
    channel_id?: Snowflake;
    guild_id?: Snowflake;
    fail_if_not_exists?: boolean;
}

interface AttachmentStructure {
    id: Snowflake;
    filename: string;
    content_type?: string;
    size: number;
    url: string;
    proxy_url: string;
    height?: number|null;
    width?: number|null;
}

interface ChannelStructure {
    id: Snowflake;
    type: number;
    guild_id?: Snowflake;
    position?: number;
    permission_overwrites?: OverwriteStructure[];
    name?: string;
    topic?: string|null;
    nsfw?: boolean;
    last_message_id?: Snowflake|null;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: UserStructure[];
    icon?: string|null;
    owner_id?: Snowflake;
    application_id?: Snowflake;
    parent_id?: Snowflake|null;
    last_pin_timestamp?: ISO8601Timestamp|null;
    rtc_region?: string|null;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: ThreadMetadataStructure;
    member?: ThreadMemberStructure;
}

interface ThreadMemberStructure {
    id: Snowflake;
    user_id: Snowflake;
    join_timestamp: ISO8601Timestamp;
    flags: number;
}

interface RoleStructure {
    id: Snowflake;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTagsStructure;
}

interface OverwriteStructure {
    id: Snowflake;
    type: number;
    allow: string;
    deny: string;
}

interface SessionStartLimitStructure {
    total: number;
    remaining: number;
    reset_after: number;
    max_concurrency: number;
}

interface ApplicationStructure {
    id: Snowflake;
    name: string;
    icon: string|null;
    description: string;
    rpc_origins?: string[];
    bot_public: boolean;
    bot_require_code_grant: boolean;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    owner: UserStructure;
    summary: string;
    verify_key: string;
    team: any|null;
    guild_id?: Snowflake;
    primary_sku_id?: Snowflake;
    slug?: string;
    cover_image?: string;
    flags: number;
}

interface UserStructure {
    id: Snowflake;
    username: string;
    discriminator: string;
    avatar: string|null;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    locale?: string;
    verified?: boolean;
    email?: string|null;
    flags?: number;
    premium_type?: number;
    public_flags?: number;
}

interface ApplicationCommandOptionChoice {
    name: string;
    value: any;
}

interface EmbedFooterStructure {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

interface EmbedImageStructure {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

interface EmbedThumbnailStructure {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

interface EmbedVideoStructure {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

interface EmbedProviderStructure {
    name?: string;
    url?: string;
}

interface EmbedAuthorStructure {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

interface EmbedFieldStructure {
    name: string;
    value: any;
    inline?: boolean;
}

interface ThreadMetadataStructure {
    archived: boolean;
    archiver_id?: Snowflake;
    auto_archive_duration: number;
    archive_timestamp: ISO8601Timestamp;
    locked?: boolean;
}

interface RoleTagsStructure {
    bot_id?: Snowflake;
    integration_id?: Snowflake;
    premium_subscriber?: null;
}

export const ApiEndpoint = {
    GetEntitlements: ((applicationid: string) => `/applications/${applicationid}/entitlements`) as DeclareEndpoint<{}, {}, {}>,
    GetEntitlement: ((applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}`) as DeclareEndpoint<{}, {}, {}>,
    GetSKUs: ((applicationid: string) => `/applications/${applicationid}/skus`) as DeclareEndpoint<{}, {}, {}>,
    ConsumeSKU: ((applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}/consume`) as DeclareEndpoint<{}, {}, {}>,
    DeleteTestEntitlement: ((applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}`) as DeclareEndpoint<{}, {}, {}>,
    CreatePurchaseDiscount: ((skuid: string, userid: string) => `/store/skus/${skuid}/discounts/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    DeletePurchaseDiscount: ((skuid: string, userid: string) => `/store/skus/${skuid}/discounts/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGlobalApplicationCommands: ((applicationid: string) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{}, {}, any>,
    CreateGlobalApplicationCommand: ((applicationid: string) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{
        name: string;
        description: string;
        options?: ApplicationCommandOption[];
        default_permission?: boolean;
    }, {}, {}>,
    GetGlobalApplicationCommand: ((applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, any>,
    EditGlobalApplicationCommand: ((applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{
        name: string;
        description: string;
        options: ApplicationCommandOption[]|null;
        default_permission: boolean;
    }, {}, {}>,
    DeleteGlobalApplicationCommand: ((applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildApplicationCommands: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{}, {}, any>,
    BulkOverwriteGlobalApplicationCommands: ((applicationid: string) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{}, {}, {}>,
    CreateGuildApplicationCommand: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{
        name: string;
        description: string;
        options?: ApplicationCommandOption[];
        default_permission?: boolean;
    }, {}, {}>,
    GetGuildApplicationCommand: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, any>,
    EditGuildApplicationCommand: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{
        name: string;
        description: string;
        options: ApplicationCommandOption[]|null;
        default_permission: boolean;
    }, {}, {}>,
    DeleteGuildApplicationCommand: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{}, {}, {}>,
    BulkOverwriteGuildApplicationCommands: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{}, {}, {}>,
    CreateInteractionResponse: ((interactionid: string, interactiontoken: string) => `/interactions/${interactionid}/${interactiontoken}/callback`) as DeclareEndpoint<{}, {}, {}>,
    GetOriginalInteractionResponse: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}, {}>,
    EditOriginalInteractionResponse: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}, {}>,
    DeleteOriginalInteractionResponse: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}, {}>,
    CreateFollowupMessage: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}`) as DeclareEndpoint<{}, {}, {}>,
    EditFollowupMessage: ((applicationid: string, interactiontoken: string, messageid: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    DeleteFollowupMessage: ((applicationid: string, interactiontoken: string, messageid: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildApplicationCommandPermissions: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`) as DeclareEndpoint<{}, {}, any>,
    GetApplicationCommandPermissions: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`) as DeclareEndpoint<{}, {}, any>,
    EditApplicationCommandPermissions: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`) as DeclareEndpoint<{
        permissions: ApplicationCommandPermissions[];
    }, {}, {}>,
    BatchEditApplicationCommandPermissions: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildAuditLog: ((guildid: string) => `/guilds/${guildid}/audit-logs`) as DeclareEndpoint<{}, {
        user_id: Snowflake;
        action_type: number;
        before: Snowflake;
        limit: number;
    }, any>,
    GetChannel: ((channelid: string) => `/channels/${channelid}`) as DeclareEndpoint<{}, {}, any>,
    ModifyChannel: ((channelid: string) => `/channels/${channelid}`) as DeclareEndpoint<{
        name: string;
        icon: Binary;
    }, {}, {}>,
    DeleteChannel: ((channelid: string) => `/channels/${channelid}`) as DeclareEndpoint<{}, {}, any>,
    GetChannelMessages: ((channelid: string) => `/channels/${channelid}/messages`) as DeclareEndpoint<{}, {
        around: Snowflake;
        before: Snowflake;
        after: Snowflake;
        limit: number;
    }, {}>,
    GetChannelMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{}, {}, any>,
    CreateMessage: ((channelid: string) => `/channels/${channelid}/messages`) as DeclareEndpoint<{
        content: string;
        tts: boolean;
        file: FileContent;
        embed: EmbedStructure;
        payload_json: string;
        allowed_mentions: AllowedMentionsStructure;
        message_reference: MessageReferenceStructure;
    }, {}, any>,
    CrosspostMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/crosspost`) as DeclareEndpoint<{}, {}, any>,
    CreateReaction: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`) as DeclareEndpoint<{}, {}, {}>,
    DeleteOwnReaction: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`) as DeclareEndpoint<{}, {}, {}>,
    DeleteUserReaction: ((channelid: string, messageid: string, emoji: string, userid: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    GetReactions: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`) as DeclareEndpoint<{}, {
        after: Snowflake;
        limit: number;
    }, any>,
    DeleteAllReactions: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/reactions`) as DeclareEndpoint<{}, {}, {}>,
    DeleteAllReactionsforEmoji: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`) as DeclareEndpoint<{}, {}, {}>,
    EditMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{
        content: string;
        embed: EmbedStructure;
        flags: number;
        file: FileContent;
        payload_json: string;
        allowed_mentions: AllowedMentionsStructure;
        attachments: AttachmentStructure[];
    }, {}, any>,
    DeleteMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    BulkDeleteMessages: ((channelid: string) => `/channels/${channelid}/messages/bulk-delete`) as DeclareEndpoint<{
        messages: Snowflake[];
    }, {}, {}>,
    EditChannelPermissions: ((channelid: string, overwriteid: string) => `/channels/${channelid}/permissions/${overwriteid}`) as DeclareEndpoint<{
        allow: string;
        deny: string;
        type: number;
    }, {}, {}>,
    GetChannelInvites: ((channelid: string) => `/channels/${channelid}/invites`) as DeclareEndpoint<{}, {}, any>,
    CreateChannelInvite: ((channelid: string) => `/channels/${channelid}/invites`) as DeclareEndpoint<{
        max_age: number;
        max_uses: number;
        temporary: boolean;
        unique: boolean;
        target_type: number;
        target_user_id: Snowflake;
        target_application_id: Snowflake;
    }, {}, any>,
    DeleteChannelPermission: ((channelid: string, overwriteid: string) => `/channels/${channelid}/permissions/${overwriteid}`) as DeclareEndpoint<{}, {}, {}>,
    FollowNewsChannel: ((channelid: string) => `/channels/${channelid}/followers`) as DeclareEndpoint<{
        webhook_channel_id: Snowflake;
    }, {}, any>,
    TriggerTypingIndicator: ((channelid: string) => `/channels/${channelid}/typing`) as DeclareEndpoint<{}, {}, {}>,
    GetPinnedMessages: ((channelid: string) => `/channels/${channelid}/pins`) as DeclareEndpoint<{}, {}, {}>,
    PinMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/pins/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    UnpinMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/pins/${messageid}`) as DeclareEndpoint<{}, {}, {}>,
    GroupDMAddRecipient: ((channelid: string, userid: string) => `/channels/${channelid}/recipients/${userid}`) as DeclareEndpoint<{
        access_token: string;
        nick: string;
    }, {}, {}>,
    GroupDMRemoveRecipient: ((channelid: string, userid: string) => `/channels/${channelid}/recipients/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    StartThreadwithMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/threads`) as DeclareEndpoint<{
        name: string;
        auto_archive_duration: number;
    }, {}, {}>,
    StartThreadwithoutMessage: ((channelid: string) => `/channels/${channelid}/threads`) as DeclareEndpoint<{
        name: string;
        auto_archive_duration: number;
    }, {}, {}>,
    JoinThread: ((channelid: string) => `/channels/${channelid}/thread-members/@me`) as DeclareEndpoint<{}, {}, {}>,
    AddThreadMember: ((channelid: string, userid: string) => `/channels/${channelid}/thread-members/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    LeaveThread: ((channelid: string) => `/channels/${channelid}/thread-members/@me`) as DeclareEndpoint<{}, {}, {}>,
    RemoveThreadMember: ((channelid: string, userid: string) => `/channels/${channelid}/thread-members/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    ListThreadMembers: ((channelid: string) => `/channels/${channelid}/thread-members`) as DeclareEndpoint<{}, {}, {}>,
    ListActiveThreads: ((channelid: string) => `/channels/${channelid}/threads/active`) as DeclareEndpoint<{}, {}, {
        threads: ChannelStructure[];
        members: ThreadMemberStructure[];
        has_more: boolean;
    }>,
    ListPublicArchivedThreads: ((channelid: string) => `/channels/${channelid}/threads/archived/public`) as DeclareEndpoint<{}, {
        before?: ISO8601Timestamp;
        limit?: number;
    }, {
        threads: ChannelStructure[];
        members: ThreadMemberStructure[];
        has_more: boolean;
    }>,
    ListPrivateArchivedThreads: ((channelid: string) => `/channels/${channelid}/threads/archived/private`) as DeclareEndpoint<{}, {
        before?: ISO8601Timestamp;
        limit?: number;
    }, {
        threads: ChannelStructure[];
        members: ThreadMemberStructure[];
        has_more: boolean;
    }>,
    ListJoinedPrivateArchivedThreads: ((channelid: string) => `/channels/${channelid}/users/@me/threads/archived/private`) as DeclareEndpoint<{}, {
        before?: Snowflake;
        limit?: number;
    }, {
        threads: ChannelStructure[];
        members: ThreadMemberStructure[];
        has_more: boolean;
    }>,
    ListGuildEmojis: ((guildid: string) => `/guilds/${guildid}/emojis`) as DeclareEndpoint<{}, {}, any>,
    GetGuildEmoji: ((guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{}, {}, any>,
    CreateGuildEmoji: ((guildid: string) => `/guilds/${guildid}/emojis`) as DeclareEndpoint<{
        name: string;
        image: ImageData;
        roles: Snowflake[];
    }, {}, {}>,
    ModifyGuildEmoji: ((guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{
        name: string;
        roles: Snowflake[]|null;
    }, {}, {}>,
    DeleteGuildEmoji: ((guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{}, {}, {}>,
    CreateGuild: (() => `/guilds`) as DeclareEndpoint<{
        name: string;
        region?: string;
        icon?: ImageData;
        verification_level?: number;
        default_message_notifications?: number;
        explicit_content_filter?: number;
        roles?: RoleStructure[];
        channels?: ChannelStructure[];
        afk_channel_id?: Snowflake;
        afk_timeout?: number;
        system_channel_id?: Snowflake;
        system_channel_flags?: number;
    }, {}, any>,
    GetGuild: ((guildid: string) => `/guilds/${guildid}`) as DeclareEndpoint<{}, {
        with_counts?: boolean;
    }, {}>,
    GetGuildPreview: ((guildid: string) => `/guilds/${guildid}/preview`) as DeclareEndpoint<{}, {}, {}>,
    ModifyGuild: ((guildid: string) => `/guilds/${guildid}`) as DeclareEndpoint<{
        name: string;
        region: string|null;
        verification_level: number|null;
        default_message_notifications: number|null;
        explicit_content_filter: number|null;
        afk_channel_id: Snowflake|null;
        afk_timeout: number;
        icon: ImageData|null;
        owner_id: Snowflake;
        splash: ImageData|null;
        discovery_splash: ImageData|null;
        banner: ImageData|null;
        system_channel_id: Snowflake|null;
        system_channel_flags: number;
        rules_channel_id: Snowflake|null;
        public_updates_channel_id: Snowflake|null;
        preferred_locale: string|null;
        features: GuildFeatureString[];
        description: string|null;
    }, {}, {}>,
    DeleteGuild: ((guildid: string) => `/guilds/${guildid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildChannels: ((guildid: string) => `/guilds/${guildid}/channels`) as DeclareEndpoint<{}, {}, any>,
    CreateGuildChannel: ((guildid: string) => `/guilds/${guildid}/channels`) as DeclareEndpoint<{
        name: string;
        type: number;
        topic: string;
        bitrate: number;
        user_limit: number;
        rate_limit_per_user: number;
        position: number;
        permission_overwrites: OverwriteStructure[];
        parent_id: Snowflake;
        nsfw: boolean;
    }, {}, {}>,
    ModifyGuildChannelPositions: ((guildid: string) => `/guilds/${guildid}/channels`) as DeclareEndpoint<{
        id: Snowflake;
        position: number|null;
        lock_permissions: boolean|null;
        parent_id: Snowflake|null;
    }, {}, {}>,
    GetGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{}, {}, any>,
    ListGuildMembers: ((guildid: string) => `/guilds/${guildid}/members`) as DeclareEndpoint<{}, {
        limit: number;
        after: Snowflake;
    }, any>,
    SearchGuildMembers: ((guildid: string) => `/guilds/${guildid}/members/search`) as DeclareEndpoint<{}, {
        query: string;
        limit: number;
    }, any>,
    AddGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{
        access_token: string;
        nick: string;
        roles: Snowflake[];
        mute: boolean;
        deaf: boolean;
    }, {}, {}>,
    ModifyGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{
        nick: string;
        roles: Snowflake[];
        mute: boolean;
        deaf: boolean;
        channel_id: Snowflake;
    }, {}, {}>,
    ModifyCurrentUserNick: ((guildid: string) => `/guilds/${guildid}/members/@me/nick`) as DeclareEndpoint<{
        nick?: string|null;
    }, {}, {}>,
    AddGuildMemberRole: ((guildid: string, userid: string, roleid: string) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`) as DeclareEndpoint<{}, {}, {}>,
    RemoveGuildMemberRole: ((guildid: string, userid: string, roleid: string) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`) as DeclareEndpoint<{}, {}, {}>,
    RemoveGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildBans: ((guildid: string) => `/guilds/${guildid}/bans`) as DeclareEndpoint<{}, {}, any>,
    GetGuildBan: ((guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{}, {}, any>,
    CreateGuildBan: ((guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{
        delete_message_days?: number;
        reason?: string;
    }, {}, {}>,
    RemoveGuildBan: ((guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildRoles: ((guildid: string) => `/guilds/${guildid}/roles`) as DeclareEndpoint<{}, {}, any>,
    CreateGuildRole: ((guildid: string) => `/guilds/${guildid}/roles`) as DeclareEndpoint<{
        name: string;
        permissions: string;
        color: number;
        hoist: boolean;
        mentionable: boolean;
    }, {}, {}>,
    ModifyGuildRolePositions: ((guildid: string) => `/guilds/${guildid}/roles`) as DeclareEndpoint<{
        id: Snowflake;
        position?: number|null;
    }, {}, any>,
    ModifyGuildRole: ((guildid: string, roleid: string) => `/guilds/${guildid}/roles/${roleid}`) as DeclareEndpoint<{
        name: string;
        permissions: string;
        color: number;
        hoist: boolean;
        mentionable: boolean;
    }, {}, {}>,
    DeleteGuildRole: ((guildid: string, roleid: string) => `/guilds/${guildid}/roles/${roleid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildPruneCount: ((guildid: string) => `/guilds/${guildid}/prune`) as DeclareEndpoint<{}, {
        days: number;
        include_roles: string;
    }, {}>,
    BeginGuildPrune: ((guildid: string) => `/guilds/${guildid}/prune`) as DeclareEndpoint<{
        days: number;
        compute_prune_count: boolean;
        include_roles: Snowflake[];
        reason?: string;
    }, {}, {}>,
    GetGuildVoiceRegions: ((guildid: string) => `/guilds/${guildid}/regions`) as DeclareEndpoint<{}, {}, any>,
    GetGuildInvites: ((guildid: string) => `/guilds/${guildid}/invites`) as DeclareEndpoint<{}, {}, any>,
    GetGuildIntegrations: ((guildid: string) => `/guilds/${guildid}/integrations`) as DeclareEndpoint<{}, {}, any>,
    DeleteGuildIntegration: ((guildid: string, integrationid: string) => `/guilds/${guildid}/integrations/${integrationid}`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildWidgetSettings: ((guildid: string) => `/guilds/${guildid}/widget`) as DeclareEndpoint<{}, {}, any>,
    ModifyGuildWidget: ((guildid: string) => `/guilds/${guildid}/widget`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildWidget: ((guildid: string) => `/guilds/${guildid}/widget.json`) as DeclareEndpoint<{}, {}, {}>,
    GetGuildVanityURL: ((guildid: string) => `/guilds/${guildid}/vanity-url`) as DeclareEndpoint<{}, {}, any>,
    GetGuildWidgetImage: ((guildid: string) => `/guilds/${guildid}/widget.png`) as DeclareEndpoint<{}, {
        style: string;
    }, {}>,
    GetGuildWelcomeScreen: ((guildid: string) => `/guilds/${guildid}/welcome-screen`) as DeclareEndpoint<{}, {}, {}>,
    ModifyGuildWelcomeScreen: ((guildid: string) => `/guilds/${guildid}/welcome-screen`) as DeclareEndpoint<{}, {}, {}>,
    UpdateCurrentUserVoiceState: ((guildid: string) => `/guilds/${guildid}/voice-states/@me`) as DeclareEndpoint<{
        channel_id: Snowflake;
        suppress?: boolean;
        request_to_speak_timestamp?: ISO8601Timestamp|null;
    }, {}, {}>,
    UpdateUserVoiceState: ((guildid: string, userid: string) => `/guilds/${guildid}/voice-states/${userid}`) as DeclareEndpoint<{
        channel_id: Snowflake;
        suppress?: boolean;
    }, {}, {}>,
    GetGuildTemplate: ((templatecode: string) => `/guilds/templates/${templatecode}`) as DeclareEndpoint<{}, {}, any>,
    CreateGuildfromGuildTemplate: ((templatecode: string) => `/guilds/templates/${templatecode}`) as DeclareEndpoint<{
        name: string;
        icon?: ImageData;
    }, {}, any>,
    GetGuildTemplates: ((guildid: string) => `/guilds/${guildid}/templates`) as DeclareEndpoint<{}, {}, any>,
    CreateGuildTemplate: ((guildid: string) => `/guilds/${guildid}/templates`) as DeclareEndpoint<{
        name: string;
        description?: string|null;
    }, {}, {}>,
    SyncGuildTemplate: ((guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{}, {}, {}>,
    ModifyGuildTemplate: ((guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{
        name?: string;
        description?: string|null;
    }, {}, {}>,
    DeleteGuildTemplate: ((guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{}, {}, {}>,
    GetInvite: ((invitecode: string) => `/invites/${invitecode}`) as DeclareEndpoint<{}, {
        with_counts?: boolean;
        with_expiration?: boolean;
    }, any>,
    DeleteInvite: ((invitecode: string) => `/invites/${invitecode}`) as DeclareEndpoint<{}, {}, any>,
    CreateStageInstance: (() => `/stage-instances`) as DeclareEndpoint<{
        channel_id: Snowflake;
        topic: string;
    }, {}, {}>,
    GetStageInstance: ((channelid: string) => `/stage-instances/${channelid}`) as DeclareEndpoint<{}, {}, {}>,
    UpdateStageInstance: ((channelid: string) => `/stage-instances/${channelid}`) as DeclareEndpoint<{
        topic: string;
    }, {}, {}>,
    DeleteStageInstance: ((channelid: string) => `/stage-instances/${channelid}`) as DeclareEndpoint<{}, {}, {}>,
    ListVoiceRegions: (() => `/voice/regions`) as DeclareEndpoint<{}, {}, any>,
    CreateWebhook: ((channelid: string) => `/channels/${channelid}/webhooks`) as DeclareEndpoint<{
        name: string;
        avatar: ImageData|null;
    }, {}, any>,
    GetChannelWebhooks: ((channelid: string) => `/channels/${channelid}/webhooks`) as DeclareEndpoint<{}, {}, any>,
    GetGuildWebhooks: ((guildid: string) => `/guilds/${guildid}/webhooks`) as DeclareEndpoint<{}, {}, any>,
    GetWebhook: ((webhookid: string) => `/webhooks/${webhookid}`) as DeclareEndpoint<{}, {}, {}>,
    GetWebhookwithToken: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}, {}>,
    ModifyWebhook: ((webhookid: string) => `/webhooks/${webhookid}`) as DeclareEndpoint<{
        name: string;
        avatar: ImageData|null;
        channel_id: Snowflake;
    }, {}, {}>,
    ModifyWebhookwithToken: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}, {}>,
    DeleteWebhook: ((webhookid: string) => `/webhooks/${webhookid}`) as DeclareEndpoint<{}, {}, {}>,
    DeleteWebhookwithToken: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}, {}>,
    ExecuteWebhook: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{
        content: string;
        username: string;
        avatar_url: string;
        tts: boolean;
        file: FileContent;
        embeds: EmbedStructure[];
        payload_json: string;
        allowed_mentions: AllowedMentionsStructure;
    }, {
        wait: boolean;
        thread_id: Snowflake;
    }, {}>,
    ExecuteSlackCompatibleWebhook: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}/slack`) as DeclareEndpoint<{}, {
        wait: boolean;
    }, {}>,
    ExecuteGitHubCompatibleWebhook: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}/github`) as DeclareEndpoint<{}, {
        wait: boolean;
    }, {}>,
    GetWebhookMessage: ((webhookid: string, webhooktoken: string, messageid: string) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}, any>,
    EditWebhookMessage: ((webhookid: string, webhooktoken: string, messageid: string) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<{
        content: string;
        embeds: EmbedStructure[];
        file: FileContent;
        payload_json: string;
        allowed_mentions: AllowedMentionsStructure;
        attachments: AttachmentStructure[];
    }, {}, any>,
    GetGateway: (() => `/gateway`) as DeclareEndpoint<{}, {}, {}>,
    GetGatewayBot: (() => `/gateway/bot`) as DeclareEndpoint<{
        url: string;
        shards: number;
        session_start_limit: SessionStartLimitStructure;
    }, {}, {
        url: string;
        shards: number;
        session_start_limit: SessionStartLimitStructure;
    }>,
    GetCurrentBotApplicationInformation: (() => `/oauth2/applications/@me`) as DeclareEndpoint<{}, {}, {}>,
    GetCurrentAuthorizationInformation: (() => `/oauth2/@me`) as DeclareEndpoint<{}, {}, {
        application: ApplicationStructure;
        scopes: string[];
        expires: ISO8601Timestamp;
        user?: UserStructure;
    }>
}