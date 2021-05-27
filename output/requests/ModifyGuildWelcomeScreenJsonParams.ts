import { WelcomeScreenChannelStructure } from "../interfaces/WelcomeScreenChannelStructure";

/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildWelcomeScreenJsonParams {
    /**
     * Whether the welcome screen is enabled.
     */
    enabled: boolean;
    /**
     * Channels linked in the welcome screen and their display options.
     */
    welcome_channels: WelcomeScreenChannelStructure[];
    /**
     * The server description to show in the welcome screen.
     */
    description: string;
}
