/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-delete-guild-role-delete-event-fields
 */
export interface GuildRoleDeleteEventFields {
    /**
     * Id of the guild.
     */
    guild_id: string;
    /**
     * Id of the role.
     */
    role_id: string;
}
