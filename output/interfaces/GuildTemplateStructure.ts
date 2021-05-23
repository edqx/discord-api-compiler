import { GuildStructure } from "./GuildStructure";
import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/guild/template#guild-template-object-guild-template-structure
 */
export interface GuildTemplateStructure {
    /**
     * The template code (unique ID).
     */
    code: string;
    /**
     * Template name.
     */
    name: string;
    /**
     * The description for the template.
     */
    description: string|null;
    /**
     * Number of times this template has been used.
     */
    usage_count: number;
    /**
     * The ID of the user who created the template.
     */
    creator_id: string;
    /**
     * The user who created the template.
     */
    creator: UserStructure;
    /**
     * When this template was created.
     */
    created_at: string;
    /**
     * When this template was last synced to the source guild.
     */
    updated_at: string;
    /**
     * The ID of the guild this template is based on.
     */
    source_guild_id: string;
    /**
     * The guild snapshot this template contains.
     */
    serialized_source_guild: Partial<GuildStructure>;
    /**
     * Whether the template has unsynced changes.
     */
    is_dirty: boolean|null;
}
