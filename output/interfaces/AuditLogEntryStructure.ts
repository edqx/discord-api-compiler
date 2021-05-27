import { AuditLogChangeStructure } from "./AuditLogChangeStructure";
import { OptionalAuditEntryInfo } from "./OptionalAuditEntryInfo";

/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-entry-object-audit-log-entry-structure
 */
export interface AuditLogEntryStructure {
    /**
     * Id of the affected entity (webhook, user, role, etc.).
     */
    target_id: string|null;
    /**
     * Changes made to the target_id.
     */
    changes?: AuditLogChangeStructure[];
    /**
     * The user who made the changes.
     */
    user_id: string|null;
    /**
     * Id of the entry.
     */
    id: string;
    /**
     * Type of action that occurred.
     */
    action_type: any;
    /**
     * Additional info for certain action types.
     */
    options?: OptionalAuditEntryInfo;
    /**
     * The reason for the change (0-512 characters).
     */
    reason?: string;
}
