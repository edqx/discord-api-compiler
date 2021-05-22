import { ApplicationStructure } from "./ApplicationStructure";
import { ChannelStructure } from "./ChannelStructure";
import { GuildStructure } from "./GuildStructure";
import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/invite#invite-object-invite-structure
 */
export interface InviteStructure {
    /**
     * The invite code (unique ID).
     */
    code: string;
    /**
     * The guild this invite is for.
     */
    guild?: Partial<GuildStructure>;
    /**
     * The channel this invite is for.
     */
    channel: Partial<ChannelStructure>;
    /**
     * The user who created the invite.
     */
    inviter?: UserStructure;
    /**
     * The [type of 
     * target](https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types) 
     * for this voice channel invite.
     */
    target_type?: number;
    /**
     * The user whose stream to display for this voice channel stream invite.
     */
    target_user?: UserStructure;
    /**
     * The embedded application to open for this voice channel embedded application 
     * invite.
     */
    target_application?: Partial<ApplicationStructure>;
    /**
     * Approximate count of online members, returned from the `GET /invites/<code>` 
     * endpoint when `with_counts` is `true`.
     */
    approximate_presence_count?: number;
    /**
     * Approximate count of total members, returned from the `GET /invites/<code>` 
     * endpoint when `with_counts` is `true`.
     */
    approximate_member_count?: number;
    /**
     * The expiration date of this invite, returned from the `GET /invites/<code>` 
     * endpoint when `with_expiration` is `true`.
     */
    expires_at?: string|null;
}
