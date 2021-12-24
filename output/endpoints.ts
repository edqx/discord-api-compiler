import { ApplicationCommand } from "./interfaces/ApplicationCommand";
import { ApplicationStructure } from "./interfaces/ApplicationStructure";
import { AuditLogStructure } from "./interfaces/AuditLogStructure";
import { BanStructure } from "./interfaces/BanStructure";
import { ChannelStructure } from "./interfaces/ChannelStructure";
import { ConnectionStructure } from "./interfaces/ConnectionStructure";
import { EmojiStructure } from "./interfaces/EmojiStructure";
import { FollowedChannelStructure } from "./interfaces/FollowedChannelStructure";
import { GuildApplicationCommandPermissions } from "./interfaces/GuildApplicationCommandPermissions";
import { GuildMemberStructure } from "./interfaces/GuildMemberStructure";
import { GuildPreviewStructure } from "./interfaces/GuildPreviewStructure";
import { GuildStructure } from "./interfaces/GuildStructure";
import { GuildTemplateStructure } from "./interfaces/GuildTemplateStructure";
import { GuildWidgetStructure } from "./interfaces/GuildWidgetStructure";
import { IntegrationStructure } from "./interfaces/IntegrationStructure";
import { InviteStructure } from "./interfaces/InviteStructure";
import { MessageStructure } from "./interfaces/MessageStructure";
import { RoleStructure } from "./interfaces/RoleStructure";
import { UserStructure } from "./interfaces/UserStructure";
import { VoiceRegionStructure } from "./interfaces/VoiceRegionStructure";
import { WebhookStructure } from "./interfaces/WebhookStructure";
import { WelcomeScreenStructure } from "./interfaces/WelcomeScreenStructure";

import { AddGuildMemberJsonParams } from "./requests/AddGuildMemberJsonParams";
import { BeginGuildPruneJsonParams } from "./requests/BeginGuildPruneJsonParams";
import { BulkDeleteMessagesJsonParams } from "./requests/BulkDeleteMessagesJsonParams";
import { CreateChannelInviteJsonParams } from "./requests/CreateChannelInviteJsonParams";
import { CreateDMJsonParams } from "./requests/CreateDMJsonParams";
import { CreateGlobalApplicationCommandJsonParams } from "./requests/CreateGlobalApplicationCommandJsonParams";
import { CreateGroupDMJsonParams } from "./requests/CreateGroupDMJsonParams";
import { CreateGuildApplicationCommandJsonParams } from "./requests/CreateGuildApplicationCommandJsonParams";
import { CreateGuildBanJsonParams } from "./requests/CreateGuildBanJsonParams";
import { CreateGuildChannelJsonParams } from "./requests/CreateGuildChannelJsonParams";
import { CreateGuildEmojiJsonParams } from "./requests/CreateGuildEmojiJsonParams";
import { CreateGuildFromGuildTemplateJsonParams } from "./requests/CreateGuildFromGuildTemplateJsonParams";
import { CreateGuildJsonParams } from "./requests/CreateGuildJsonParams";
import { CreateGuildRoleJsonParams } from "./requests/CreateGuildRoleJsonParams";
import { CreateGuildTemplateJsonParams } from "./requests/CreateGuildTemplateJsonParams";
import { CreateMessageJsonParams } from "./requests/CreateMessageJsonParams";
import { CreateStageInstanceJsonParams } from "./requests/CreateStageInstanceJsonParams";
import { CreateWebhookJsonParams } from "./requests/CreateWebhookJsonParams";
import { EditApplicationCommandPermissionsJsonParams } from "./requests/EditApplicationCommandPermissionsJsonParams";
import { EditChannelPermissionsJsonParams } from "./requests/EditChannelPermissionsJsonParams";
import { EditGlobalApplicationCommandJsonParams } from "./requests/EditGlobalApplicationCommandJsonParams";
import { EditGuildApplicationCommandJsonParams } from "./requests/EditGuildApplicationCommandJsonParams";
import { EditMessageJsonParams } from "./requests/EditMessageJsonParams";
import { EditWebhookMessageJsonParams } from "./requests/EditWebhookMessageJsonParams";
import { ExecuteGitHubCompatibleWebhookQueryParams } from "./requests/ExecuteGitHubCompatibleWebhookQueryParams";
import { ExecuteSlackCompatibleWebhookQueryParams } from "./requests/ExecuteSlackCompatibleWebhookQueryParams";
import { ExecuteWebhookJsonParams } from "./requests/ExecuteWebhookJsonParams";
import { ExecuteWebhookQueryParams } from "./requests/ExecuteWebhookQueryParams";
import { FollowNewsChannelJsonParams } from "./requests/FollowNewsChannelJsonParams";
import { GetChannelMessagesQueryParams } from "./requests/GetChannelMessagesQueryParams";
import { GetCurrentUserGuildsQueryParams } from "./requests/GetCurrentUserGuildsQueryParams";
import { GetGatewayBotJsonParams } from "./requests/GetGatewayBotJsonParams";
import { GetGuildAuditLogQueryParams } from "./requests/GetGuildAuditLogQueryParams";
import { GetGuildPruneCountQueryParams } from "./requests/GetGuildPruneCountQueryParams";
import { GetGuildQueryParams } from "./requests/GetGuildQueryParams";
import { GetGuildWidgetImageQueryParams } from "./requests/GetGuildWidgetImageQueryParams";
import { GetInviteQueryParams } from "./requests/GetInviteQueryParams";
import { GetReactionsQueryParams } from "./requests/GetReactionsQueryParams";
import { GroupDMAddRecipientJsonParams } from "./requests/GroupDMAddRecipientJsonParams";
import { ListGuildMembersQueryParams } from "./requests/ListGuildMembersQueryParams";
import { ListJoinedPrivateArchivedThreadsQueryParams } from "./requests/ListJoinedPrivateArchivedThreadsQueryParams";
import { ListPrivateArchivedThreadsQueryParams } from "./requests/ListPrivateArchivedThreadsQueryParams";
import { ListPublicArchivedThreadsQueryParams } from "./requests/ListPublicArchivedThreadsQueryParams";
import { ModifyChannelJsonParams } from "./requests/ModifyChannelJsonParams";
import { ModifyCurrentUserJsonParams } from "./requests/ModifyCurrentUserJsonParams";
import { ModifyCurrentUserNickJsonParams } from "./requests/ModifyCurrentUserNickJsonParams";
import { ModifyGuildChannelPositionsJsonParams } from "./requests/ModifyGuildChannelPositionsJsonParams";
import { ModifyGuildEmojiJsonParams } from "./requests/ModifyGuildEmojiJsonParams";
import { ModifyGuildJsonParams } from "./requests/ModifyGuildJsonParams";
import { ModifyGuildMemberJsonParams } from "./requests/ModifyGuildMemberJsonParams";
import { ModifyGuildRoleJsonParams } from "./requests/ModifyGuildRoleJsonParams";
import { ModifyGuildRolePositionsJsonParams } from "./requests/ModifyGuildRolePositionsJsonParams";
import { ModifyGuildTemplateJsonParams } from "./requests/ModifyGuildTemplateJsonParams";
import { ModifyGuildWelcomeScreenJsonParams } from "./requests/ModifyGuildWelcomeScreenJsonParams";
import { ModifyWebhookJsonParams } from "./requests/ModifyWebhookJsonParams";
import { SearchGuildMembersQueryParams } from "./requests/SearchGuildMembersQueryParams";
import { StartThreadWithMessageJsonParams } from "./requests/StartThreadWithMessageJsonParams";
import { StartThreadWithoutMessageJsonParams } from "./requests/StartThreadWithoutMessageJsonParams";
import { UpdateCurrentUserVoiceStateJsonParams } from "./requests/UpdateCurrentUserVoiceStateJsonParams";
import { UpdateStageInstanceJsonParams } from "./requests/UpdateStageInstanceJsonParams";
import { UpdateUserVoiceStateJsonParams } from "./requests/UpdateUserVoiceStateJsonParams";

import { GetCurrentAuthorizationInformationResponse } from "./responses/GetCurrentAuthorizationInformationResponse";
import { GetGatewayBotResponse } from "./responses/GetGatewayBotResponse";
import { GetGuildResponse } from "./responses/GetGuildResponse";
import { ListActiveThreadsResponse } from "./responses/ListActiveThreadsResponse";
import { ListJoinedPrivateArchivedThreadsResponse } from "./responses/ListJoinedPrivateArchivedThreadsResponse";
import { ListPrivateArchivedThreadsResponse } from "./responses/ListPrivateArchivedThreadsResponse";
import { ListPublicArchivedThreadsResponse } from "./responses/ListPublicArchivedThreadsResponse";

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
