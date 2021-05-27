/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildMemberJsonParams {
    /**
     * Value to set users nickname to.
     */
    nick: string;
    /**
     * Array of role ids the member is assigned.
     */
    roles: string[];
    /**
     * Whether the user is muted in voice channels. Will throw a 400 if the user is not 
     * in a voice channel.
     */
    mute: boolean;
    /**
     * Whether the user is deafened in voice channels. Will throw a 400 if the user is 
     * not in a voice channel.
     */
    deaf: boolean;
    /**
     * Id of channel to move user to (if they are connected to voice).
     */
    channel_id: string;
}
