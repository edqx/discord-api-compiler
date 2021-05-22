/**
 * https://discord.com/developers/docs/topics/gateway#session-start-limit-structure
 */
export interface SessionStartLimitStructure {
    /**
     * The total number of session starts the current user is allowed.
     */
    total: number;
    /**
     * The remaining number of session starts the current user is allowed.
     */
    remaining: number;
    /**
     * The number of milliseconds after which the limit resets.
     */
    reset_after: number;
    /**
     * The number of identify requests allowed per 5 seconds.
     */
    max_concurrency: number;
}
