import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add-guild-ban-add-event-fields
 */
export interface GuildBanAddEventFields {
    /**
     * Id of the guild.
     */
    guild_id: string;
    /**
     * The banned user.
     */
    user: UserStructure;
}
