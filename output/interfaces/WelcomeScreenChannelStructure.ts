/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export interface WelcomeScreenChannelStructure {
    /**
     * The channel's id.
     */
    channel_id: string;
    /**
     * The description shown for the channel.
     */
    description: string;
    /**
     * The [emoji id](https://discord.com/developers/docs/reference#image-formatting), 
     * if the emoji is custom.
     */
    emoji_id: string|null;
    /**
     * The emoji name if custom, the unicode character if standard, or `null` if no 
     * emoji is set.
     */
    emoji_name: string|null;
}
