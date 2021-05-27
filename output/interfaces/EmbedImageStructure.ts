/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface EmbedImageStructure {
    /**
     * Source url of image (only supports http(s) and attachments).
     */
    url?: string;
    /**
     * A proxied url of the image.
     */
    proxy_url?: string;
    /**
     * Height of image.
     */
    height?: number;
    /**
     * Width of image.
     */
    width?: number;
}
