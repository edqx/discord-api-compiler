import { ActivityStructure } from "./ActivityStructure";
import { ClientStatusObject } from "./ClientStatusObject";
import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
 */
export interface PresenceUpdateEventFields {
    /**
     * The user presence is being updated for.
     */
    user: UserStructure;
    /**
     * Id of the guild.
     */
    guild_id: string;
    /**
     * Either "idle", "dnd", "online", or "offline".
     */
    status: string;
    /**
     * User's current activities.
     */
    activities: ActivityStructure[];
    /**
     * User's platform-dependent status.
     */
    client_status: ClientStatusObject;
}
