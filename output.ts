export const Endpoints = {
    /**
     * Gets entitlements for a given user. You can use this on your game backend to check
     * entitlements of an arbitrary user, or perhaps in an administrative panel for your
     * support team.
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
    GetEntitlements: (applicationid: string) => `/applications/${applicationid}/entitlements`,
    /**
     * Fetch an entitlement by its ID. This may be useful in confirming that a user has
     * a given entitlement that another call or the SDK says they do.
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
    GetEntitlement: (applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}`,
    /**
     * Get all SKUs for an application.
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
    GetSKUs: (applicationid: string) => `/applications/${applicationid}/skus`,
    /**
     * Marks a given entitlement for the user as consumed, meaning it will no longer be
     * returned in an entitlements check. Ensure the user was granted whatever items the
     * entitlement was for before consuming it!
     * @example
     * ```
     * curl -X POST https://discord.com/api/v6/applications/461618159171141643/entitlements/53908232506183999/consume \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns 204 No Content
     * ```
     */
    ConsumeSKU: (applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}/consume`,
    /**
     * Deletes a test entitlement for an application. You can only delete entitlements
     * that were "purchased" in developer test mode; these are entitlements of type ==
     * TestModePurchase. You cannot use this route to delete arbitrary entitlements that
     * users actually purchased.
     * @example
     * ```
     * curl -X DELETE https://discord.com/api/v6/applications/461618159171141643/entitlements/53908232506183999 \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns 204 No Content
     * ```
     */
    DeleteTestEntitlement: (applicationid: string, entitlementid: string) => `/applications/${applicationid}/entitlements/${entitlementid}`,
    /**
     * Creates a discount for the given user on their next purchase of the given SKU. You
     * should call this endpoint from your backend server just before calling StartPurchase
     * for the SKU you wish to discount. The user will then see a discounted price for
     * that SKU at time of payment. The discount is automatically consumed after successful
     * purchase or if the TTL expires.
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
    CreatePurchaseDiscount: (skuid: string, userid: string) => `/store/skus/${skuid}/discounts/${userid}`,
    /**
     * Deletes the currently active discount on the given SKU for the given user. You do
     * not need to call this after a user has made a discounted purchase; successful discounted
     * purchases will automatically remove the discount for that user for subsequent purchases.
     * @example
     * ```
     * curl -X DELETE https://discord.com/api/v6/store/skus/461618229171141643/discounts/53908232522183999 \
     * -H "Authorization: Bearer <token>" \
     * -H "Accept: application/json"
     * 
     * // Returns 204 No Content
     * ```
     */
    DeletePurchaseDiscount: (skuid: string, userid: string) => `/store/skus/${skuid}/discounts/${userid}`,
    /**
     * Fetch all of the global commands for your application. Returns an array of ApplicationCommand
     * objects.
     */
    GetGlobalApplicationCommands: (applicationid: string) => `/applications/${applicationid}/commands`,
    /**
     * Create a new global command. New global commands will be available in all guilds
     * after 1 hour. Returns 201 and an ApplicationCommand object.
     */
    CreateGlobalApplicationCommand: (applicationid: string) => `/applications/${applicationid}/commands`,
    /**
     * Fetch a global command for your application. Returns an ApplicationCommand object.
     */
    GetGlobalApplicationCommand: (applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`,
    /**
     * Edit a global command. Updates will be available in all guilds after 1 hour. Returns
     * 200 and an ApplicationCommand object.
     */
    EditGlobalApplicationCommand: (applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`,
    /**
     * Deletes a global command. Returns 204.
     */
    DeleteGlobalApplicationCommand: (applicationid: string, commandid: string) => `/applications/${applicationid}/commands/${commandid}`,
    /**
     * Fetch all of the guild commands for your application for a specific guild. Returns
     * an array of ApplicationCommand objects.
     */
    GetGuildApplicationCommands: (applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`,
    /**
     * Takes a list of application commands, overwriting existing commands that are registered
     * globally for this application. Updates will be available in all guilds after 1 hour.
     * Returns 200 and a list of ApplicationCommand objects. Commands that do not already
     * exist will count toward daily application command create limits.
     */
    BulkOverwriteGlobalApplicationCommands: (applicationid: string) => `/applications/${applicationid}/commands`,
    /**
     * Create a new guild command. New guild commands will be available in the guild immediately.
     * Returns 201 and an ApplicationCommand object.  If the command did not already exist,
     * it will count toward daily application command create limits.
     */
    CreateGuildApplicationCommand: (applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`,
    /**
     * Fetch a guild command for your application. Returns an ApplicationCommand object.
     */
    GetGuildApplicationCommand: (applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`,
    /**
     * Edit a guild command. Updates for guild commands will be available immediately.
     * Returns 200 and an ApplicationCommand object.
     */
    EditGuildApplicationCommand: (applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`,
    /**
     * Delete a guild command. Returns 204 on success.
     */
    DeleteGuildApplicationCommand: (applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}`,
    /**
     * Takes a list of application commands, overwriting existing commands for the guild.
     * Returns 200 and a list of ApplicationCommand objects.
     */
    BulkOverwriteGuildApplicationCommands: (applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands`,
    /**
     * Create a response to an Interaction from the gateway. Takes an Interaction response.
     */
    CreateInteractionResponse: (interactionid: string, interactiontoken: string) => `/interactions/${interactionid}/${interactiontoken}/callback`,
    /**
     * Returns the initial Interaction response. Functions the same as Get Webhook Message.
     */
    GetOriginalInteractionResponse: (applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`,
    /**
     * Edits the initial Interaction response. Functions the same as Edit Webhook Message.
     */
    EditOriginalInteractionResponse: (applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`,
    /**
     * Deletes the initial Interaction response. Returns 204 on success.
     */
    DeleteOriginalInteractionResponse: (applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/@original`,
    /**
     * Create a followup message for an Interaction. Functions the same as Execute Webhook,
     * but wait is always true, and flags can be set to 64 in the body to send an ephemeral
     * message. The thread_id query parameter is not required (and is furthermore ignored)
     * when using this endpoint for interaction followups.
     */
    CreateFollowupMessage: (applicationid: string, interactiontoken: string) => `/webhooks/${applicationid}/${interactiontoken}`,
    /**
     * Edits a followup message for an Interaction. Functions the same as Edit Webhook
     * Message.
     */
    EditFollowupMessage: (applicationid: string, interactiontoken: string, messageid: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`,
    /**
     * Deletes a followup message for an Interaction. Returns 204 on success.
     */
    DeleteFollowupMessage: (applicationid: string, interactiontoken: string, messageid: string) => `/webhooks/${applicationid}/${interactiontoken}/messages/${messageid}`,
    /**
     * Fetches command permissions for all commands for your application in a guild. Returns
     * an array of GuildApplicationCommandPermissions objects.
     */
    GetGuildApplicationCommandPermissions: (applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`,
    /**
     * Fetches command permissions for a specific command for your application in a guild.
     * Returns a GuildApplicationCommandPermissions object.
     */
    GetApplicationCommandPermissions: (applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`,
    /**
     * Edits command permissions for a specific command for your application in a guild.
     */
    EditApplicationCommandPermissions: (applicationid: string, guildid: string, commandid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/${commandid}/permissions`,
    /**
     * Batch edits permissions for all commands in a guild. Takes an array of partial GuildApplicationCommandPermissions
     * objects including id and permissions.
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
    BatchEditApplicationCommandPermissions: (applicationid: string, guildid: string) => `/applications/${applicationid}/guilds/${guildid}/commands/permissions`,
    /**
     * Returns an audit log object for the guild. Requires the 'VIEWAUDITLOG' permission.
     */
    GetGuildAuditLog: (guildid: string) => `/guilds/${guildid}/audit-logs`,
    /**
     * Get a channel by ID. Returns a channel object.  If the channel is a thread, a thread
     * member object is included in the returned result.
     */
    GetChannel: (channelid: string) => `/channels/${channelid}`,
    /**
     * Update a channel's settings. Returns a channel on success, and a 400 BAD REQUEST
     * on invalid parameters. All JSON parameters are optional.
     */
    ModifyChannel: (channelid: string) => `/channels/${channelid}`,
    /**
     * Delete a channel, or close a private message. Requires the MANAGECHANNELS permission
     * for the guild, or MANAGETHREADS if the channel is a thread. Deleting a category
     * does not delete its child channels; they will have their parent_id removed and a
     * Channel Update Gateway event will fire for each of them. Returns a channel object
     * on success. Fires a Channel Delete Gateway event (or Thread Delete if the channel
     * was a thread).
     */
    CloseChannel: (channelid: string) => `/channels/${channelid}`,
    /**
     * Returns the messages for a channel. If operating on a guild channel, this endpoint
     * requires the VIEWCHANNEL permission to be present on the current user. If the current
     * user is missing the 'READMESSAGE_HISTORY' permission in the channel then this will
     * return no messages (since they cannot read the message history). Returns an array
     * of message objects on success.
     */
    GetChannelMessages: (channelid: string) => `/channels/${channelid}/messages`,
    /**
     * Returns a specific message in the channel. If operating on a guild channel, this
     * endpoint requires the 'READMESSAGEHISTORY' permission to be present on the current
     * user. Returns a message object on success.
     */
    GetChannelMessage: (channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`,
    /**
     * Post a message to a guild text or DM channel. Returns a message object. Fires a
     * Message Create Gateway event. See message formatting for more information on how
     * to properly format messages.
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
     */
    CreateMessage: (channelid: string) => `/channels/${channelid}/messages`,
    /**
     * Crosspost a message in a News Channel to following channels. This endpoint requires
     * the 'SENDMESSAGES' permission, if the current user sent the message, or additionally
     * the 'MANAGEMESSAGES' permission, for all other messages, to be present for the current
     * user.
     * 
     * Returns a message object.
     */
    CrosspostMessage: (channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/crosspost`,
    /**
     * Create a reaction for the message. This endpoint requires the 'READMESSAGEHISTORY'
     * permission to be present on the current user. Additionally, if nobody else has reacted
     * to the message using this emoji, this endpoint requires the 'ADD_REACTIONS' permission
     * to be present on the current user. Returns a 204 empty response on success. The
     * emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To
     * use custom emoji, you must encode it in the format name:id with the emoji name and
     * emoji id.
     */
    CreateReaction: (channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`,
    /**
     * Delete a reaction the current user has made for the message. Returns a 204 empty
     * response on success. The emoji must be URL Encoded or the request will fail with
     * 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id
     * with the emoji name and emoji id.
     */
    DeleteOwnReaction: (channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`,
    /**
     * Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES' permission
     * to be present on the current user. Returns a 204 empty response on success. The
     * emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To
     * use custom emoji, you must encode it in the format name:id with the emoji name and
     * emoji id.
     */
    DeleteUserReaction: (channelid: string, messageid: string, emoji: string, userid: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/${userid}`,
    /**
     * Get a list of users that reacted with this emoji. Returns an array of user objects
     * on success. The emoji must be URL Encoded or the request will fail with 10014: Unknown
     * Emoji. To use custom emoji, you must encode it in the format name:id with the emoji
     * name and emoji id.
     */
    GetReactions: (channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`,
    /**
     * Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES'
     * permission to be present on the current user. Fires a Message Reaction Remove All
     * Gateway event.
     */
    DeleteAllReactions: (channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/reactions`,
    /**
     * Deletes all the reactions for a given emoji on a message. This endpoint requires
     * the MANAGE_MESSAGES permission to be present on the current user. Fires a Message
     * Reaction Remove Emoji Gateway event. The emoji must be URL Encoded or the request
     * will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in
     * the format name:id with the emoji name and emoji id.
     */
    DeleteAllReactionsforEmoji: (channelid: string, messageid: string, emoji: string) => `/channels/${channelid}/messages/${messageid}/reactions/${emoji}`,
    /**
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
     */
    EditMessage: (channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`,
    /**
     * Delete a message. If operating on a guild channel and trying to delete a message
     * that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES
     * permission. Returns a 204 empty response on success. Fires a Message Delete Gateway
     * event.
     */
    DeleteMessage: (channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}`,
    /**
     * Delete multiple messages in a single request. This endpoint can only be used on
     * guild channels and requires the MANAGE_MESSAGES permission. Returns a 204 empty
     * response on success. Fires a Message Delete Bulk Gateway event.
     * 
     * Any message IDs given that do not exist or are invalid will count towards the minimum
     * and maximum message count (currently 2 and 100 respectively).
     */
    BulkDeleteMessages: (channelid: string) => `/channels/${channelid}/messages/bulk-delete`,
    /**
     * Edit the channel permission overwrites for a user or role in a channel. Only usable
     * for guild channels. Requires the MANAGEROLES permission. Only permissions your bot
     * has in the guild or channel can be allowed/denied (unless your bot has a MANAGEROLES
     * overwrite in the channel). Returns a 204 empty response on success. For more information
     * about permissions, see permissions.
     */
    EditChannelPermissions: (channelid: string, overwriteid: string) => `/channels/${channelid}/permissions/${overwriteid}`,
    /**
     * Returns a list of invite objects (with invite metadata) for the channel. Only usable
     * for guild channels. Requires the MANAGE_CHANNELS permission.
     */
    GetChannelInvites: (channelid: string) => `/channels/${channelid}/invites`,
    /**
     * Create a new invite object for the channel. Only usable for guild channels. Requires
     * the CREATEINSTANTINVITE permission. All JSON parameters for this route are optional,
     * however the request body is not. If you are not sending any fields, you still have
     * to send an empty JSON object ({}). Returns an invite object. Fires an Invite Create
     * Gateway event.
     */
    CreateChannelInvite: (channelid: string) => `/channels/${channelid}/invites`,
    /**
     * Delete a channel permission overwrite for a user or role in a channel. Only usable
     * for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response
     * on success. For more information about permissions, see permissions
     */
    DeleteChannelPermission: (channelid: string, overwriteid: string) => `/channels/${channelid}/permissions/${overwriteid}`,
    /**
     * Follow a News Channel to send messages to a target channel. Requires the MANAGE_WEBHOOKS
     * permission in the target channel. Returns a followed channel object.
     */
    FollowNewsChannel: (channelid: string) => `/channels/${channelid}/followers`,
    /**
     * Post a typing indicator for the specified channel. Generally bots should not implement
     * this route. However, if a bot is responding to a command and expects the computation
     * to take a few seconds, this endpoint may be called to let the user know that the
     * bot is processing their message. Returns a 204 empty response on success. Fires
     * a Typing Start Gateway event.
     */
    TriggerTypingIndicator: (channelid: string) => `/channels/${channelid}/typing`,
    /**
     * Returns all pinned messages in the channel as an array of message objects.
     */
    GetPinnedMessages: (channelid: string) => `/channels/${channelid}/pins`,
    /**
     * Pin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204
     * empty response on success.
     */
    PinMessage: (channelid: string, messageid: string) => `/channels/${channelid}/pins/${messageid}`,
    /**
     * Unpin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a
     * 204 empty response on success.
     */
    UnpinMessage: (channelid: string, messageid: string) => `/channels/${channelid}/pins/${messageid}`,
    /**
     * Adds a recipient to a Group DM using their access token.
     */
    GroupDMAddRecipient: (channelid: string, userid: string) => `/channels/${channelid}/recipients/${userid}`,
    /**
     * Removes a recipient from a Group DM.
     */
    GroupDMRemoveRecipient: (channelid: string, userid: string) => `/channels/${channelid}/recipients/${userid}`,
    /**
     * Creates a new thread from an existing message. Returns a channel on success, and
     * a 400 BAD REQUEST on invalid parameters. Fires a Thread Create Gateway event.
     * 
     * When called on a GUILDTEXT channel, creates a GUILDPUBLICTHREAD. When called on
     * a GUILDNEWS channel, creates a GUILDNEWSTHREAD. The id of the created thread will
     * be the same as the id of the message, and as such a message can only have a single
     * thread created from it.
     */
    StartThreadwithMessage: (channelid: string, messageid: string) => `/channels/${channelid}/messages/${messageid}/threads`,
    /**
     * Creates a new thread that is not connected to an existing message. The created thread
     * is always a GUILDPRIVATETHREAD. Returns a channel on success, and a 400 BAD REQUEST
     * on invalid parameters. Fires a Thread Create Gateway event.
     */
    StartThreadwithoutMessage: (channelid: string) => `/channels/${channelid}/threads`,
    /**
     * Adds the current user to a thread. Also requires the thread is not archived. Returns
     * a 204 empty response on success. Fires a Thread Members Update Gateway event.
     */
    JoinThread: (channelid: string) => `/channels/${channelid}/thread-members/@me`,
    /**
     * Adds another member to a thread. Requires the ability to send messages in the thread.
     * Also requires the thread is not archived. Returns a 204 empty response on success.
     * Fires a Thread Members Update Gateway event.
     */
    AddThreadMember: (channelid: string, userid: string) => `/channels/${channelid}/thread-members/${userid}`,
    /**
     * Removes the current user from a thread. Also requires the thread is not archived.
     * Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
     */
    LeaveThread: (channelid: string) => `/channels/${channelid}/thread-members/@me`,
    /**
     * Removes another member from a thread. Requires the MANAGE_THREADS permission or
     * that you are the creator of the thread. Also requires the thread is not archived.
     * Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
     */
    RemoveThreadMember: (channelid: string, userid: string) => `/channels/${channelid}/thread-members/${userid}`,
    /**
     * Returns array of thread members objects that are members of the thread.
     */
    ListThreadMembers: (channelid: string) => `/channels/${channelid}/thread-members`,
    /**
     * Returns all active threads in the channel, including public and private threads.
     * Threads are ordered by their id, in descending order. Requires the READMESSAGEHISTORY
     * permission.
     */
    ListActiveThreads: (channelid: string) => `/channels/${channelid}/threads/active`,
    /**
     * Returns archived threads in the channel that are public. When called on a GUILDTEXT
     * channel, returns threads of type GUILDPUBLICTHREAD. When called on a GUILDNEWS channel
     * returns threads of type GUILDNEWSTHREAD. Threads are ordered by archivetimestamp,
     * in descending order. Requires the READMESSAGE_HISTORY permission.
     */
    ListPublicArchivedThreads: (channelid: string) => `/channels/${channelid}/threads/archived/public`,
    /**
     * Returns archived threads in the channel that are of type GUILDPRIVATETHREAD. Threads
     * are ordered by archivetimestamp, in descending order. Requires both the READMESSAGEHISTORY
     * and MANAGETHREADS permissions.
     */
    ListPrivateArchivedThreads: (channelid: string) => `/channels/${channelid}/threads/archived/private`,
    /**
     * Returns archived threads in the channel that are of type GUILDPRIVATETHREAD, and
     * the user has joined. Threads are ordered by their id, in descending order. Requires
     * the READMESSAGEHISTORY permission.
     */
    ListJoinedPrivateArchivedThreads: (channelid: string) => `/channels/${channelid}/users/@me/threads/archived/private`,
    /**
     * Returns a list of emoji objects for the given guild.
     */
    ListGuildEmojis: (guildid: string) => `/guilds/${guildid}/emojis`,
    /**
     * Returns an emoji object for the given guild and emoji IDs.
     */
    GetGuildEmoji: (guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`,
    /**
     * Create a new emoji for the guild. Requires the MANAGE_EMOJIS permission. Returns
     * the new emoji object on success. Fires a Guild Emojis Update Gateway event.
     */
    CreateGuildEmoji: (guildid: string) => `/guilds/${guildid}/emojis`,
    /**
     * Modify the given emoji. Requires the MANAGE_EMOJIS permission. Returns the updated
     * emoji object on success. Fires a Guild Emojis Update Gateway event.
     */
    ModifyGuildEmoji: (guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`,
    /**
     * Delete the given emoji. Requires the MANAGE_EMOJIS permission. Returns 204 No Content
     * on success. Fires a Guild Emojis Update Gateway event.
     */
    DeleteGuildEmoji: (guildid: string, emojiid: string) => `/guilds/${guildid}/emojis/${emojiid}`,
    /**
     * Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway
     * event.
     * @example
     * ```json
     * {
     *   "name": "naming-things-is-hard",
     *   "type": 0
     * }
     * ```
     */
    CreateGuild: () => `/guilds`,
    /**
     * Returns the guild object for the given id. If withcounts is set to true, this endpoint
     * will also return approximatemembercount and approximatepresence_count for the guild.
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
    GetGuild: (guildid: string) => `/guilds/${guildid}`,
    /**
     * Returns the guild preview object for the given id. If the user is not in the guild,
     * then the guild must be Discoverable.
     */
    GetGuildPreview: (guildid: string) => `/guilds/${guildid}/preview`,
    /**
     * Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated
     * guild object on success. Fires a Guild Update Gateway event.
     */
    ModifyGuild: (guildid: string) => `/guilds/${guildid}`,
    /**
     * Delete a guild permanently. User must be owner. Returns 204 No Content on success.
     * Fires a Guild Delete Gateway event.
     */
    DeleteGuild: (guildid: string) => `/guilds/${guildid}`,
    /**
     * Returns a list of guild channel objects. Does not include threads.
     */
    GetGuildChannels: (guildid: string) => `/guilds/${guildid}/channels`,
    /**
     * Create a new channel object for the guild. Requires the MANAGECHANNELS permission.
     * If setting permission overwrites, only permissions your bot has in the guild can
     * be allowed/denied. Setting MANAGEROLES permission in channels is only possible for
     * guild administrators. Returns the new channel object on success. Fires a Channel
     * Create Gateway event.
     */
    CreateGuildChannel: (guildid: string) => `/guilds/${guildid}/channels`,
    /**
     * Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS
     * permission. Returns a 204 empty response on success. Fires multiple Channel Update
     * Gateway events.
     */
    ModifyGuildChannelPositions: (guildid: string) => `/guilds/${guildid}/channels`,
    /**
     * Returns a guild member object for the specified user.
     */
    GetGuildMember: (guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`,
    /**
     * Returns a list of guild member objects that are members of the guild.
     */
    ListGuildMembers: (guildid: string) => `/guilds/${guildid}/members`,
    /**
     * Returns a list of guild member objects whose username or nickname starts with a
     * provided string.
     */
    SearchGuildMembers: (guildid: string) => `/guilds/${guildid}/members/search`,
    /**
     * Adds a user to the guild, provided you have a valid oauth2 access token for the
     * user with the guilds.join scope. Returns a 201 Created with the guild member as
     * the body, or 204 No Content if the user is already a member of the guild. Fires
     * a Guild Member Add Gateway event.
     * 
     * For guilds with Membership Screening enabled, this endpoint will default to adding
     * new members as pending in the guild member object. Members that are pending will
     * have to complete membership screening before they become full members that can talk.
     */
    AddGuildMember: (guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`,
    /**
     * Modify attributes of a guild member. Returns a 200 OK with the guild member as the
     * body. Fires a Guild Member Update Gateway event. If the channel_id is set to null,
     * this will force the target user to be disconnected from voice.
     */
    ModifyGuildMember: (guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`,
    /**
     * Modifies the nickname of the current user in a guild. Returns a 200 with the nickname
     * on success. Fires a Guild Member Update Gateway event.
     */
    ModifyCurrentUserNick: (guildid: string) => `/guilds/${guildid}/members/@me/nick`,
    /**
     * Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204
     * empty response on success. Fires a Guild Member Update Gateway event.
     */
    AddGuildMemberRole: (guildid: string, userid: string, roleid: string) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`,
    /**
     * Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns
     * a 204 empty response on success. Fires a Guild Member Update Gateway event.
     */
    RemoveGuildMemberRole: (guildid: string, userid: string, roleid: string) => `/guilds/${guildid}/members/${userid}/roles/${roleid}`,
    /**
     * Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty
     * response on success. Fires a Guild Member Remove Gateway event.
     */
    RemoveGuildMember: (guildid: string, userid: string) => `/guilds/${guildid}/members/${userid}`,
    /**
     * Returns a list of ban objects for the users banned from this guild. Requires the
     * BAN_MEMBERS permission.
     */
    GetGuildBans: (guildid: string) => `/guilds/${guildid}/bans`,
    /**
     * Returns a ban object for the given user or a 404 not found if the ban cannot be
     * found. Requires the BAN_MEMBERS permission.
     */
    GetGuildBan: (guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`,
    /**
     * Create a guild ban, and optionally delete previous messages sent by the banned user.
     * Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires
     * a Guild Ban Add Gateway event.
     */
    CreateGuildBan: (guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`,
    /**
     * Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty
     * response on success. Fires a Guild Ban Remove Gateway event.
     */
    RemoveGuildBan: (guildid: string, userid: string) => `/guilds/${guildid}/bans/${userid}`,
    /**
     * Returns a list of role objects for the guild.
     */
    GetGuildRoles: (guildid: string) => `/guilds/${guildid}/roles`,
    /**
     * Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the
     * new role object on success. Fires a Guild Role Create Gateway event. All JSON params
     * are optional.
     */
    CreateGuildRole: (guildid: string) => `/guilds/${guildid}/roles`,
    /**
     * Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES
     * permission. Returns a list of all of the guild's role objects on success. Fires
     * multiple Guild Role Update Gateway events.
     */
    ModifyGuildRolePositions: (guildid: string) => `/guilds/${guildid}/roles`,
    /**
     * Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role
     * on success. Fires a Guild Role Update Gateway event.
     */
    ModifyGuildRole: (guildid: string, roleid: string) => `/guilds/${guildid}/roles/${roleid}`,
    /**
     * Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response
     * on success. Fires a Guild Role Delete Gateway event.
     */
    DeleteGuildRole: (guildid: string, roleid: string) => `/guilds/${guildid}/roles/${roleid}`,
    /**
     * Returns an object with one 'pruned' key indicating the number of members that would
     * be removed in a prune operation. Requires the KICK_MEMBERS permission.
     * 
     * By default, prune will not remove users with roles. You can optionally include specific
     * roles in your prune by providing the include_roles parameter. Any inactive user
     * that has a subset of the provided role(s) will be counted in the prune and users
     * with additional roles will not.
     */
    GetGuildPruneCount: (guildid: string) => `/guilds/${guildid}/prune`,
    /**
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
     */
    BeginGuildPrune: (guildid: string) => `/guilds/${guildid}/prune`,
    /**
     * Returns a list of voice region objects for the guild. Unlike the similar /voice
     * route, this returns VIP servers when the guild is VIP-enabled.
     */
    GetGuildVoiceRegions: (guildid: string) => `/guilds/${guildid}/regions`,
    /**
     * Returns a list of invite objects (with invite metadata) for the guild. Requires
     * the MANAGE_GUILD permission.
     */
    GetGuildInvites: (guildid: string) => `/guilds/${guildid}/invites`,
    /**
     * Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.
     */
    GetGuildIntegrations: (guildid: string) => `/guilds/${guildid}/integrations`,
    /**
     * Delete the attached integration object for the guild. Deletes any associated webhooks
     * and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission.
     * Returns a 204 empty response on success. Fires a Guild Integrations Update Gateway
     * event.
     */
    DeleteGuildIntegration: (guildid: string, integrationid: string) => `/guilds/${guildid}/integrations/${integrationid}`,
    /**
     * Returns a guild widget object. Requires the MANAGE_GUILD permission.
     */
    GetGuildWidgetSettings: (guildid: string) => `/guilds/${guildid}/widget`,
    /**
     * Modify a guild widget object for the guild. All attributes may be passed in with
     * JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild
     * widget object.
     */
    ModifyGuildWidget: (guildid: string) => `/guilds/${guildid}/widget`,
    /**
     * Returns the widget for the guild.
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
    GetGuildWidget: (guildid: string) => `/guilds/${guildid}/widget.json`,
    /**
     * Returns a partial invite object for guilds with that feature enabled. Requires the
     * MANAGE_GUILD permission. code will be null if a vanity url for the guild is not
     * set.
     * @example
     * ```json
     * {
     *   "code": "abc",
     *   "uses": 12
     * }
     * ```
     */
    GetGuildVanityURL: (guildid: string) => `/guilds/${guildid}/vanity-url`,
    /**
     * Returns a PNG image widget for the guild. Requires no permissions or authentication.
     */
    GetGuildWidgetImage: (guildid: string) => `/guilds/${guildid}/widget.png`,
    /**
     * Returns the Welcome Screen object for the guild.
     */
    GetGuildWelcomeScreen: (guildid: string) => `/guilds/${guildid}/welcome-screen`,
    /**
     * Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns
     * the updated Welcome Screen object.
     */
    ModifyGuildWelcomeScreen: (guildid: string) => `/guilds/${guildid}/welcome-screen`,
    /**
     * Updates the current user's voice state.
     */
    UpdateCurrentUserVoiceState: (guildid: string) => `/guilds/${guildid}/voice-states/@me`,
    /**
     * Updates another user's voice state.
     */
    UpdateUserVoiceState: (guildid: string, userid: string) => `/guilds/${guildid}/voice-states/${userid}`,
    /**
     * Returns a guild template object for the given code.
     */
    GetGuildTemplate: (templatecode: string) => `/guilds/templates/${templatecode}`,
    /**
     * Create a new guild based on a template. Returns a guild object on success. Fires
     * a Guild Create Gateway event.
     */
    CreateGuildfromGuildTemplate: (templatecode: string) => `/guilds/templates/${templatecode}`,
    /**
     * Returns an array of guild template objects. Requires the MANAGE_GUILD permission.
     */
    GetGuildTemplates: (guildid: string) => `/guilds/${guildid}/templates`,
    /**
     * Creates a template for the guild. Requires the MANAGE_GUILD permission. Returns
     * the created guild template object on success.
     */
    CreateGuildTemplate: (guildid: string) => `/guilds/${guildid}/templates`,
    /**
     * Syncs the template to the guild's current state. Requires the MANAGE_GUILD permission.
     * Returns the guild template object on success.
     */
    SyncGuildTemplate: (guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`,
    /**
     * Modifies the template's metadata. Requires the MANAGE_GUILD permission. Returns
     * the guild template object on success.
     */
    ModifyGuildTemplate: (guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`,
    /**
     * Deletes the template. Requires the MANAGE_GUILD permission. Returns the deleted
     * guild template object on success.
     */
    DeleteGuildTemplate: (guildid: string, templatecode: string) => `/guilds/${guildid}/templates/${templatecode}`,
    /**
     * Returns an invite object for the given code.
     */
    GetInvite: (invitecode: string) => `/invites/${invitecode}`,
    /**
     * Delete an invite. Requires the MANAGECHANNELS permission on the channel this invite
     * belongs to, or MANAGEGUILD to remove any invite across the guild. Returns an invite
     * object on success. Fires a Invite Delete Gateway event.
     */
    DeleteInvite: (invitecode: string) => `/invites/${invitecode}`,
    /**
     * Creates a new Stage instance associated to a Stage channel.
     * 
     * Requires the user to be a moderator of the Stage channel.
     */
    CreateStageInstance: () => `/stage-instances`,
    /**
     * Gets the stage instance associated with the Stage channel, if it exists.
     */
    GetStageInstance: (channelid: string) => `/stage-instances/${channelid}`,
    /**
     * Updates fields of an existing Stage instance.
     * 
     * Requires the user to be a moderator of the Stage channel.
     */
    UpdateStageInstance: (channelid: string) => `/stage-instances/${channelid}`,
    /**
     * Deletes the Stage instance.
     * 
     * Requires the user to be a moderator of the Stage channel.
     */
    DeleteStageInstance: (channelid: string) => `/stage-instances/${channelid}`,
    /**
     * Returns an array of voice region objects that can be used when creating servers.
     */
    ListVoiceRegions: () => `/voice/regions`,
    /**
     * Create a new webhook. Requires the MANAGE_WEBHOOKS permission. Returns a webhook
     * object on success. Webhook names follow our naming restrictions that can be found
     * in our Usernames and Nicknames documentation, with the following additional stipulations:
     * 
     * Webhook names cannot be: 'clyde'
     */
    CreateWebhook: (channelid: string) => `/channels/${channelid}/webhooks`,
    /**
     * Returns a list of channel webhook objects. Requires the MANAGE_WEBHOOKS permission.
     */
    GetChannelWebhooks: (channelid: string) => `/channels/${channelid}/webhooks`,
    /**
     * Returns a list of guild webhook objects. Requires the MANAGE_WEBHOOKS permission.
     */
    GetGuildWebhooks: (guildid: string) => `/guilds/${guildid}/webhooks`,
    /**
     * Returns the new webhook object for the given id.
     */
    GetWebhook: (webhookid: string) => `/webhooks/${webhookid}`,
    /**
     * Same as above, except this call does not require authentication and returns no user
     * in the webhook object.
     */
    GetWebhookwithToken: (webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`,
    /**
     * Modify a webhook. Requires the MANAGE_WEBHOOKS permission. Returns the updated webhook
     * object on success.
     */
    ModifyWebhook: (webhookid: string) => `/webhooks/${webhookid}`,
    /**
     * Same as above, except this call does not require authentication, does not accept
     * a channel_id parameter in the body, and does not return a user in the webhook object.
     */
    ModifyWebhookwithToken: (webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`,
    /**
     * Delete a webhook permanently. Requires the MANAGE_WEBHOOKS permission. Returns a
     * 204 NO CONTENT response on success.
     */
    DeleteWebhook: (webhookid: string) => `/webhooks/${webhookid}`,
    /**
     * Same as above, except this call does not require authentication.
     */
    DeleteWebhookwithToken: (webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`,
    ExecuteWebhook: (webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}`,
    ExecuteSlackCompatibleWebhook: (webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}/slack`,
    ExecuteGitHubCompatibleWebhook: (webhookid: string, webhooktoken: string) => `/webhooks/${webhookid}/${webhooktoken}/github`,
    /**
     * Returns a previously-sent webhook message from the same token. Returns a message
     * object on success.
     */
    GetWebhookMessage: (webhookid: string, webhooktoken: string, messageid: string) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`,
    /**
     * Edits a previously-sent webhook message from the same token. Returns a message object
     * on success.
     * 
     * When the content field is edited, the mentions array in the message object will
     * be reconstructed from scratch based on the new content. The allowedmentions field
     * of the edit request controls how this happens. If there is no explicit allowedmentions
     * in the edit request, the content will be parsed with default allowances, that is,
     * without regard to whether or not an allowed_mentions was present in the request
     * that originally created the message.
     */
    EditWebhookMessage: (webhookid: string, webhooktoken: string, messageid: string) => `/webhooks/${webhookid}/${webhooktoken}/messages/${messageid}`,
    /**
     * Returns an object with a single valid WSS URL, which the client can use for Connecting.
     * Clients should cache this value and only call this endpoint to retrieve a new URL
     * if they are unable to properly establish a connection using the cached version of
     * the URL.
     * @example
     * ```json
     * {
     *   "url": "wss://gateway.discord.gg/"
     * }
     * ```
     */
    GetGateway: () => `/gateway`,
    /**
     * Returns an object based on the information in Get Gateway, plus additional metadata
     * that can help during the operation of large or sharded bots. Unlike the Get Gateway,
     * this route should not be cached for extended periods of time as the value is not
     * guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.
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
    GetGatewayBot: () => `/gateway/bot`,
    /**
     * Returns the bot's application object without flags.
     */
    GetCurrentBotApplicationInformation: () => `/oauth2/applications/@me`,
    /**
     * Returns info about the current authorization. Requires authentication with a bearer
     * token.
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
    GetCurrentAuthorizationInformation: () => `/oauth2/@me`
}
