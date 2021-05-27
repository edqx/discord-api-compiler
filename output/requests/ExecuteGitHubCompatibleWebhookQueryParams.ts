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
