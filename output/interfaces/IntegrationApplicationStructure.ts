import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
 */
export interface IntegrationApplicationStructure {
    /**
     * The id of the app.
     */
    id: string;
    /**
     * The name of the app.
     */
    name: string;
    /**
     * The [icon hash](https://discord.com/developers/docs/reference#image-formatting) 
     * of the app.
     */
    icon: string|null;
    /**
     * The description of the app.
     */
    description: string;
    /**
     * The description of the app.
     */
    summary: string;
    /**
     * The bot associated with this application.
     */
    bot?: UserStructure;
}
