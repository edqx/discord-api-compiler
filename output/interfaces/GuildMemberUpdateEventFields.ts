import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-update-guild-member-update-event-fields
 */
export interface GuildMemberUpdateEventFields {
    /**
     * The id of the guild.
     */
    guild_id: string;
    /**
     * User role ids.
     */
    roles: string[];
    /**
     * The user.
     */
    user: UserStructure;
    /**
     * Nickname of the user in the guild.
     */
    nick?: string|null;
    /**
     * When the user joined the guild.
     */
    joined_at: string|null;
    /**
     * When the user starting 
     * [boosting](https://discord.com/developers/ttps:##support.discord.com#hc#en-us#articles#360028038352-server-boosting-) 
     * the guild.
     */
    premium_since?: string|null;
    /**
     * Whether the user is deafened in voice channels.
     */
    deaf?: boolean;
    /**
     * Whether the user is muted in voice channels.
     */
    mute?: boolean;
    /**
     * Whether the user has not yet passed the guild's [Membership 
     * Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) 
     * requirements.
     */
    pending?: boolean;
}
