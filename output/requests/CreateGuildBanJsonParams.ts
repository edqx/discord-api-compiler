/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface CreateGuildBanJsonParams {
    /**
     * Number of days to delete messages for (0-7).
     */
    delete_message_days?: number;
    /**
     * Reason for the ban.
     */
    reason?: string;
}
