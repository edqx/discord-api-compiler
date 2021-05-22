/**
 * https://discord.com/developers/docs/resources/webhook#query-string-params
 */
export interface ExecuteWebhookJsonParams {
    /**
     * Waits for server confirmation of message send before response, and returns the 
     * created message body (defaults to `false`; when `false` a message that is not 
     * saved does not return an error).
     */
    wait: boolean;
    /**
     * Send a message to the specified thread within a webhook's channel. The thread 
     * will automatically be unarchived.
     */
    thread_id: string;
}
