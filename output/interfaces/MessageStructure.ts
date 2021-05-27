import { MessageInteraction } from "../enums/MessageInteraction";

import { ApplicationStructure } from "./ApplicationStructure";
import { AttachmentStructure } from "./AttachmentStructure";
import { ChannelMentionStructure } from "./ChannelMentionStructure";
import { EmbedStructure } from "./EmbedStructure";
import { GuildMemberStructure } from "./GuildMemberStructure";
import { MessageActivityStructure } from "./MessageActivityStructure";
import { MessageReferenceStructure } from "./MessageReferenceStructure";
import { MessageStickerStructure } from "./MessageStickerStructure";
import { ReactionStructure } from "./ReactionStructure";
import { RoleStructure } from "./RoleStructure";
import { UserStructure } from "./UserStructure";

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-structure
 * 
 * \* The author object follows the structure of the user object, but is only a 
 * valid user in the case where the message is generated by a user or bot user. If 
 * the message is generated by a webhook, the author object corresponds to the 
 * webhook's id, username, and avatar. You can tell if a message is generated by a 
 * webhook by checking for the `webhook_id` on the message object.
 * \*\* The member object exists in 
 * [MESSAGE_CREATE](#DOCS_TOPICS_GATEWAY/message-create) and 
 * [MESSAGE_UPDATE](#DOCS_TOPICS_GATEWAY/message-update) events from text-based 
 * guild channels. This allows bots to obtain real-time member data without 
 * requiring bots to store member state in memory.
 * \*\*\* The user objects in the mentions array will only have the partial 
 * `member` field present in [MESSAGE_CREATE](#DOCS_TOPICS_GATEWAY/message-create) 
 * and [MESSAGE_UPDATE](#DOCS_TOPICS_GATEWAY/message-update) events from text-based 
 * guild channels.
 * \*\*\*\* Not all channel mentions in a message will appear in 
 * `mention_channels`. Only textual channels that are visible to everyone in a 
 * lurkable guild will ever be included. Only crossposted messages (via Channel 
 * Following) currently include `mention_channels` at all. If no mentions in the 
 * message meet these requirements, this field will not be sent.
 * \*\*\*\*\* This field is only returned for messages with a `type` of `19` 
 * (REPLY) or `21` (THREAD_STARTER_MESSAGE). If the message is a reply but the 
 * `referenced_message` field is not present, the backend did not attempt to fetch 
 * the message that was being replied to, so its state is unknown. If the field 
 * exists but is null, the referenced message was deleted.
 */
export interface MessageStructure {
    /**
     * Id of the message.
     */
    id: string;
    /**
     * Id of the channel the message was sent in.
     */
    channel_id: string;
    /**
     * Id of the guild the message was sent in.
     */
    guild_id?: string;
    /**
     * The author of this message (not guaranteed to be a valid user, see below).
     */
    author: UserStructure;
    /**
     * Member properties for this message's author.
     */
    member?: Partial<GuildMemberStructure>;
    /**
     * Contents of the message.
     */
    content: string;
    /**
     * When this message was sent.
     */
    timestamp: string;
    /**
     * When this message was edited (or null if never).
     */
    edited_timestamp: string|null;
    /**
     * Whether this was a TTS message.
     */
    tts: boolean;
    /**
     * Whether this message mentions everyone.
     */
    mention_everyone: boolean;
    /**
     * Users specifically mentioned in the message.
     */
    mentions: Partial<UserStructure>[];
    /**
     * Roles specifically mentioned in this message.
     */
    mention_roles: RoleStructure[];
    /**
     * Channels specifically mentioned in this message.
     */
    mention_channels?: ChannelMentionStructure[];
    /**
     * Any attached files.
     */
    attachments: AttachmentStructure[];
    /**
     * Any embedded content.
     */
    embeds: EmbedStructure[];
    /**
     * Reactions to the message.
     */
    reactions?: ReactionStructure[];
    /**
     * Used for validating a message was sent.
     */
    nonce?: number|string;
    /**
     * Whether this message is pinned.
     */
    pinned: boolean;
    /**
     * If the message is generated by a webhook, this is the webhook's id.
     */
    webhook_id?: string;
    /**
     * [type of 
     * message](https://discord.com/developers/docs/resources/channel#message-object-message-types).
     */
    type: number;
    /**
     * Sent with Rich Presence-related chat embeds.
     */
    activity?: MessageActivityStructure;
    /**
     * Sent with Rich Presence-related chat embeds.
     */
    application?: Partial<ApplicationStructure>;
    /**
     * If the message is a response to an 
     * [Interaction](https://discord.com/developers/docs/interactions/slash/commands#), 
     * this is the id of the interaction's application.
     */
    application_id?: string;
    /**
     * Data showing the source of a crosspost, channel follow add, pin, or reply 
     * message.
     */
    message_reference?: MessageReferenceStructure;
    /**
     * [message 
     * flags](https://discord.com/developers/docs/resources/channel#message-object-message-flags) 
     * combined as a 
     * [bitfield](https://discord.com/developers/ttps:##en.wikipedia.org#wiki#bit/field).
     */
    flags?: number;
    /**
     * The stickers sent with the message (bots currently can only receive messages 
     * with stickers, not send).
     */
    stickers?: MessageStickerStructure[];
    /**
     * The message associated with the message_reference.
     */
    referenced_message?: MessageStructure|null;
    /**
     * Sent if the message is a response to an 
     * [Interaction](https://discord.com/developers/docs/interactions/slash/commands#).
     */
    interaction?: MessageInteraction;
    /**
     * The thread that was started from this message, includes [thread 
     * member](https://discord.com/developers/docs/resources/channel#thread-member-object) 
     * object.
     */
    thread?: any;
    /**
     * Sent if the message contains components like buttons, action rows, or other 
     * interactive components.
     */
    components?: any;
}
