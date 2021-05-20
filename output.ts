type DeclareEndpoint<
    JSONParams extends Record<string, any> = {},
    QueryParams extends Record<string, any> = {}
> = (...args: string[]) => string;

type Snowflake = string;
type Integer = number;

export const ApiEndpoint = {
    /**
     * https://discord.com/developers/docs/game-sdk/store#get-entitlements
     * 
     * Gets entitlements for a given user. You can use this on your game backend to check
     * entitlements of an arbitrary user, or perhaps in an administrative panel for your
     * support team.
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
    GetEntitlements: ((applicationid: string) => `/applications/${applicationid}/entitlements`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/game-sdk/store#get-entitlement
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
    GetEntitlement: ((applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/game-sdk/store#get-skus
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
    GetSKUs: ((applicationid: string) => `/applications/${applicationid}/skus`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/game-sdk/store#consume-sku
     * 
     * Marks a given entitlement for the user as consumed, meaning it will no longer be
     * returned in an entitlements check. Ensure the user was granted whatever items the
     * entitlement was for before consuming it!
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
    ConsumeSKU: ((applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}/consume`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/game-sdk/store#delete-test-entitlement
     * 
     * Deletes a test entitlement for an application. You can only delete entitlements
     * that were "purchased" in developer test mode; these are entitlements of type ==
     * TestModePurchase. You cannot use this route to delete arbitrary entitlements that
     * users actually purchased.
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
    DeleteTestEntitlement: ((applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/game-sdk/store#create-purchase-discount
     * 
     * Creates a discount for the given user on their next purchase of the given SKU. You
     * should call this endpoint from your backend server just before calling StartPurchase
     * for the SKU you wish to discount. The user will then see a discounted price for
     * that SKU at time of payment. The discount is automatically consumed after successful
     * purchase or if the TTL expires.
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
    CreatePurchaseDiscount: ((skuid: string, userid: string) => `/store/skus/${skuid}/discounts/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/game-sdk/store#delete-purchase-discount
     * 
     * Deletes the currently active discount on the given SKU for the given user. You do
     * not need to call this after a user has made a discounted purchase; successful discounted
     * purchases will automatically remove the discount for that user for subsequent purchases.
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
    DeletePurchaseDiscount: ((skuid: string, userid: string) => `/store/skus/${skuid}/discounts/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#get-global-application-commands
     * 
     * Fetch all of the global commands for your application. Returns an array of ApplicationCommand
     * objects.
     */
    GetGlobalApplicationCommands: ((applicationid: string) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command
     * 
     * Create a new global command. New global commands will be available in all guilds
     * after 1 hour. Returns 201 and an ApplicationCommand object.
     * 
     * Creating a command with the same name as an existing command for your application
     * will overwrite the old command.
     */
    CreateGlobalApplicationCommand: ((applicationid: string) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#get-global-application-command
     * 
     * Fetch a global command for your application. Returns an ApplicationCommand object.
     */
    GetGlobalApplicationCommand: ((applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#edit-global-application-command
     * 
     * Edit a global command. Updates will be available in all guilds after 1 hour. Returns
     * 200 and an ApplicationCommand object.
     * 
     * All parameters for this endpoint are optional.
     */
    EditGlobalApplicationCommand: ((applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{
        /**
         * 1-32 lowercase character name matching ^[\w-]{1,32}$.
         */
        name: string;
        /**
         * 1-100 character description.
         */
        description: string;
        /**
         * The parameters for the command.
         */
        options: any;
        /**
         * Whether the command is enabled by default when the app is added to a guild.
         */
        default_permission: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#delete-global-application-command
     * 
     * Deletes a global command. Returns 204.
     */
    DeleteGlobalApplicationCommand: ((applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-commands
     * 
     * Fetch all of the guild commands for your application for a specific guild. Returns
     * an array of ApplicationCommand objects.
     */
    GetGuildApplicationCommands: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#bulk-overwrite-global-application-commands
     * 
     * Takes a list of application commands, overwriting existing commands that are registered
     * globally for this application. Updates will be available in all guilds after 1 hour.
     * Returns 200 and a list of ApplicationCommand objects. Commands that do not already
     * exist will count toward daily application command create limits.
     */
    BulkOverwriteGlobalApplicationCommands: ((applicationid: string) => `/applications/${applicationid}/commands`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#create-guild-application-command
     * 
     * Create a new guild command. New guild commands will be available in the guild immediately.
     * Returns 201 and an ApplicationCommand object.  If the command did not already exist,
     * it will count toward daily application command create limits.
     * 
     * Creating a command with the same name as an existing command for your application
     * will overwrite the old command.
     */
    CreateGuildApplicationCommand: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-command
     * 
     * Fetch a guild command for your application. Returns an ApplicationCommand object.
     */
    GetGuildApplicationCommand: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#edit-guild-application-command
     * 
     * Edit a guild command. Updates for guild commands will be available immediately.
     * Returns 200 and an ApplicationCommand object.
     * 
     * All parameters for this endpoint are optional.
     */
    EditGuildApplicationCommand: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{
        /**
         * 1-32 lowercase character name matching ^[\w-]{1,32}$.
         */
        name: string;
        /**
         * 1-100 character description.
         */
        description: string;
        /**
         * The parameters for the command.
         */
        options: any;
        /**
         * Whether the command is enabled by default when the app is added to a guild.
         */
        default_permission: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#delete-guild-application-command
     * 
     * Delete a guild command. Returns 204 on success.
     */
    DeleteGuildApplicationCommand: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#bulk-overwrite-guild-application-commands
     * 
     * Takes a list of application commands, overwriting existing commands for the guild.
     * Returns 200 and a list of ApplicationCommand objects.
     */
    BulkOverwriteGuildApplicationCommands: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#create-interaction-response
     * 
     * Create a response to an Interaction from the gateway. Takes an Interaction response.
     */
    CreateInteractionResponse: ((interactionid: string, interactiontoken: string) => `/interactions/${interactionid}/${interactiontoken}/callback`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#get-original-interaction-response
     * 
     * Returns the initial Interaction response. Functions the same as Get Webhook Message.
     */
    GetOriginalInteractionResponse: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#edit-original-interaction-response
     * 
     * Edits the initial Interaction response. Functions the same as Edit Webhook Message.
     */
    EditOriginalInteractionResponse: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#delete-original-interaction-response
     * 
     * Deletes the initial Interaction response. Returns 204 on success.
     */
    DeleteOriginalInteractionResponse: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#create-followup-message
     * 
     * Create a followup message for an Interaction. Functions the same as Execute Webhook,
     * but wait is always true, and flags can be set to 64 in the body to send an ephemeral
     * message. The thread_id query parameter is not required (and is furthermore ignored)
     * when using this endpoint for interaction followups.
     */
    CreateFollowupMessage: ((applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#edit-followup-message
     * 
     * Edits a followup message for an Interaction. Functions the same as Edit Webhook
     * Message.
     */
    EditFollowupMessage: ((applicationid: string, interactiontoken: string, messageid: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#delete-followup-message
     * 
     * Deletes a followup message for an Interaction. Returns 204 on success.
     */
    DeleteFollowupMessage: ((applicationid: string, interactiontoken: string, messageid: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-command-permissions
     * 
     * Fetches command permissions for all commands for your application in a guild. Returns
     * an array of GuildApplicationCommandPermissions objects.
     */
    GetGuildApplicationCommandPermissions: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#get-application-command-permissions
     * 
     * Fetches command permissions for a specific command for your application in a guild.
     * Returns a GuildApplicationCommandPermissions object.
     */
    GetApplicationCommandPermissions: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#edit-application-command-permissions
     * 
     * Edits command permissions for a specific command for your application in a guild.
     * 
     * This endpoint will overwrite existing permissions for the command in that guild
     * 
     * Deleting or renaming a command will permanently delete all permissions for that
     * command
     */
    EditApplicationCommandPermissions: ((applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`) as DeclareEndpoint<{
        /**
         * The permissions for the command in the guild.
         */
        permissions: any[];
    }, {}>,
    /**
     * https://discord.com/developers/docs/interactions/slash-commands#batch-edit-application-command-permissions
     * 
     * Batch edits permissions for all commands in a guild. Takes an array of partial GuildApplicationCommandPermissions
     * objects including id and permissions.
     * 
     * This endpoint will overwrite all existing permissions for all commands in a guild
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
    BatchEditApplicationCommandPermissions: ((applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
     * 
     * Returns an audit log object for the guild. Requires the 'VIEWAUDITLOG' permission.
     */
    GetGuildAuditLog: ((guildid: string) => `/guilds/${guildid}/audit-logs`) as DeclareEndpoint<{}, {
        /**
         * Filter the log for actions made by a user.
         */
        user_id: Snowflake;
        /**
         * The type of audit log event.
         */
        action_type: Integer;
        /**
         * Filter the log before a certain entry id.
         */
        before: Snowflake;
        /**
         * How many entries are returned (default 50, minimum 1, maximum 100).
         */
        limit: Integer;
    }>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel
     * 
     * Get a channel by ID. Returns a channel object.  If the channel is a thread, a thread
     * member object is included in the returned result.
     */
    GetChannel: ((channelid: string) => `/channels/${channelid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#modify-channel
     * 
     * Update a channel's settings. Returns a channel on success, and a 400 BAD REQUEST
     * on invalid parameters. All JSON parameters are optional.
     */
    ModifyChannel: ((channelid: string) => `/channels/${channelid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete/close-channel
     * 
     * Delete a channel, or close a private message. Requires the MANAGECHANNELS permission
     * for the guild, or MANAGETHREADS if the channel is a thread. Deleting a category
     * does not delete its child channels; they will have their parent_id removed and a
     * Channel Update Gateway event will fire for each of them. Returns a channel object
     * on success. Fires a Channel Delete Gateway event (or Thread Delete if the channel
     * was a thread).
     * 
     * Deleting a guild channel cannot be undone. Use this with caution, as it is impossible
     * to undo this action when performed on a guild channel. In contrast, when used with
     * a private message, it is possible to undo the action by opening a private message
     * with the recipient again.
     * 
     * For Community guilds, the Rules or Guidelines channel and the Community Updates
     * channel cannot be deleted.
     */
    DeleteChannel: ((channelid: string) => `/channels/${channelid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel-messages
     * 
     * Returns the messages for a channel. If operating on a guild channel, this endpoint
     * requires the VIEWCHANNEL permission to be present on the current user. If the current
     * user is missing the 'READMESSAGE_HISTORY' permission in the channel then this will
     * return no messages (since they cannot read the message history). Returns an array
     * of message objects on success.
     * 
     * The before, after, and around keys are mutually exclusive, only one may be passed
     * at a time.
     */
    GetChannelMessages: ((channelid: string) => `/channels/${channelid}/messages`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel-message
     * 
     * Returns a specific message in the channel. If operating on a guild channel, this
     * endpoint requires the 'READMESSAGEHISTORY' permission to be present on the current
     * user. Returns a message object on success.
     */
    GetChannelMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#create-message
     * 
     * Post a message to a guild text or DM channel. Returns a message object. Fires a
     * Message Create Gateway event. See message formatting for more information on how
     * to properly format messages.
     * 
     * Before using this endpoint, you must connect to and identify with a gateway at least
     * once.
     * 
     * Discord may strip certain characters from message content, like invalid unicode
     * characters or characters which cause unexpected message formatting. If you are passing
     * user-generated strings into message content, consider sanitizing the data to prevent
     * unexpected behavior and utilizing allowed_mentions to prevent unexpected mentions.
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
    CreateMessage: ((channelid: string) => `/channels/${channelid}/messages`) as DeclareEndpoint<{
        /**
         * The message contents (up to 2000 characters).
         */
        content: string;
        /**
         * True if this is a TTS message.
         */
        tts: any;
        /**
         * The contents of the file being sent.
         */
        file: any;
        /**
         * Embedded rich content.
         */
        embed: any;
        /**
         * JSON encoded body of non-file params.
         */
        payload_json: string;
        /**
         * Allowed mentions for the message.
         */
        allowed_mentions: any;
        /**
         * Include to make your message a reply.
         */
        message_reference: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#crosspost-message
     * 
     * Crosspost a message in a News Channel to following channels. This endpoint requires
     * the 'SENDMESSAGES' permission, if the current user sent the message, or additionally
     * the 'MANAGEMESSAGES' permission, for all other messages, to be present for the current
     * user.
     * 
     * Returns a message object.
     */
    CrosspostMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/crosspost`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#create-reaction
     * 
     * Create a reaction for the message. This endpoint requires the 'READMESSAGEHISTORY'
     * permission to be present on the current user. Additionally, if nobody else has reacted
     * to the message using this emoji, this endpoint requires the 'ADD_REACTIONS' permission
     * to be present on the current user. Returns a 204 empty response on success. The
     * emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To
     * use custom emoji, you must encode it in the format name:id with the emoji name and
     * emoji id.
     */
    CreateReaction: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-own-reaction
     * 
     * Delete a reaction the current user has made for the message. Returns a 204 empty
     * response on success. The emoji must be URL Encoded or the request will fail with
     * 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id
     * with the emoji name and emoji id.
     */
    DeleteOwnReaction: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-user-reaction
     * 
     * Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES' permission
     * to be present on the current user. Returns a 204 empty response on success. The
     * emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To
     * use custom emoji, you must encode it in the format name:id with the emoji name and
     * emoji id.
     */
    DeleteUserReaction: ((channelid: string, messageid: string, emoji: string, userid: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-reactions
     * 
     * Get a list of users that reacted with this emoji. Returns an array of user objects
     * on success. The emoji must be URL Encoded or the request will fail with 10014: Unknown
     * Emoji. To use custom emoji, you must encode it in the format name:id with the emoji
     * name and emoji id.
     */
    GetReactions: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-all-reactions
     * 
     * Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES'
     * permission to be present on the current user. Fires a Message Reaction Remove All
     * Gateway event.
     */
    DeleteAllReactions: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/reactions`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji
     * 
     * Deletes all the reactions for a given emoji on a message. This endpoint requires
     * the MANAGE_MESSAGES permission to be present on the current user. Fires a Message
     * Reaction Remove Emoji Gateway event. The emoji must be URL Encoded or the request
     * will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in
     * the format name:id with the emoji name and emoji id.
     */
    DeleteAllReactionsforEmoji: ((channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#edit-message
     * 
     * Edit a previously sent message. The fields content, embed, and flags can be edited
     * by the original message author. Other users can only edit flags and only if they
     * have the MANAGE_MESSAGES permission in the corresponding channel. When specifying
     * flags, ensure to include all previously set flags/bits in addition to ones that
     * you are modifying. Only flags documented in the table below may be modified by users
     * (unsupported flag changes are currently ignored without error).
     * 
     * When the content field is edited, the mentions array in the message object will
     * be reconstructed from scratch based on the new content. The allowedmentions field
     * of the edit request controls how this happens. If there is no explicit allowedmentions
     * in the edit request, the content will be parsed with default allowances, that is,
     * without regard to whether or not an allowed_mentions was present in the request
     * that originally created the message.
     * 
     * Returns a message object. Fires a Message Update Gateway event.
     * 
     * For a file attachment, the Content-Disposition subpart header MUST contain a filename
     * parameter.
     * 
     * This endpoint supports both application/json and multipart/form-data bodies. When
     * uploading files the multipart/form-data content type must be used. Note that in
     * multipart form data, the embed, allowedmentions, and attachments fields cannot be
     * used. You can pass a stringified JSON body as a form value as payloadjson instead.
     * If you supply a payload_json form value, all fields except for file fields will
     * be ignored in the form data.
     * 
     * All parameters to this endpoint are optional and nullable.
     */
    EditMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{
        /**
         * The message contents (up to 2000 characters).
         */
        content: string;
        /**
         * Embedded rich content.
         */
        embed: any;
        /**
         * Edit the flags of a message (only SUPPRESS_EMBEDS can currently be set/unset).
         */
        flags: Integer;
        /**
         * The contents of the file being sent/edited.
         */
        file: any;
        /**
         * JSON encoded body of non-file params (multipart/form-data only).
         */
        payload_json: string;
        /**
         * Allowed mentions for the message.
         */
        allowed_mentions: any;
        /**
         * Attached files to keep.
         */
        attachments: any[];
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-message
     * 
     * Delete a message. If operating on a guild channel and trying to delete a message
     * that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES
     * permission. Returns a 204 empty response on success. Fires a Message Delete Gateway
     * event.
     */
    DeleteMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#bulk-delete-messages
     * 
     * Delete multiple messages in a single request. This endpoint can only be used on
     * guild channels and requires the MANAGE_MESSAGES permission. Returns a 204 empty
     * response on success. Fires a Message Delete Bulk Gateway event.
     * 
     * Any message IDs given that do not exist or are invalid will count towards the minimum
     * and maximum message count (currently 2 and 100 respectively).
     * 
     * This endpoint will not delete messages older than 2 weeks, and will fail with a
     * 400 BAD REQUEST if any message provided is older than that or if any duplicate message
     * IDs are provided.
     */
    BulkDeleteMessages: ((channelid: string) => `/channels/${channelid}/messages/bulk-delete`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#edit-channel-permissions
     * 
     * Edit the channel permission overwrites for a user or role in a channel. Only usable
     * for guild channels. Requires the MANAGEROLES permission. Only permissions your bot
     * has in the guild or channel can be allowed/denied (unless your bot has a MANAGEROLES
     * overwrite in the channel). Returns a 204 empty response on success. For more information
     * about permissions, see permissions.
     */
    EditChannelPermissions: ((channelid: string, overwriteid: string) => `/channels/${channelid}/permissions/${overwriteid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-channel-invites
     * 
     * Returns a list of invite objects (with invite metadata) for the channel. Only usable
     * for guild channels. Requires the MANAGE_CHANNELS permission.
     */
    GetChannelInvites: ((channelid: string) => `/channels/${channelid}/invites`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#create-channel-invite
     * 
     * Create a new invite object for the channel. Only usable for guild channels. Requires
     * the CREATEINSTANTINVITE permission. All JSON parameters for this route are optional,
     * however the request body is not. If you are not sending any fields, you still have
     * to send an empty JSON object ({}). Returns an invite object. Fires an Invite Create
     * Gateway event.
     */
    CreateChannelInvite: ((channelid: string) => `/channels/${channelid}/invites`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#delete-channel-permission
     * 
     * Delete a channel permission overwrite for a user or role in a channel. Only usable
     * for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response
     * on success. For more information about permissions, see permissions
     */
    DeleteChannelPermission: ((channelid: string, overwriteid: string) => `/channels/${channelid}/permissions/${overwriteid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#follow-news-channel
     * 
     * Follow a News Channel to send messages to a target channel. Requires the MANAGE_WEBHOOKS
     * permission in the target channel. Returns a followed channel object.
     */
    FollowNewsChannel: ((channelid: string) => `/channels/${channelid}/followers`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
     * 
     * Post a typing indicator for the specified channel. Generally bots should not implement
     * this route. However, if a bot is responding to a command and expects the computation
     * to take a few seconds, this endpoint may be called to let the user know that the
     * bot is processing their message. Returns a 204 empty response on success. Fires
     * a Typing Start Gateway event.
     */
    TriggerTypingIndicator: ((channelid: string) => `/channels/${channelid}/typing`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#get-pinned-messages
     * 
     * Returns all pinned messages in the channel as an array of message objects.
     */
    GetPinnedMessages: ((channelid: string) => `/channels/${channelid}/pins`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#pin-message
     * 
     * Pin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204
     * empty response on success.
     * 
     * The max pinned messages is 50.
     */
    PinMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/pins/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#unpin-message
     * 
     * Unpin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a
     * 204 empty response on success.
     */
    UnpinMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/pins/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
     * 
     * Adds a recipient to a Group DM using their access token.
     */
    GroupDMAddRecipient: ((channelid: string, userid: string) => `/channels/${channelid}/recipients/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient
     * 
     * Removes a recipient from a Group DM.
     */
    GroupDMRemoveRecipient: ((channelid: string, userid: string) => `/channels/${channelid}/recipients/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#start-thread-with-message
     * 
     * Creates a new thread from an existing message. Returns a channel on success, and
     * a 400 BAD REQUEST on invalid parameters. Fires a Thread Create Gateway event.
     * 
     * When called on a GUILDTEXT channel, creates a GUILDPUBLICTHREAD. When called on
     * a GUILDNEWS channel, creates a GUILDNEWSTHREAD. The id of the created thread will
     * be the same as the id of the message, and as such a message can only have a single
     * thread created from it.
     */
    StartThreadwithMessage: ((channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/threads`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#start-thread-without-message
     * 
     * Creates a new thread that is not connected to an existing message. The created thread
     * is always a GUILDPRIVATETHREAD. Returns a channel on success, and a 400 BAD REQUEST
     * on invalid parameters. Fires a Thread Create Gateway event.
     */
    StartThreadwithoutMessage: ((channelid: string) => `/channels/${channelid}/threads`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#join-thread
     * 
     * Adds the current user to a thread. Also requires the thread is not archived. Returns
     * a 204 empty response on success. Fires a Thread Members Update Gateway event.
     */
    JoinThread: ((channelid: string) => `/channels/${channelid}/thread-members/@me`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#add-thread-member
     * 
     * Adds another member to a thread. Requires the ability to send messages in the thread.
     * Also requires the thread is not archived. Returns a 204 empty response on success.
     * Fires a Thread Members Update Gateway event.
     */
    AddThreadMember: ((channelid: string, userid: string) => `/channels/${channelid}/thread-members/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#leave-thread
     * 
     * Removes the current user from a thread. Also requires the thread is not archived.
     * Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
     */
    LeaveThread: ((channelid: string) => `/channels/${channelid}/thread-members/@me`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#remove-thread-member
     * 
     * Removes another member from a thread. Requires the MANAGE_THREADS permission or
     * that you are the creator of the thread. Also requires the thread is not archived.
     * Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
     */
    RemoveThreadMember: ((channelid: string, userid: string) => `/channels/${channelid}/thread-members/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-thread-members
     * 
     * Returns array of thread members objects that are members of the thread.
     * 
     * This endpoint is restricted according to whether the GUILD_MEMBERS Privileged Intent
     * is enabled for your application.
     */
    ListThreadMembers: ((channelid: string) => `/channels/${channelid}/thread-members`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-active-threads
     * 
     * Returns all active threads in the channel, including public and private threads.
     * Threads are ordered by their id, in descending order. Requires the READMESSAGEHISTORY
     * permission.
     */
    ListActiveThreads: ((channelid: string) => `/channels/${channelid}/threads/active`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-public-archived-threads
     * 
     * Returns archived threads in the channel that are public. When called on a GUILDTEXT
     * channel, returns threads of type GUILDPUBLICTHREAD. When called on a GUILDNEWS channel
     * returns threads of type GUILDNEWSTHREAD. Threads are ordered by archivetimestamp,
     * in descending order. Requires the READMESSAGE_HISTORY permission.
     */
    ListPublicArchivedThreads: ((channelid: string) => `/channels/${channelid}/threads/archived/public`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-private-archived-threads
     * 
     * Returns archived threads in the channel that are of type GUILDPRIVATETHREAD. Threads
     * are ordered by archivetimestamp, in descending order. Requires both the READMESSAGEHISTORY
     * and MANAGETHREADS permissions.
     */
    ListPrivateArchivedThreads: ((channelid: string) => `/channels/${channelid}/threads/archived/private`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads
     * 
     * Returns archived threads in the channel that are of type GUILDPRIVATETHREAD, and
     * the user has joined. Threads are ordered by their id, in descending order. Requires
     * the READMESSAGEHISTORY permission.
     */
    ListJoinedPrivateArchivedThreads: ((channelid: string) => `/channels/${channelid}/users/@me/threads/archived/private`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/emoji#list-guild-emojis
     * 
     * Returns a list of emoji objects for the given guild.
     */
    ListGuildEmojis: ((guildid: string) => `/guilds/${guildid}/emojis`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/emoji#get-guild-emoji
     * 
     * Returns an emoji object for the given guild and emoji IDs.
     */
    GetGuildEmoji: ((guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/emoji#create-guild-emoji
     * 
     * Create a new emoji for the guild. Requires the MANAGE_EMOJIS permission. Returns
     * the new emoji object on success. Fires a Guild Emojis Update Gateway event.
     * 
     * Emojis and animated emojis have a maximum file size of 256kb. Attempting to upload
     * an emoji larger than this limit will fail and return 400 Bad Request and an error
     * message, but not a JSON status code.
     */
    CreateGuildEmoji: ((guildid: string) => `/guilds/${guildid}/emojis`) as DeclareEndpoint<{
        /**
         * Name of the emoji.
         */
        name: string;
        /**
         * The 128x128 emoji image.
         */
        image: any;
        /**
         * Roles allowed to use this emoji.
         */
        roles: any[];
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
     * 
     * Modify the given emoji. Requires the MANAGE_EMOJIS permission. Returns the updated
     * emoji object on success. Fires a Guild Emojis Update Gateway event.
     * 
     * All parameters to this endpoint are optional.
     */
    ModifyGuildEmoji: ((guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{
        /**
         * Name of the emoji.
         */
        name: string;
        /**
         * Roles allowed to use this emoji.
         */
        roles: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/emoji#delete-guild-emoji
     * 
     * Delete the given emoji. Requires the MANAGE_EMOJIS permission. Returns 204 No Content
     * on success. Fires a Guild Emojis Update Gateway event.
     */
    DeleteGuildEmoji: ((guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild
     * 
     * Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway
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
    CreateGuild: (() => `/guilds`) as DeclareEndpoint<{
        /**
         * Name of the guild (2-100 characters).
         */
        name: string;
        /**
         * Voice region id.
         */
        region?: string;
        /**
         * Base64 128x128 image for the guild icon.
         */
        icon?: any;
        /**
         * Verification level.
         */
        verification_level?: Integer;
        /**
         * Default message notification level.
         */
        default_message_notifications?: Integer;
        /**
         * Explicit content filter level.
         */
        explicit_content_filter?: Integer;
        /**
         * New guild roles.
         */
        roles?: any[];
        /**
         * New guild's channels.
         */
        channels?: Partial<any>[];
        /**
         * Id for afk channel.
         */
        afk_channel_id?: Snowflake;
        /**
         * Afk timeout in seconds.
         */
        afk_timeout?: Integer;
        /**
         * The id of the channel where guild notices such as welcome messages and boost events
         * are posted.
         */
        system_channel_id?: Snowflake;
        /**
         * System channel flags.
         */
        system_channel_flags?: Integer;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild
     * 
     * Returns the guild object for the given id. If withcounts is set to true, this endpoint
     * will also return approximatemembercount and approximatepresence_count for the guild.
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
    GetGuild: ((guildid: string) => `/guilds/${guildid}`) as DeclareEndpoint<{}, {
        /**
         * When true, will return approximate member and presence counts for the guild.
         */
        with_counts?: any;
    }>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-preview
     * 
     * Returns the guild preview object for the given id. If the user is not in the guild,
     * then the guild must be Discoverable.
     */
    GetGuildPreview: ((guildid: string) => `/guilds/${guildid}/preview`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild
     * 
     * Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated
     * guild object on success. Fires a Guild Update Gateway event.
     * 
     * All parameters to this endpoint are optional
     */
    ModifyGuild: ((guildid: string) => `/guilds/${guildid}`) as DeclareEndpoint<{
        /**
         * Guild name.
         */
        name: string;
        /**
         * Guild voice region id.
         */
        region: any;
        /**
         * Verification level.
         */
        verification_level: any;
        /**
         * Default message notification level.
         */
        default_message_notifications: any;
        /**
         * Explicit content filter level.
         */
        explicit_content_filter: any;
        /**
         * Id for afk channel.
         */
        afk_channel_id: any;
        /**
         * Afk timeout in seconds.
         */
        afk_timeout: Integer;
        /**
         * Base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when
         * the server has the ANIMATED_ICON feature).
         */
        icon: any;
        /**
         * User id to transfer guild ownership to (must be owner).
         */
        owner_id: Snowflake;
        /**
         * Base64 16:9 png/jpeg image for the guild splash (when the server has the INVITE_SPLASH
         * feature).
         */
        splash: any;
        /**
         * Base64 16:9 png/jpeg image for the guild discovery splash (when the server has the
         * DISCOVERABLE feature).
         */
        discovery_splash: any;
        /**
         * Base64 16:9 png/jpeg image for the guild banner (when the server has the BANNER
         * feature).
         */
        banner: any;
        /**
         * The id of the channel where guild notices such as welcome messages and boost events
         * are posted.
         */
        system_channel_id: any;
        /**
         * System channel flags.
         */
        system_channel_flags: Integer;
        /**
         * The id of the channel where Community guilds display rules and/or guidelines.
         */
        rules_channel_id: any;
        /**
         * The id of the channel where admins and moderators of Community guilds receive notices
         * from Discord.
         */
        public_updates_channel_id: any;
        /**
         * The preferred locale of a Community guild used in server discovery and notices from
         * Discord; defaults to "en-US".
         */
        preferred_locale: any;
        /**
         * Enabled guild features.
         */
        features: any[];
        /**
         * The description for the guild, if the guild is discoverable.
         */
        description: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#delete-guild
     * 
     * Delete a guild permanently. User must be owner. Returns 204 No Content on success.
     * Fires a Guild Delete Gateway event.
     */
    DeleteGuild: ((guildid: string) => `/guilds/${guildid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-channels
     * 
     * Returns a list of guild channel objects. Does not include threads.
     */
    GetGuildChannels: ((guildid: string) => `/guilds/${guildid}/channels`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild-channel
     * 
     * Create a new channel object for the guild. Requires the MANAGECHANNELS permission.
     * If setting permission overwrites, only permissions your bot has in the guild can
     * be allowed/denied. Setting MANAGEROLES permission in channels is only possible for
     * guild administrators. Returns the new channel object on success. Fires a Channel
     * Create Gateway event.
     * 
     * All parameters to this endpoint are optional excluding 'name'
     */
    CreateGuildChannel: ((guildid: string) => `/guilds/${guildid}/channels`) as DeclareEndpoint<{
        /**
         * Channel name (2-100 characters).
         */
        name: string;
        /**
         * The type of channel.
         */
        type: Integer;
        /**
         * Channel topic (0-1024 characters).
         */
        topic: string;
        /**
         * The bitrate (in bits) of the voice channel (voice only).
         */
        bitrate: Integer;
        /**
         * The user limit of the voice channel (voice only).
         */
        user_limit: Integer;
        /**
         * Amount of seconds a user has to wait before sending another message (0-21600); bots,
         * as well as users with the permission managemessages or managechannel, are unaffected.
         */
        rate_limit_per_user: Integer;
        /**
         * Sorting position of the channel.
         */
        position: Integer;
        /**
         * The channel's permission overwrites.
         */
        permission_overwrites: any[];
        /**
         * Id of the parent category for a channel.
         */
        parent_id: Snowflake;
        /**
         * Whether the channel is nsfw.
         */
        nsfw: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
     * 
     * Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS
     * permission. Returns a 204 empty response on success. Fires multiple Channel Update
     * Gateway events.
     * 
     * Only channels to be modified are required, with the minimum being a swap between
     * at least two channels.
     */
    ModifyGuildChannelPositions: ((guildid: string) => `/guilds/${guildid}/channels`) as DeclareEndpoint<{
        /**
         * Channel id.
         */
        id: Snowflake;
        /**
         * Sorting position of the channel.
         */
        position: any;
        /**
         * Syncs the permission overwrites with the new parent, if moving to a new category.
         */
        lock_permissions: any;
        /**
         * The new parent ID for the channel that is moved.
         */
        parent_id: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-member
     * 
     * Returns a guild member object for the specified user.
     */
    GetGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#list-guild-members
     * 
     * Returns a list of guild member objects that are members of the guild.
     * 
     * This endpoint is restricted according to whether the GUILD_MEMBERS Privileged Intent
     * is enabled for your application.
     * 
     * All parameters to this endpoint are optional
     */
    ListGuildMembers: ((guildid: string) => `/guilds/${guildid}/members`) as DeclareEndpoint<{}, {
        /**
         * Max number of members to return (1-1000).
         */
        limit: Integer;
        /**
         * The highest user id in the previous page.
         */
        after: Snowflake;
    }>,
    /**
     * https://discord.com/developers/docs/resources/guild#search-guild-members
     * 
     * Returns a list of guild member objects whose username or nickname starts with a
     * provided string.
     * 
     * All parameters to this endpoint except for query are optional
     */
    SearchGuildMembers: ((guildid: string) => `/guilds/${guildid}/members/search`) as DeclareEndpoint<{}, {
        /**
         * Query string to match username(s) and nickname(s) against.
         */
        query: string;
        /**
         * Max number of members to return (1-1000).
         */
        limit: Integer;
    }>,
    /**
     * https://discord.com/developers/docs/resources/guild#add-guild-member
     * 
     * Adds a user to the guild, provided you have a valid oauth2 access token for the
     * user with the guilds.join scope. Returns a 201 Created with the guild member as
     * the body, or 204 No Content if the user is already a member of the guild. Fires
     * a Guild Member Add Gateway event.
     * 
     * For guilds with Membership Screening enabled, this endpoint will default to adding
     * new members as pending in the guild member object. Members that are pending will
     * have to complete membership screening before they become full members that can talk.
     * 
     * All parameters to this endpoint except for access_token are optional.
     * 
     * The Authorization header must be a Bot token (belonging to the same application
     * used for authorization), and the bot must be a member of the guild with CREATEINSTANTINVITE
     * permission.
     */
    AddGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{
        /**
         * An oauth2 access token granted with the guilds.join to the bot's application for
         * the user you want to add to the guild.
         */
        access_token: string;
        /**
         * Value to set users nickname to
         * 
         * Requires MANAGE_NICKNAMES.
         */
        nick: string;
        /**
         * Array of role ids the member is assigned
         * 
         * Requires MANAGE_ROLES.
         */
        roles: any[];
        /**
         * Whether the user is muted in voice channels
         * 
         * Requires MUTE_MEMBERS.
         */
        mute: any;
        /**
         * Whether the user is deafened in voice channels
         * 
         * Requires DEAFEN_MEMBERS.
         */
        deaf: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-member
     * 
     * Modify attributes of a guild member. Returns a 200 OK with the guild member as the
     * body. Fires a Guild Member Update Gateway event. If the channel_id is set to null,
     * this will force the target user to be disconnected from voice.
     * 
     * All parameters to this endpoint are optional and nullable. When moving members to
     * channels, the API user must have permissions to both connect to the channel and
     * have the MOVE_MEMBERS permission.
     */
    ModifyGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{
        /**
         * Value to set users nickname to
         * 
         * Requires MANAGE_NICKNAMES.
         */
        nick: string;
        /**
         * Array of role ids the member is assigned
         * 
         * Requires MANAGE_ROLES.
         */
        roles: any[];
        /**
         * Whether the user is muted in voice channels. Will throw a 400 if the user is not
         * in a voice channel
         * 
         * Requires MUTE_MEMBERS.
         */
        mute: any;
        /**
         * Whether the user is deafened in voice channels. Will throw a 400 if the user is
         * not in a voice channel
         * 
         * Requires DEAFEN_MEMBERS.
         */
        deaf: any;
        /**
         * Id of channel to move user to (if they are connected to voice)
         * 
         * Requires MOVE_MEMBERS.
         */
        channel_id: Snowflake;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-current-user-nick
     * 
     * Modifies the nickname of the current user in a guild. Returns a 200 with the nickname
     * on success. Fires a Guild Member Update Gateway event.
     */
    ModifyCurrentUserNick: ((guildid: string) => `/guilds/${guildid}/members/@me/nick`) as DeclareEndpoint<{
        /**
         * Value to set users nickname to
         * 
         * Requires CHANGE_NICKNAME.
         */
        nick?: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#add-guild-member-role
     * 
     * Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204
     * empty response on success. Fires a Guild Member Update Gateway event.
     */
    AddGuildMemberRole: ((guildid: string, userid: string, roleid: string) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#remove-guild-member-role
     * 
     * Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns
     * a 204 empty response on success. Fires a Guild Member Update Gateway event.
     */
    RemoveGuildMemberRole: ((guildid: string, userid: string, roleid: string) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#remove-guild-member
     * 
     * Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty
     * response on success. Fires a Guild Member Remove Gateway event.
     */
    RemoveGuildMember: ((guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-bans
     * 
     * Returns a list of ban objects for the users banned from this guild. Requires the
     * BAN_MEMBERS permission.
     */
    GetGuildBans: ((guildid: string) => `/guilds/${guildid}/bans`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-ban
     * 
     * Returns a ban object for the given user or a 404 not found if the ban cannot be
     * found. Requires the BAN_MEMBERS permission.
     */
    GetGuildBan: ((guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild-ban
     * 
     * Create a guild ban, and optionally delete previous messages sent by the banned user.
     * Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires
     * a Guild Ban Add Gateway event.
     * 
     * Supplying a reason in the JSON body will override X-Audit-Log-Reason header if both
     * are provided.
     */
    CreateGuildBan: ((guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{
        /**
         * Number of days to delete messages for (0-7).
         */
        delete_message_days?: Integer;
        /**
         * Reason for the ban.
         */
        reason?: string;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#remove-guild-ban
     * 
     * Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty
     * response on success. Fires a Guild Ban Remove Gateway event.
     */
    RemoveGuildBan: ((guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-roles
     * 
     * Returns a list of role objects for the guild.
     */
    GetGuildRoles: ((guildid: string) => `/guilds/${guildid}/roles`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#create-guild-role
     * 
     * Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the
     * new role object on success. Fires a Guild Role Create Gateway event. All JSON params
     * are optional.
     */
    CreateGuildRole: ((guildid: string) => `/guilds/${guildid}/roles`) as DeclareEndpoint<{
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
        color: Integer;
        /**
         * Whether the role should be displayed separately in the sidebar.
         */
        hoist: any;
        /**
         * Whether the role should be mentionable.
         */
        mentionable: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
     * 
     * Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES
     * permission. Returns a list of all of the guild's role objects on success. Fires
     * multiple Guild Role Update Gateway events.
     */
    ModifyGuildRolePositions: ((guildid: string) => `/guilds/${guildid}/roles`) as DeclareEndpoint<{
        /**
         * Role.
         */
        id: Snowflake;
        /**
         * Sorting position of the role.
         */
        position?: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-role
     * 
     * Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role
     * on success. Fires a Guild Role Update Gateway event.
     * 
     * All parameters to this endpoint are optional and nullable.
     */
    ModifyGuildRole: ((guildid: string, roleid: string) => `/guilds/${guildid}/roles/${roleid}`) as DeclareEndpoint<{
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
        color: Integer;
        /**
         * Whether the role should be displayed separately in the sidebar.
         */
        hoist: any;
        /**
         * Whether the role should be mentionable.
         */
        mentionable: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#delete-guild-role
     * 
     * Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response
     * on success. Fires a Guild Role Delete Gateway event.
     */
    DeleteGuildRole: ((guildid: string, roleid: string) => `/guilds/${guildid}/roles/${roleid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-prune-count
     * 
     * Returns an object with one 'pruned' key indicating the number of members that would
     * be removed in a prune operation. Requires the KICK_MEMBERS permission.
     * 
     * By default, prune will not remove users with roles. You can optionally include specific
     * roles in your prune by providing the include_roles parameter. Any inactive user
     * that has a subset of the provided role(s) will be counted in the prune and users
     * with additional roles will not.
     */
    GetGuildPruneCount: ((guildid: string) => `/guilds/${guildid}/prune`) as DeclareEndpoint<{}, {
        /**
         * Number of days to count prune for (1-30).
         */
        days: Integer;
        /**
         * Role(s) to include.
         */
        include_roles: any;
    }>,
    /**
     * https://discord.com/developers/docs/resources/guild#begin-guild-prune
     * 
     * Begin a prune operation. Requires the KICKMEMBERS permission. Returns an object
     * with one 'pruned' key indicating the number of members that were removed in the
     * prune operation. For large guilds it's recommended to set the computeprune_count
     * option to false, forcing 'pruned' to null. Fires multiple Guild Member Remove Gateway
     * events.
     * 
     * By default, prune will not remove users with roles. You can optionally include specific
     * roles in your prune by providing the include_roles parameter. Any inactive user
     * that has a subset of the provided role(s) will be included in the prune and users
     * with additional roles will not.
     * 
     * Supplying a reason in the JSON body will override X-Audit-Log-Reason header if both
     * are provided.
     */
    BeginGuildPrune: ((guildid: string) => `/guilds/${guildid}/prune`) as DeclareEndpoint<{
        /**
         * Number of days to prune (1-30).
         */
        days: Integer;
        /**
         * Whether 'pruned' is returned, discouraged for large guilds.
         */
        compute_prune_count: any;
        /**
         * Role(s) to include.
         */
        include_roles: any[];
        /**
         * Reason for the prune.
         */
        reason?: string;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
     * 
     * Returns a list of voice region objects for the guild. Unlike the similar /voice
     * route, this returns VIP servers when the guild is VIP-enabled.
     */
    GetGuildVoiceRegions: ((guildid: string) => `/guilds/${guildid}/regions`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-invites
     * 
     * Returns a list of invite objects (with invite metadata) for the guild. Requires
     * the MANAGE_GUILD permission.
     */
    GetGuildInvites: ((guildid: string) => `/guilds/${guildid}/invites`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-integrations
     * 
     * Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.
     */
    GetGuildIntegrations: ((guildid: string) => `/guilds/${guildid}/integrations`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#delete-guild-integration
     * 
     * Delete the attached integration object for the guild. Deletes any associated webhooks
     * and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission.
     * Returns a 204 empty response on success. Fires a Guild Integrations Update Gateway
     * event.
     */
    DeleteGuildIntegration: ((guildid: string, integrationid: string) => `/guilds/${guildid}/integrations/${integrationid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
     * 
     * Returns a guild widget object. Requires the MANAGE_GUILD permission.
     */
    GetGuildWidgetSettings: ((guildid: string) => `/guilds/${guildid}/widget`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-widget
     * 
     * Modify a guild widget object for the guild. All attributes may be passed in with
     * JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild
     * widget object.
     */
    ModifyGuildWidget: ((guildid: string) => `/guilds/${guildid}/widget`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-widget
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
    GetGuildWidget: ((guildid: string) => `/guilds/${guildid}/widget.json`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
     * 
     * Returns a partial invite object for guilds with that feature enabled. Requires the
     * MANAGE_GUILD permission. code will be null if a vanity url for the guild is not
     * set.
     * 
     * @example
     * ```json
     * {
     *   "code": "abc",
     *   "uses": 12
     * }
     * ```
     */
    GetGuildVanityURL: ((guildid: string) => `/guilds/${guildid}/vanity-url`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-widget-image
     * 
     * Returns a PNG image widget for the guild. Requires no permissions or authentication.
     * 
     * All parameters to this endpoint are optional.
     */
    GetGuildWidgetImage: ((guildid: string) => `/guilds/${guildid}/widget.png`) as DeclareEndpoint<{}, {
        /**
         * Style of the widget image returned (see below).
         */
        style: string;
    }>,
    /**
     * https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen
     * 
     * Returns the Welcome Screen object for the guild.
     */
    GetGuildWelcomeScreen: ((guildid: string) => `/guilds/${guildid}/welcome-screen`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen
     * 
     * Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns
     * the updated Welcome Screen object.
     * 
     * All parameters to this endpoint are optional and nullable
     */
    ModifyGuildWelcomeScreen: ((guildid: string) => `/guilds/${guildid}/welcome-screen`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#update-current-user-voice-state
     * 
     * Updates the current user's voice state.
     */
    UpdateCurrentUserVoiceState: ((guildid: string) => `/guilds/${guildid}/voice-states/@me`) as DeclareEndpoint<{
        /**
         * The id of the channel the user is currently in.
         */
        channel_id: Snowflake;
        /**
         * Toggles the user's suppress state.
         */
        suppress?: any;
        /**
         * Sets the user's request to speak.
         */
        request_to_speak_timestamp?: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild#update-user-voice-state
     * 
     * Updates another user's voice state.
     */
    UpdateUserVoiceState: ((guildid: string, userid: string) => `/guilds/${guildid}/voice-states/${userid}`) as DeclareEndpoint<{
        /**
         * The id of the channel the user is currently in.
         */
        channel_id: Snowflake;
        /**
         * Toggles the user's suppress state.
         */
        suppress?: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild-template#get-guild-template
     * 
     * Returns a guild template object for the given code.
     */
    GetGuildTemplate: ((templatecode: string) => `/guilds/templates/${templatecode}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template
     * 
     * Create a new guild based on a template. Returns a guild object on success. Fires
     * a Guild Create Gateway event.
     * 
     * This endpoint can be used only by bots in less than 10 guilds.
     */
    CreateGuildfromGuildTemplate: ((templatecode: string) => `/guilds/templates/${templatecode}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild-template#get-guild-templates
     * 
     * Returns an array of guild template objects. Requires the MANAGE_GUILD permission.
     */
    GetGuildTemplates: ((guildid: string) => `/guilds/${guildid}/templates`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild-template#create-guild-template
     * 
     * Creates a template for the guild. Requires the MANAGE_GUILD permission. Returns
     * the created guild template object on success.
     */
    CreateGuildTemplate: ((guildid: string) => `/guilds/${guildid}/templates`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild-template#sync-guild-template
     * 
     * Syncs the template to the guild's current state. Requires the MANAGE_GUILD permission.
     * Returns the guild template object on success.
     */
    SyncGuildTemplate: ((guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild-template#modify-guild-template
     * 
     * Modifies the template's metadata. Requires the MANAGE_GUILD permission. Returns
     * the guild template object on success.
     */
    ModifyGuildTemplate: ((guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/guild-template#delete-guild-template
     * 
     * Deletes the template. Requires the MANAGE_GUILD permission. Returns the deleted
     * guild template object on success.
     */
    DeleteGuildTemplate: ((guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/invite#get-invite
     * 
     * Returns an invite object for the given code.
     */
    GetInvite: ((invitecode: string) => `/invites/${invitecode}`) as DeclareEndpoint<{}, {
        /**
         * Whether the invite should contain approximate member counts.
         */
        with_counts?: any;
        /**
         * Whether the invite should contain the expiration date.
         */
        with_expiration?: any;
    }>,
    /**
     * https://discord.com/developers/docs/resources/invite#delete-invite
     * 
     * Delete an invite. Requires the MANAGECHANNELS permission on the channel this invite
     * belongs to, or MANAGEGUILD to remove any invite across the guild. Returns an invite
     * object on success. Fires a Invite Delete Gateway event.
     */
    DeleteInvite: ((invitecode: string) => `/invites/${invitecode}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/stage-instance#create-stage-instance
     * 
     * Creates a new Stage instance associated to a Stage channel.
     * 
     * Requires the user to be a moderator of the Stage channel.
     */
    CreateStageInstance: (() => `/stage-instances`) as DeclareEndpoint<{
        /**
         * The id of the Stage channel.
         */
        channel_id: Snowflake;
        /**
         * The topic of the Stage instance (1-120 characters).
         */
        topic: string;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/stage-instance#get-stage-instance
     * 
     * Gets the stage instance associated with the Stage channel, if it exists.
     */
    GetStageInstance: ((channelid: string) => `/stage-instances/${channelid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/stage-instance#update-stage-instance
     * 
     * Updates fields of an existing Stage instance.
     * 
     * Requires the user to be a moderator of the Stage channel.
     */
    UpdateStageInstance: ((channelid: string) => `/stage-instances/${channelid}`) as DeclareEndpoint<{
        /**
         * The topic of the Stage instance (1-120 characters).
         */
        topic: string;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance
     * 
     * Deletes the Stage instance.
     * 
     * Requires the user to be a moderator of the Stage channel.
     */
    DeleteStageInstance: ((channelid: string) => `/stage-instances/${channelid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/voice#list-voice-regions
     * 
     * Returns an array of voice region objects that can be used when creating servers.
     */
    ListVoiceRegions: (() => `/voice/regions`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#create-webhook
     * 
     * Create a new webhook. Requires the MANAGE_WEBHOOKS permission. Returns a webhook
     * object on success. Webhook names follow our naming restrictions that can be found
     * in our Usernames and Nicknames documentation, with the following additional stipulations:
     * 
     * Webhook names cannot be: 'clyde'
     */
    CreateWebhook: ((channelid: string) => `/channels/${channelid}/webhooks`) as DeclareEndpoint<{
        /**
         * Name of the webhook (1-80 characters).
         */
        name: string;
        /**
         * Image for the default webhook avatar.
         */
        avatar: any;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-channel-webhooks
     * 
     * Returns a list of channel webhook objects. Requires the MANAGE_WEBHOOKS permission.
     */
    GetChannelWebhooks: ((channelid: string) => `/channels/${channelid}/webhooks`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-guild-webhooks
     * 
     * Returns a list of guild webhook objects. Requires the MANAGE_WEBHOOKS permission.
     */
    GetGuildWebhooks: ((guildid: string) => `/guilds/${guildid}/webhooks`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-webhook
     * 
     * Returns the new webhook object for the given id.
     */
    GetWebhook: ((webhookid: string) => `/webhooks/${webhookid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-webhook-with-token
     * 
     * Same as above, except this call does not require authentication and returns no user
     * in the webhook object.
     */
    GetWebhookwithToken: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#modify-webhook
     * 
     * Modify a webhook. Requires the MANAGE_WEBHOOKS permission. Returns the updated webhook
     * object on success.
     * 
     * All parameters to this endpoint are optional
     */
    ModifyWebhook: ((webhookid: string) => `/webhooks/${webhookid}`) as DeclareEndpoint<{
        /**
         * The default name of the webhook.
         */
        name: string;
        /**
         * Image for the default webhook avatar.
         */
        avatar: any;
        /**
         * The new channel id this webhook should be moved to.
         */
        channel_id: Snowflake;
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token
     * 
     * Same as above, except this call does not require authentication, does not accept
     * a channel_id parameter in the body, and does not return a user in the webhook object.
     */
    ModifyWebhookwithToken: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#delete-webhook
     * 
     * Delete a webhook permanently. Requires the MANAGE_WEBHOOKS permission. Returns a
     * 204 NO CONTENT response on success.
     */
    DeleteWebhook: ((webhookid: string) => `/webhooks/${webhookid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token
     * 
     * Same as above, except this call does not require authentication.
     */
    DeleteWebhookwithToken: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#execute-webhook
     * 
     * Note that when sending a message, you must provide a value for at least one of content,
     * embeds, or file.
     * 
     * For a file attachment, the Content-Disposition subpart header MUST contain a filename
     * parameter.
     * 
     * This endpoint supports both application/json and multipart/form-data bodies. When
     * uploading files the multipart/form-data content type must be used. Note that in
     * multipart form data, the embed and allowedmentions fields cannot be used. You can
     * pass a stringified JSON body as a form value as payloadjson instead. If you supply
     * a payload_json form value, all fields except for file fields will be ignored in
     * the form data.
     */
    ExecuteWebhook: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`) as DeclareEndpoint<{
        /**
         * The message contents (up to 2000 characters).
         */
        content: string;
        /**
         * Override the default username of the webhook.
         */
        username: string;
        /**
         * Override the default avatar of the webhook.
         */
        avatar_url: string;
        /**
         * True if this is a TTS message.
         */
        tts: any;
        /**
         * The contents of the file being sent.
         */
        file: any;
        /**
         * Embedded rich content.
         */
        embeds: any[];
        /**
         * JSON encoded body of non-file params.
         */
        payload_json: string;
        /**
         * Allowed mentions for the message.
         */
        allowed_mentions: any;
    }, {
        /**
         * Waits for server confirmation of message send before response, and returns the created
         * message body (defaults to false; when false a message that is not saved does not
         * return an error).
         */
        wait: any;
        /**
         * Send a message to the specified thread within a webhook's channel. The thread will
         * automatically be unarchived.
         */
        thread_id: Snowflake;
    }>,
    /**
     * https://discord.com/developers/docs/resources/webhook#execute-slack-compatible-webhook
     */
    ExecuteSlackCompatibleWebhook: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}/slack`) as DeclareEndpoint<{}, {
        /**
         * Waits for server confirmation of message send before response (defaults to true;
         * when false a message that is not saved does not return an error).
         */
        wait: any;
    }>,
    /**
     * https://discord.com/developers/docs/resources/webhook#execute-github-compatible-webhook
     */
    ExecuteGitHubCompatibleWebhook: ((webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}/github`) as DeclareEndpoint<{}, {
        /**
         * Waits for server confirmation of message send before response (defaults to true;
         * when false a message that is not saved does not return an error).
         */
        wait: any;
    }>,
    /**
     * https://discord.com/developers/docs/resources/webhook#get-webhook-message
     * 
     * Returns a previously-sent webhook message from the same token. Returns a message
     * object on success.
     */
    GetWebhookMessage: ((webhookid: string, webhooktoken: string, messageid: string) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#edit-webhook-message
     * 
     * Edits a previously-sent webhook message from the same token. Returns a message object
     * on success.
     * 
     * When the content field is edited, the mentions array in the message object will
     * be reconstructed from scratch based on the new content. The allowedmentions field
     * of the edit request controls how this happens. If there is no explicit allowedmentions
     * in the edit request, the content will be parsed with default allowances, that is,
     * without regard to whether or not an allowed_mentions was present in the request
     * that originally created the message.
     * 
     * For a file attachment, the Content-Disposition subpart header MUST contain a filename
     * parameter.
     * 
     * This endpoint supports both application/json and multipart/form-data bodies. When
     * uploading files the multipart/form-data content type must be used. Note that in
     * multipart form data, the embed, allowedmentions, and attachments fields cannot be
     * used. You can pass a stringified JSON body as a form value as payloadjson instead.
     * If you supply a payload_json form value, all fields except for file fields will
     * be ignored in the form data.
     * 
     * All parameters to this endpoint are optional and nullable.
     */
    EditWebhookMessage: ((webhookid: string, webhooktoken: string, messageid: string) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<{
        /**
         * The message contents (up to 2000 characters).
         */
        content: string;
        /**
         * Embedded rich content.
         */
        embeds: any[];
        /**
         * The contents of the file being sent/edited.
         */
        file: any;
        /**
         * JSON encoded body of non-file params (multipart/form-data only).
         */
        payload_json: string;
        /**
         * Allowed mentions for the message.
         */
        allowed_mentions: any;
        /**
         * Attached files to keep.
         */
        attachments: any[];
    }, {}>,
    /**
     * https://discord.com/developers/docs/resources/webhook#delete-webhook-message
     * 
     * Deletes a message that was created by the webhook. Returns a 204 NO CONTENT response
     * on success.
     */
    DeleteWebhookMessage: ((webhookid: string, webhooktoken: string, messageid: string) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/topics/gateway#get-gateway
     * 
     * Returns an object with a single valid WSS URL, which the client can use for Connecting.
     * Clients should cache this value and only call this endpoint to retrieve a new URL
     * if they are unable to properly establish a connection using the cached version of
     * the URL.
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
    GetGateway: (() => `/gateway`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/topics/gateway#get-gateway-bot
     * 
     * Returns an object based on the information in Get Gateway, plus additional metadata
     * that can help during the operation of large or sharded bots. Unlike the Get Gateway,
     * this route should not be cached for extended periods of time as the value is not
     * guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.
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
    GetGatewayBot: (() => `/gateway/bot`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information
     * 
     * Returns the bot's application object without flags.
     */
    GetCurrentBotApplicationInformation: (() => `/oauth2/applications/@me`) as DeclareEndpoint<{}, {}>,
    /**
     * https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information
     * 
     * Returns info about the current authorization. Requires authentication with a bearer
     * token.
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
    GetCurrentAuthorizationInformation: (() => `/oauth2/@me`) as DeclareEndpoint<{}, {}>
}
