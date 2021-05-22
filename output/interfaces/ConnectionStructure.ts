/**
 * https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface ConnectionStructure {
    /**
     * Id of the connection account.
     */
    id: string;
    /**
     * The username of the connection account.
     */
    name: string;
    /**
     * The service of the connection (twitch, youtube).
     */
    type: string;
    /**
     * Whether the connection is revoked.
     */
    revoked?: boolean;
    /**
     * An array of partial [server 
     * integrations](https://discord.com/developers/docs/resources/guild#integration-object).
     */
    integrations?: any;
    /**
     * Whether the connection is verified.
     */
    verified: boolean;
    /**
     * Whether friend sync is enabled for this connection.
     */
    friend_sync: boolean;
    /**
     * Whether activities related to this connection will be shown in presence updates.
     */
    show_activity: boolean;
    /**
     * [visibility](https://discord.com/developers/docs/resources/user#connection-object-visibility-types) 
     * of this connection.
     */
    visibility: number;
}
