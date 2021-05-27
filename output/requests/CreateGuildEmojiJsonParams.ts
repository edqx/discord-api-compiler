/**
 * https://discord.com/developers/docs/resources/emoji#json-params
 */
export interface CreateGuildEmojiJsonParams {
    /**
     * Name of the emoji.
     */
    name: string;
    /**
     * The 128x128 emoji image.
     */
    image: string;
    /**
     * Roles allowed to use this emoji.
     */
    roles: string[];
}
