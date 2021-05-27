/**
 * https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface ThreadMemberStructure {
    /**
     * The id of the thread.
     */
    id: string;
    /**
     * The id of the user.
     */
    user_id: string;
    /**
     * The time the current user last joined the thread.
     */
    join_timestamp: string;
    /**
     * Any user-thread settings, currently only used for notifications.
     */
    flags: number;
}
