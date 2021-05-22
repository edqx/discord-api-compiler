/**
 * https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface UserStructure {
    /**
     * The user's id.
     */
    id: string;
    /**
     * The user's username, not unique across the platform.
     */
    username: string;
    /**
     * The user's 4-digit discord-tag.
     */
    discriminator: string;
    /**
     * The user's [avatar 
     * hash](https://discord.com/developers/docs/reference#image-formatting).
     */
    avatar: string|null;
    /**
     * Whether the user belongs to an OAuth2 application.
     */
    bot?: boolean;
    /**
     * Whether the user is an Official Discord System user (part of the urgent message 
     * system).
     */
    system?: boolean;
    /**
     * Whether the user has two factor enabled on their account.
     */
    mfa_enabled?: boolean;
    /**
     * The user's chosen language option.
     */
    locale?: string;
    /**
     * Whether the email on this account has been verified.
     */
    verified?: boolean;
    /**
     * The user's email.
     */
    email?: string|null;
    /**
     * The 
     * [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) 
     * on a user's account.
     */
    flags?: number;
    /**
     * The [type of Nitro 
     * subscription](https://discord.com/developers/docs/resources/user#user-object-premium-types) 
     * on a user's account.
     */
    premium_type?: number;
    /**
     * The public 
     * [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) 
     * on a user's account.
     */
    public_flags?: number;
}
