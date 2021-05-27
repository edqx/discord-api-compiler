import { SessionStartLimitStructure } from "../interfaces/SessionStartLimitStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#json-response
 */
export interface GetGatewayBotResponse {
    /**
     * The WSS URL that can be used for connecting to the gateway.
     */
    url: string;
    /**
     * The recommended number of 
     * [shards](https://discord.com/developers/docs/topics/gateway#sharding) to use 
     * when connecting.
     */
    shards: number;
    /**
     * Information on the current session start limit.
     */
    session_start_limit: SessionStartLimitStructure;
}
