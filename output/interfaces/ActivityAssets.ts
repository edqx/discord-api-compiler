/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export interface ActivityAssets {
    /**
     * The id for a large asset of the activity, usually a snowflake.
     */
    large_image?: string;
    /**
     * Text displayed when hovering over the large image of the activity.
     */
    large_text?: string;
    /**
     * The id for a small asset of the activity, usually a snowflake.
     */
    small_image?: string;
    /**
     * Text displayed when hovering over the small image of the activity.
     */
    small_text?: string;
}
