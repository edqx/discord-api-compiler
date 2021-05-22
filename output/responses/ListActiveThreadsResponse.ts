import { ChannelStructure } from "../interfaces/ChannelStructure";
import { ThreadMemberStructure } from "../interfaces/ThreadMemberStructure";

/**
 * https://discord.com/developers/docs/resources/channel#response-body
 */
export interface ListActiveThreadsResponse {
    /**
     * The active threads.
     */
    threads: ChannelStructure[];
    /**
     * A thread member object for each returned thread the current user has joined.
     */
    members: ThreadMemberStructure[];
    /**
     * Whether there are potentially additional threads that could be returned on a 
     * subsequent call.
     */
    has_more: boolean;
}
