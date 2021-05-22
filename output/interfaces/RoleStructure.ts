import { RoleTagsStructure } from "./RoleTagsStructure";

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 * 
 * Roles without colors (`color == 0`) do not count towards the final computed 
 * color in the user list.
 */
export interface RoleStructure {
    /**
     * Role id.
     */
    id: string;
    /**
     * Role name.
     */
    name: string;
    /**
     * Integer representation of hexadecimal color code.
     */
    color: number;
    /**
     * If this role is pinned in the user listing.
     */
    hoist: boolean;
    /**
     * Position of this role.
     */
    position: number;
    /**
     * Permission bit set.
     */
    permissions: string;
    /**
     * Whether this role is managed by an integration.
     */
    managed: boolean;
    /**
     * Whether this role is mentionable.
     */
    mentionable: boolean;
    /**
     * The tags this role has.
     */
    tags?: RoleTagsStructure;
}
