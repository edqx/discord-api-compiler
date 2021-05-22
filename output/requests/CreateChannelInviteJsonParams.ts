/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface CreateChannelInviteJsonParams {
    /**
     * Duration of invite in seconds before expiry, or 0 for never. between 0 and 
     * 604800 (7 days).
     */
    max_age: number;
    /**
     * Max number of uses or 0 for unlimited. between 0 and 100.
     */
    max_uses: number;
    /**
     * Whether this invite only grants temporary membership.
     */
    temporary: boolean;
    /**
     * If true, don't try to reuse a similar invite (useful for creating many unique 
     * one time use invites).
     */
    unique: boolean;
    /**
     * The [type of 
     * target](https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types) 
     * for this voice channel invite.
     */
    target_type: number;
    /**
     * The id of the user whose stream to display for this invite, required if 
     * `target_type` is 1, the user must be streaming in the channel.
     */
    target_user_id: string;
    /**
     * The id of the embedded application to open for this invite, required if 
     * `target_type` is 2, the application must have the `EMBEDDED` flag.
     */
    target_application_id: string;
}
