/**
 * https://discord.com/developers/docs/resources/audit-log#query-string-params
 */
export interface GetGuildAuditLogQueryParams {
    /**
     * Filter the log for actions made by a user.
     */
    user_id: string;
    /**
     * The type of [audit log 
     * event](https://discord.com/developers/docs/resources/audit/log#audit-log-entry-object-audit-log-events).
     */
    action_type: number;
    /**
     * Filter the log before a certain entry id.
     */
    before: string;
    /**
     * How many entries are returned (default 50, minimum 1, maximum 100).
     */
    limit: number;
}
