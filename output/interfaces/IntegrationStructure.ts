import { IntegrationAccountStructure } from "./IntegrationAccountStructure";
import { IntegrationApplicationStructure } from "./IntegrationApplicationStructure";
import { IntegrationExpireBehaviors } from "../enums/IntegrationExpireBehaviors";
import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 * 
 * ** \* These fields are not provided for discord bot integrations. **
 */
export interface IntegrationStructure {
    /**
     * Integration id.
     */
    id: string;
    /**
     * Integration name.
     */
    name: string;
    /**
     * Integration type (twitch, youtube, or discord).
     */
    type: string;
    /**
     * Is this integration enabled.
     */
    enabled: boolean;
    /**
     * Is this integration syncing.
     */
    syncing?: boolean;
    /**
     * Id that this integration uses for "subscribers".
     */
    role_id?: string;
    /**
     * Whether emoticons should be synced for this integration (twitch only currently).
     */
    enable_emoticons?: boolean;
    /**
     * The behavior of expiring subscribers.
     */
    expire_behavior?: IntegrationExpireBehaviors;
    /**
     * The grace period (in days) before expiring subscribers.
     */
    expire_grace_period?: number;
    /**
     * User for this integration.
     */
    user?: UserStructure;
    /**
     * Integration account information.
     */
    account: IntegrationAccountStructure;
    /**
     * When this integration was last synced.
     */
    synced_at?: string;
    /**
     * How many subscribers this integration has.
     */
    subscriber_count?: number;
    /**
     * Has this integration been revoked.
     */
    revoked?: boolean;
    /**
     * The bot/OAuth2 application for discord integrations.
     */
    application?: IntegrationApplicationStructure;
}
