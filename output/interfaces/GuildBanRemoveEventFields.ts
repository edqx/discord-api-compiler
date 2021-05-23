import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove-guild-ban-remove-event-fields
 */
export interface GuildBanRemoveEventFields {
    /**
     * Id of the guild.
     */
    guild_id: string;
    /**
     * The unbanned user.
     */
    user: UserStructure;
}
