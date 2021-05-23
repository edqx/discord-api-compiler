/**
 * https://discord.com/developers/docs/resources/stage/instance#json-params
 */
export interface CreateStageInstanceJsonParams {
    /**
     * The id of the Stage channel.
     */
    channel_id: string;
    /**
     * The topic of the Stage instance (1-120 characters).
     */
    topic: string;
}
