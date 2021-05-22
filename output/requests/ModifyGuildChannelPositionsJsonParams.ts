/**
 * https://discord.com/developers/docs/resources/guild#json-params
 */
export interface ModifyGuildChannelPositionsJsonParams {
    /**
     * Channel id.
     */
    id: string;
    /**
     * Sorting position of the channel.
     */
    position: number|null;
    /**
     * Syncs the permission overwrites with the new parent, if moving to a new 
     * category.
     */
    lock_permissions: boolean|null;
    /**
     * The new parent ID for the channel that is moved.
     */
    parent_id: string|null;
}
