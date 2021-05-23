/**
 * https://discord.com/developers/docs/resources/user#json-params
 */
export interface ModifyCurrentUserJsonParams {
    /**
     * User's username, if changed may cause the user's discriminator to be randomized.
     */
    username: string;
    /**
     * If passed, modifies the user's avatar.
     */
    avatar: string|null;
}
