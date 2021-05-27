/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure
 * 
 * \* The URL for fetching sticker assets is currently private.
 */
export interface MessageStickerStructure {
    /**
     * Id of the sticker.
     */
    id: string;
    /**
     * Id of the pack the sticker is from.
     */
    pack_id: string;
    /**
     * Name of the sticker.
     */
    name: string;
    /**
     * Description of the sticker.
     */
    description: string;
    /**
     * A comma-separated list of tags for the sticker.
     */
    tags?: string;
    /**
     * Sticker asset hash.
     */
    asset: string;
    /**
     * [type of sticker 
     * format](https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types).
     */
    format_type: number;
}
