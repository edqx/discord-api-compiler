import { EmojiStructure } from "./EmojiStructure";

/**
 * https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure
 */
export interface ReactionStructure {
    /**
     * Times this emoji has been used to react.
     */
    count: number;
    /**
     * Whether the current user reacted using this emoji.
     */
    me: boolean;
    /**
     * Emoji information.
     */
    emoji: Partial<EmojiStructure>;
}
