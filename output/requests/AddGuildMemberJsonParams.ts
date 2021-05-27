/**
 * https://discord.com/developers/docs/resources/guild#json-params
 * 
 * For guilds with Membership Screening enabled, assigning a role using the `roles` 
 * parameter will add the user to the guild as a full member (`pending` is false in 
 * the [member object](#DOCS_RESOURCES_GUILD/guild-member-object)). A member with a 
 * role will bypass membership screening and the guild's verification level, and 
 * get immediate access to chat. Therefore, instead of assigning a role when the 
 * member joins, it is recommended to grant roles only after the user completes 
 * screening.
 */
export interface AddGuildMemberJsonParams {
    /**
     * An oauth2 access token granted with the `guilds.join` to the bot's application 
     * for the user you want to add to the guild.
     */
    access_token: string;
    /**
     * Value to set users nickname to.
     */
    nick: string;
    /**
     * Array of role ids the member is assigned.
     */
    roles: string[];
    /**
     * Whether the user is muted in voice channels.
     */
    mute: boolean;
    /**
     * Whether the user is deafened in voice channels.
     */
    deaf: boolean;
}
