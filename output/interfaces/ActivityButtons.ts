/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons
 * 
 * When received over the gateway, the `buttons` field is an array of strings, 
 * which are the button labels. Bots cannot access a user's activity button URLs. 
 * When sending, the `buttons` field must be an array of the below object:
 */
export interface ActivityButtons {
    /**
     * The text shown on the button (1-32 characters).
     */
    label: string;
    /**
     * The url opened when clicking the button (1-512 characters).
     */
    url: string;
}
