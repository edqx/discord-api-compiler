import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-structure
 */
export interface ApplicationStructure {
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
     * An array of rpc origin urls, if rpc is enabled.
     */
    rpc_origins?: string[];
    /**
     * When false only app owner can join the app's bot to guilds.
     */
    bot_public: boolean;
    /**
     * When true the app's bot will only join upon completion of the full oauth2 code 
     * grant flow.
     */
    bot_require_code_grant: boolean;
    /**
     * The url of the app's terms of service.
     */
    terms_of_service_url?: string;
    /**
     * The url of the app's privacy policy.
     */
    privacy_policy_url?: string;
    /**
     * Partial user object containing info on the owner of the application.
     */
    owner: Partial<UserStructure>;
    /**
     * If this application is a game sold on Discord, this field will be the summary 
     * field for the store page of its primary sku.
     */
    summary: string;
    /**
     * The hex encoded key for verification in interactions and the GameSDK's 
     * [GetTicket](https://discord.com/developers/docs/game/sdk/applications#getticket).
     */
    verify_key: string;
    /**
     * If the application belongs to a team, this will be a list of the members of that 
     * team.
     */
    team: any|null;
    /**
     * If this application is a game sold on Discord, this field will be the guild to 
     * which it has been linked.
     */
    guild_id?: string;
    /**
     * If this application is a game sold on Discord, this field will be the id of the 
     * "Game SKU" that is created, if exists.
     */
    primary_sku_id?: string;
    /**
     * If this application is a game sold on Discord, this field will be the URL slug 
     * that links to the store page.
     */
    slug?: string;
    /**
     * The application's default rich presence invite [cover image 
     * hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    cover_image?: string;
    /**
     * The application's public 
     * [flags](https://discord.com/developers/docs/resources/application#application-application-flags).
     */
    flags: number;
}
