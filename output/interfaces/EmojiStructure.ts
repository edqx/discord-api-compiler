import { RoleStructure } from "./RoleStructure";
import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface EmojiStructure {
    /**
     * [emoji id](https://discord.com/developers/docs/reference#image-formatting).
     */
    id: string|null;
    /**
     * Emoji name.
     */
    name: string|null;
    /**
     * Roles allowed to use this emoji.
     */
    roles?: RoleStructure[];
    /**
     * User that created this emoji.
     */
    user?: UserStructure;
    /**
     * Whether this emoji must be wrapped in colons.
     */
    require_colons?: boolean;
    /**
     * Whether this emoji is managed.
     */
    managed?: boolean;
    /**
     * Whether this emoji is animated.
     */
    animated?: boolean;
    /**
     * Whether this emoji can be used, may be false due to loss of Server Boosts.
     */
    available?: boolean;
}
