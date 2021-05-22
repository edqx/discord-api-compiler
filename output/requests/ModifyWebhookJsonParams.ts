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
    avatar: any|null;
    /**
     * The new channel id this webhook should be moved to.
     */
    channel_id: string;
}
