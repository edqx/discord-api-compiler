/**
 * https://discord.com/developers/docs/resources/guild/template#json-params
 */
export interface CreateGuildfromGuildTemplateJsonParams {
    /**
     * Name of the guild (2-100 characters).
     */
    name: string;
    /**
     * Base64 128x128 image for the guild icon.
     */
    icon?: string;
}
