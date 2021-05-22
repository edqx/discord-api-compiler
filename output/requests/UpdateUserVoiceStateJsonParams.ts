/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface UpdateUserVoiceStateJsonParams {
    /**
     * The id of the channel the user is currently in.
     */
    channel_id: string;
    /**
     * Toggles the user's suppress state.
     */
    suppress?: boolean;
}
