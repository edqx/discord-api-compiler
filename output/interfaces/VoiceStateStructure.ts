import { GuildMemberStructure } from "./GuildMemberStructure";

/**
 * https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface VoiceStateStructure {
    /**
     * The guild id this voice state is for.
     */
    guild_id?: string;
    /**
     * The channel id this user is connected to.
     */
    channel_id: string|null;
    /**
     * The user id this voice state is for.
     */
    user_id: string;
    /**
     * The guild member this voice state is for.
     */
    member?: GuildMemberStructure;
    /**
     * The session id for this voice state.
     */
    session_id: string;
    /**
     * Whether this user is deafened by the server.
     */
    deaf: boolean;
    /**
     * Whether this user is muted by the server.
     */
    mute: boolean;
    /**
     * Whether this user is locally deafened.
     */
    self_deaf: boolean;
    /**
     * Whether this user is locally muted.
     */
    self_mute: boolean;
    /**
     * Whether this user is streaming using "Go Live".
     */
    self_stream?: boolean;
    /**
     * Whether this user's camera is enabled.
     */
    self_video: boolean;
    /**
     * Whether this user is muted by the current user.
     */
    suppress: boolean;
    /**
     * The time at which the user requested to speak.
     */
    request_to_speak_timestamp: string|null;
}