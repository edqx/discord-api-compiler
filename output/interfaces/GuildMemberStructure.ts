import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 * 
 * The field `user` won't be included in the member object attached to 
 * `MESSAGE_CREATE` and `MESSAGE_UPDATE` gateway events.
 * 
 * In `GUILD_` events, `pending` will always be included as true or false. In non 
 * `GUILD_` events which can only be triggered by non-`pending` users, `pending` 
 * will not be included.
 */
export interface GuildMemberStructure {
    /**
     * The user this guild member represents.
     */
    user?: UserStructure;
    /**
     * This users guild nickname.
     */
    nick?: string|null;
    /**
     * Array of 
     * [role](https://discord.com/developers/docs/topics/permissions#role-object) 
     * object ids.
     */
    roles: string[];
    /**
     * When the user joined the guild.
     */
    joined_at: string;
    /**
     * When the user started 
     * [boosting](https://discord.com/developers/ttps:##support.discord.com#hc#en-us#articles#360028038352-server-boosting-) 
     * the guild.
     */
    premium_since?: string|null;
    /**
     * Whether the user is deafened in voice channels.
     */
    deaf: boolean;
    /**
     * Whether the user is muted in voice channels.
     */
    mute: boolean;
    /**
     * Whether the user has not yet passed the guild's [Membership 
     * Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) 
     * requirements.
     */
    pending?: boolean;
    /**
     * Total permissions of the member in the channel, including overwrites, returned 
     * when in the interaction object.
     */
    permissions?: string;
}
