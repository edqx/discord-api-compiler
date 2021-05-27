import { AllowedMentionsStructure } from "../interfaces/AllowedMentionsStructure";
import { AttachmentStructure } from "../interfaces/AttachmentStructure";
import { EmbedStructure } from "../interfaces/EmbedStructure";

/**
 * https://discord.com/developers/docs/resources/webhook#json#form-params
 */
export interface EditWebhookMessageJsonParams {
    /**
     * The message contents (up to 2000 characters).
     */
    content: string;
    /**
     * Embedded `rich` content.
     */
    embeds: EmbedStructure[];
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
