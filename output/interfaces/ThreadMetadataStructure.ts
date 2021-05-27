/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export interface ThreadMetadataStructure {
    /**
     * Whether the thread is archived.
     */
    archived: boolean;
    /**
     * Id of the user that last archived or unarchived the thread.
     */
    archiver_id?: string;
    /**
     * Duration in minutes to automatically archive the thread after recent activity, 
     * can be set to: 60, 1440, 4320, 10080.
     */
    auto_archive_duration: number;
    /**
     * Timestamp when the thread's archive status was last changed, used for 
     * calculating recent activity.
     */
    archive_timestamp: string;
    /**
     * When a thread is locked, only users with MANAGE_THREADS can unarchive it.
     */
    locked?: boolean;
}
