import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-remove-guild-member-remove-event-fields
 */
export interface GuildMemberRemoveEventFields {
    /**
     * The id of the guild.
     */
    guild_id: string;
    /**
     * The user who was removed.
     */
    user: UserStructure;
}
