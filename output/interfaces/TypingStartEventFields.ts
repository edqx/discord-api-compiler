import { GuildMemberStructure } from "./GuildMemberStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start-typing-start-event-fields
 */
export interface TypingStartEventFields {
    /**
     * Id of the channel.
     */
    channel_id: string;
    /**
     * Id of the guild.
     */
    guild_id?: string;
    /**
     * Id of the user.
     */
    user_id: string;
    /**
     * Unix time (in seconds) of when the user started typing.
     */
    timestamp: number;
    /**
     * The member who started typing if this happened in a guild.
     */
    member?: GuildMemberStructure;
}
