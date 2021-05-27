/**
 * https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-stage-instance-structure
 */
export interface StageInstanceStructure {
    /**
     * The id of this Stage instance.
     */
    id: string;
    /**
     * The guild id of the associated Stage channel.
     */
    guild_id: string;
    /**
     * The id of the associated Stage channel.
     */
    channel_id: string;
    /**
     * The topic of the Stage instance (1-120 characters).
     */
    topic: string;
    /**
     * The [privacy 
     * level](https://discord.com/developers/docs/resources/stage/instance#stage-instance-object-privacy-level) 
     * of the Stage instance.
     */
    privacy_level: number;
    /**
     * Whether or not Stage discovery is disabled.
     */
    discoverable_disabled: boolean;
}
