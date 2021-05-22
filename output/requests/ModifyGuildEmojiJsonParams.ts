/**
 * https://discord.com/developers/docs/resources/emoji#json-params
 */
export interface ModifyGuildEmojiJsonParams {
    /**
     * Name of the emoji.
     */
    name: string;
    /**
     * Roles allowed to use this emoji.
     */
    roles: (string|null)[];
}
