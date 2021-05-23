import { AuditLogEntryStructure } from "./AuditLogEntryStructure";
import { IntegrationStructure } from "./IntegrationStructure";
import { UserStructure } from "./UserStructure";
import { WebhookStructure } from "./WebhookStructure";

/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-object-audit-log-structure
 */
export interface AuditLogStructure {
    /**
     * List of webhooks found in the audit log.
     */
    webhooks: WebhookStructure[];
    /**
     * List of users found in the audit log.
     */
    users: UserStructure[];
    /**
     * List of audit log entries.
     */
    audit_log_entries: AuditLogEntryStructure[];
    /**
     * List of partial integration objects.
     */
    integrations: Partial<IntegrationStructure>[];
}
