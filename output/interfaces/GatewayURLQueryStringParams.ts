/**
 * https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-query-string-params
 * 
 * The first step in establishing connectivity to the gateway is requesting a valid 
 * websocket endpoint from the API. This can be done through either the [Get 
 * Gateway](#DOCS_TOPICS_GATEWAY/get-gateway) or the [Get Gateway 
 * Bot](#DOCS_TOPICS_GATEWAY/get-gateway-bot) endpoint.
 * With the resulting payload, you can now open a websocket connection to the "url" 
 * (or endpoint) specified. Generally, it is a good idea to explicitly pass the 
 * gateway version and encoding. For example, we may connect to 
 * `wss://gateway.discord.gg/?v=9&encoding=json`.
 * Once connected, the client should immediately receive an [Opcode 10 
 * Hello](#DOCS_TOPICS_GATEWAY/hello) payload, with information on the connection's 
 * heartbeat interval:
 */
export interface GatewayURLQueryStringParams {
    /**
     * Gateway Version to use.
     */
    v: number;
    /**
     * The encoding of received gateway packets.
     */
    encoding: string;
    /**
     * The (optional) compression of gateway packets.
     */
    compress?: string;
}
