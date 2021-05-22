import { AllowedMentionsStructure } from "../interfaces/AllowedMentionsStructure";
import { AttachmentStructure } from "../interfaces/AttachmentStructure";
import { EmbedStructure } from "../interfaces/EmbedStructure";

/**
 * https://discord.com/developers/docs/resources/channel#json#form-params
 */
export interface EditMessageJsonParams {
    /**
     * The message contents (up to 2000 characters).
     */
    content: string;
    /**
     * Embedded `rich` content.
     */
    embed: EmbedStructure;
    /**
     * Edit the 
     * [flags](https://discord.com/developers/docs/resources/channel#message-object-message-flags) 
     * of a message (only `SUPPRESS_EMBEDS` can currently be set/unset).
     */
    flags: number;
    /**
     * The contents of the file being sent/edited.
     */
    file: string;
    /**
     * JSON encoded body of non-file params (multipart/form-data only).
     */
    payload_json: string;
    /**
     * Allowed mentions for the message.
     */
    allowed_mentions: AllowedMentionsStructure;
    /**
     * Attached files to keep.
     */
    attachments: AttachmentStructure[];
}
