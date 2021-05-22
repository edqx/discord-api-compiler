import { WelcomeScreenChannelStructure } from "./WelcomeScreenChannelStructure";

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
 */
export interface WelcomeScreenStructure {
    /**
     * The server description shown in the welcome screen.
     */
    description: string|null;
    /**
     * The channels shown in the welcome screen, up to 5.
     */
    welcome_channels: WelcomeScreenChannelStructure[];
}
