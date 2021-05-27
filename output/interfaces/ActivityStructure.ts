import { ActivityAssets } from "./ActivityAssets";
import { ActivityButtons } from "./ActivityButtons";
import { ActivityEmoji } from "./ActivityEmoji";
import { ActivityParty } from "./ActivityParty";
import { ActivitySecrets } from "./ActivitySecrets";
import { ActivityTimestamps } from "./ActivityTimestamps";

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
 * 
 * Bots are only able to send `name`, `type`, and optionally `url`.
 */
export interface ActivityStructure {
    /**
     * The activity's name.
     */
    name: string;
    /**
     * [activity 
     * type](https://discord.com/developers/docs/topics/gateway#activity-object-activity-types).
     */
    type: number;
    /**
     * Stream url, is validated when type is 1.
     */
    url?: string|null;
    /**
     * Unix timestamp of when the activity was added to the user's session.
     */
    created_at: number;
    /**
     * Unix timestamps for start and/or end of the game.
     */
    timestamps?: ActivityTimestamps;
    /**
     * Application id for the game.
     */
    application_id?: string;
    /**
     * What the player is currently doing.
     */
    details?: string|null;
    /**
     * The user's current party status.
     */
    state?: string|null;
    /**
     * The emoji used for a custom status.
     */
    emoji?: ActivityEmoji|null;
    /**
     * Information for the current party of the player.
     */
    party?: ActivityParty;
    /**
     * Images for the presence and their hover texts.
     */
    assets?: ActivityAssets;
    /**
     * Secrets for Rich Presence joining and spectating.
     */
    secrets?: ActivitySecrets;
    /**
     * Whether or not the activity is an instanced game session.
     */
    instance?: boolean;
    /**
     * [activity 
     * flags](https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags) 
     * `OR`d together, describes what the payload includes.
     */
    flags?: number;
    /**
     * The custom buttons shown in the Rich Presence (max 2).
     */
    buttons?: ActivityButtons[];
}
