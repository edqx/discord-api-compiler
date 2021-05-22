/**
 * https://discord.com/developers/docs/resources/webhook#query-string-params
 * 
 * Add a new webhook to your GitHub repo (in the repo's settings), and use this 
 * endpoint as the "Payload URL." You can choose what events your Discord channel 
 * receives by choosing the "Let me select individual events" option and selecting 
 * individual events for the new webhook you're configuring.
 */
export interface ExecuteGitHubCompatibleWebhookQueryParams {
    /**
     * Waits for server confirmation of message send before response (defaults to 
     * `true`; when `false` a message that is not saved does not return an error).
     */
    wait: boolean;
}
