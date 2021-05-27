import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/guild#ban-object-ban-structure
 */
export interface BanStructure {
    /**
     * The reason for the ban.
     */
    reason: string|null;
    /**
     * The banned user.
     */
    user: UserStructure;
}
