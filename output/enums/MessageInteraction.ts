/**
 * https://discord.com/developers/docs/interactions/slash/commands#messageinteraction
 * 
 * This is sent on the [message object](#DOCS_RESOURCES_CHANNEL/message-object) 
 * when the message is a response to an Interaction.
 */
export enum MessageInteraction {
    Id = snowflake,
    Type = InteractionType,
    Name = string,
    User = [user object](#DOCS_RESOURCES_USER/user-object)
}
