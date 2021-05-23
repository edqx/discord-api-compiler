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
}
