/**
 * https://discord.com/developers/docs/resources/channel#json-params-(group-dm)
 * 
 * Fires a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway event.
 */
export interface ModifyChannelJsonParams {
    /**
     * 2-100 character channel name.
     */
    name: string;
    /**
     * Base64 encoded icon.
     */
    icon: string;
}
