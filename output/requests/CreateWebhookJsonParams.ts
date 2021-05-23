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
    avatar: string|null;
}
