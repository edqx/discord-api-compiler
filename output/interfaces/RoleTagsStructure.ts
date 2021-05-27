/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 */
export interface RoleTagsStructure {
    /**
     * The id of the bot this role belongs to.
     */
    bot_id?: string;
    /**
     * The id of the integration this role belongs to.
     */
    integration_id?: string;
    /**
     * Whether this is the guild's premium subscriber role.
     */
    premium_subscriber?: null;
}
