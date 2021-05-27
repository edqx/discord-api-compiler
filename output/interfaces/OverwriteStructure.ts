/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
 */
export interface OverwriteStructure {
    /**
     * Role or user id.
     */
    id: string;
    /**
     * Either 0 (role) or 1 (member).
     */
    type: number;
    /**
     * Permission bit set.
     */
    allow: string;
    /**
     * Permission bit set.
     */
    deny: string;
}
