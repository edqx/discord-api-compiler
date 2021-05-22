/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export interface MessageActivityStructure {
    /**
     * [type of message 
     * activity](https://discord.com/developers/docs/resources/channel#message-object-message-activity-types).
     */
    type: number;
    /**
     * Party_id from a [Rich Presence 
     * event](https://discord.com/developers/docs/rich/presence/how/to#updating-presence-update-presence-payload-fields).
     */
    party_id?: string;
}
