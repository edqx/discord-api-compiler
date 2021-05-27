/**
 * https://discord.com/developers/docs/resources/stage/instance#json-params
 */
export interface UpdateStageInstanceJsonParams {
    /**
     * The topic of the Stage instance (1-120 characters).
     */
    topic?: string;
    /**
     * The [privacy 
     * level](https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-privacy-level) 
     * of the Stage instance.
     */
    privacy_level?: number;
}
