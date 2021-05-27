/**
 * https://discord.com/developers/docs/resources/user#json-params
 */
export interface CreateGroupDMJsonParams {
    /**
     * Access tokens of users that have granted your app the `gdm.join` scope.
     */
    access_tokens: string[];
    /**
     * A dictionary of user ids to their respective nicknames.
     */
    nicks: Record<string, string>;
}
