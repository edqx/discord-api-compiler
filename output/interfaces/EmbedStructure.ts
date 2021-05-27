import { EmbedAuthorStructure } from "./EmbedAuthorStructure";
import { EmbedFieldStructure } from "./EmbedFieldStructure";
import { EmbedFooterStructure } from "./EmbedFooterStructure";
import { EmbedImageStructure } from "./EmbedImageStructure";
import { EmbedProviderStructure } from "./EmbedProviderStructure";
import { EmbedThumbnailStructure } from "./EmbedThumbnailStructure";
import { EmbedVideoStructure } from "./EmbedVideoStructure";

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
 */
export interface EmbedStructure {
    /**
     * Title of embed.
     */
    title?: string;
    /**
     * [type of 
     * embed](https://discord.com/developers/docs/resources/channel#embed-object-embed-types) 
     * (always "rich" for webhook embeds).
     */
    type?: string;
    /**
     * Description of embed.
     */
    description?: string;
    /**
     * Url of embed.
     */
    url?: string;
    /**
     * Timestamp of embed content.
     */
    timestamp?: string;
    /**
     * Color code of the embed.
     */
    color?: number;
    /**
     * Footer information.
     */
    footer?: EmbedFooterStructure;
    /**
     * Image information.
     */
    image?: EmbedImageStructure;
    /**
     * Thumbnail information.
     */
    thumbnail?: EmbedThumbnailStructure;
    /**
     * Video information.
     */
    video?: EmbedVideoStructure;
    /**
     * Provider information.
     */
    provider?: EmbedProviderStructure;
    /**
     * Author information.
     */
    author?: EmbedAuthorStructure;
    /**
     * Fields information.
     */
    fields?: EmbedFieldStructure[];
}
