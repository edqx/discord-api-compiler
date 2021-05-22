/**
 * https://discord.com/developers/docs/topics/gateway#client-status-object
 * 
 * Active sessions are indicated with an "online", "idle", or "dnd" string per 
 * platform. If a user is offline or invisible, the corresponding field is not 
 * present.
 */
export interface ClientStatusObject {
    /**
     * The user's status set for an active desktop (Windows, Linux, Mac) application 
     * session.
     */
    desktop?: string;
    /**
     * The user's status set for an active mobile (iOS, Android) application session.
     */
    mobile?: string;
    /**
     * The user's status set for an active web (browser, bot account) application 
     * session.
     */
    web?: string;
}
