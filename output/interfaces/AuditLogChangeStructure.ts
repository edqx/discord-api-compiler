/**
 * https://discord.com/developers/docs/resources/audit/log#audit-log-change-object-audit-log-change-structure
 * 
 * If `new_value` is not present in the change object, while `old_value` is, that 
 * means the property that was changed has been reset, or set to `null`
 */
export interface AuditLogChangeStructure {
    /**
     * New value of the key.
     */
    new_value?: any;
    /**
     * Old value of the key.
     */
    old_value?: any;
    /**
     * Name of audit log [change 
     * key](https://discord.com/developers/docs/resources/audit/log#audit-log-change-object-audit-log-change-key).
     */
    key: string;
}
