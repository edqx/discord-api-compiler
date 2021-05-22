import { AllowedMentionsStructure } from "../interfaces/AllowedMentionsStructure";
import { EmbedStructure } from "../interfaces/EmbedStructure";
import { MessageReferenceStructure } from "../interfaces/MessageReferenceStructure";

/**
 * https://discord.com/developers/docs/resources/channel#json#form-params
 */
export interface CreateMessageJsonParams {
    /**
     * The message contents (up to 2000 characters).
     */
    content: string;
    /**
     * True if this is a TTS message.
     */
    tts: boolean;
    /**
     * The contents of the file being sent.
     */
    file: string;
    /**
     * Embedded `rich` content.
     */
    embed: EmbedStructure;
    /**
     * JSON encoded body of non-file params.
     */
    payload_json: string;
    /**
     * Allowed mentions for the message.
     */
    allowed_mentions: AllowedMentionsStructure;
    /**
     * Include to make your message a reply.
     */
    message_reference: MessageReferenceStructure;
}
