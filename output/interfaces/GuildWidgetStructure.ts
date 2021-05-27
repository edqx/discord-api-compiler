/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure
 */
export interface GuildWidgetStructure {
    /**
     * Whether the widget is enabled.
     */
    enabled: boolean;
    /**
     * The widget channel id.
     */
    channel_id: string|null;
}
