import { ApplicationStructure } from "../interfaces/ApplicationStructure";
import { UserStructure } from "../interfaces/UserStructure";

/**
 * https://discord.com/developers/docs/topics/oauth2#response-structure
 */
export interface GetCurrentAuthorizationInformationResponse {
    /**
     * The current application.
     */
    application: Partial<ApplicationStructure>;
    /**
     * The scopes the user has authorized the application for.
     */
    scopes: string[];
    /**
     * When the access token expires.
     */
    expires: string;
    /**
     * The user who has authorized, if the user has authorized with the `identify` 
     * scope.
     */
    user?: UserStructure;
}
