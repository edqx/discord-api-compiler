/**
 * https://discord.com/developers/docs/resources/guild/template#json-params
 */
export interface ModifyGuildTemplateJsonParams {
    /**
     * Name of the template (1-100 characters).
     */
    name?: string;
    /**
     * Description for the template (0-120 characters).
     */
    description?: string|null;
}
