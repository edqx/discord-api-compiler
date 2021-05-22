/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface GroupDMAddRecipientJsonParams {
    /**
     * Access token of a user that has granted your app the `gdm.join` scope.
     */
    access_token: string;
    /**
     * Nickname of the user being added.
     */
    nick: string;
}
