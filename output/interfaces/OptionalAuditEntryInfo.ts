/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-entry-object-optional-audit-entry-info
 */
export interface OptionalAuditEntryInfo {
    /**
     * Number of days after which inactive members were kicked.
     */
    delete_member_days: string;
    /**
     * Number of members removed by the prune.
     */
    members_removed: string;
    /**
     * Channel in which the entities were targeted.
     */
    channel_id: string;
    /**
     * Id of the message that was targeted.
     */
    message_id: string;
    /**
     * Number of entities that were targeted.
     */
    count: string;
    /**
     * Id of the overwritten entity.
     */
    id: string;
    /**
     * Type of overwritten entity - "0" for "role" or "1" for "member".
     */
    type: string;
    /**
     * Name of the role if type is "0" (not present if type is "1").
     */
    role_name: string;
}
