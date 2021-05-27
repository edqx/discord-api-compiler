import { ChannelStructure } from "./ChannelStructure";
import { GuildStructure } from "./GuildStructure";
import { UserStructure } from "./UserStructure";

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
