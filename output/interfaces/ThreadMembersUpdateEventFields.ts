import { ThreadMemberStructure } from "./ThreadMemberStructure";

/**
 * https://discord.com/developers/docs/topics/gateway#thread-members-update-thread-members-update-event-fields
 */
export interface ThreadMembersUpdateEventFields {
    /**
     * The id of the thread.
     */
    id: string;
    /**
     * The id of the guild.
     */
    guild_id: string;
    /**
     * The approximate number of members in the thread, capped at 50.
     */
    member_count: number;
    /**
     * The users who were added to the thread.
     */
    added_members?: ThreadMemberStructure[];
    /**
     * The id of the users who were removed from the thread.
     */
    removed_member_ids?: string[];
}
