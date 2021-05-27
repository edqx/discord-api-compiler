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
    /**
     * The [privacy 
     * level](https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-privacy-level) 
     * of the Stage instance (default GUILD_ONLY).
     */
    privacy_level?: number;
}
