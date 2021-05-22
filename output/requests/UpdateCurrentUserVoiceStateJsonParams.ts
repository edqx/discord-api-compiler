/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface UpdateCurrentUserVoiceStateJsonParams {
    /**
     * The id of the channel the user is currently in.
     */
    channel_id: string;
    /**
     * Toggles the user's suppress state.
     */
    suppress?: boolean;
    /**
     * Sets the user's request to speak.
     */
    request_to_speak_timestamp?: string|null;
}
