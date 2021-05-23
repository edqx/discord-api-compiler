import { EmojiStructure } from "./EmojiStructure";

/**
 * https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure
 */
export interface GuildPreviewStructure {
    /**
     * Guild id.
     */
    id: string;
    /**
     * Guild name (2-100 characters).
     */
    name: string;
    /**
     * [icon hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    icon: string|null;
    /**
     * [splash hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    splash: string|null;
    /**
     * [discovery splash 
     * hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    discovery_splash: string|null;
    /**
     * Custom guild emojis.
     */
    emojis: EmojiStructure[];
    /**
     * Enabled guild features.
     */
    features: any[];
    /**
     * Approximate number of members in this guild.
     */
    approximate_member_count: number;
    /**
     * Approximate number of online members in this guild.
     */
    approximate_presence_count: number;
    /**
     * The description for the guild, if the guild is discoverable.
     */
    description: string|null;
}
