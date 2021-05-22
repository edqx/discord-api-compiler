/**
 * https://discord.com/developers/docs/resources/webhook#query-string-params
 * 
 * Refer to [Slack's documentation](https://api.slack.com/incoming-webhooks) for 
 * more information. We do not support Slack's `channel`, `icon_emoji`, `mrkdwn`, 
 * or `mrkdwn_in` properties.
 */
export interface ExecuteSlackCompatibleWebhookQueryParams {
    /**
     * Waits for server confirmation of message send before response (defaults to 
     * `true`; when `false` a message that is not saved does not return an error).
     */
    wait: boolean;
}
