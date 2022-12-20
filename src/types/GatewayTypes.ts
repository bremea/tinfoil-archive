import * as APITypes from "discord-api-types/v10";
import TypedEmitter from "typed-emitter";

export type GatewayClientOptions = {
  intents?: APITypes.GatewayIntentBits[];
  identifyProperties?: APITypes.GatewayIdentifyProperties;
};

export type GatewayClientEvents = TypedEmitter<{
  HELLO: (data?: APITypes.GatewayHelloData) => void;
  READY: (data?: APITypes.GatewayReadyDispatchData) => void;
  RESUMED: (data?: APITypes.GatewayResumeData) => void;
  RECONNECT: () => void;
  INVALID_SESSION: (data?: APITypes.GatewayInvalidSessionData) => void;
  APPLICATION_COMMAND_PERMISSIONS_UPDATE: (data?: APITypes.GatewayApplicationCommandPermissionsUpdateDispatchData) => void;
  AUTO_MODERATION_RULE_CREATE: (data?: APITypes.GatewayAutoModerationRuleCreateDispatchData) => void;
  AUTO_MODERATION_RULE_UPDATE: (data?: APITypes.GatewayAutoModerationRuleUpdateDispatchData) => void;
  AUTO_MODERATION_RULE_DELETE: (data?: APITypes.GatewayAutoModerationRuleDeleteDispatchData) => void;
  AUTO_MODERATION_ACTION_EXECUTION: (data?: APITypes.GatewayAutoModerationActionExecutionDispatchData) => void;
  CHANNEL_CREATE: (data?: APITypes.GatewayChannelCreateDispatchData) => void;
  CHANNEL_UPDATE: (data?: APITypes.GatewayChannelUpdateDispatchData) => void;
  CHANNEL_DELETE: (data?: APITypes.GatewayChannelUpdateDispatchData) => void;
  CHANNEL_PINS_UPDATE: (data?: APITypes.GatewayChannelPinsUpdateDispatchData) => void;
  THREAD_CREATE: (data?: APITypes.GatewayThreadCreateDispatchData) => void;
  THREAD_UPDATE: (data?: APITypes.GatewayThreadUpdateDispatchData) => void;
  THREAD_DELETE: (data?: APITypes.GatewayThreadDeleteDispatchData) => void;
  THREAD_LIST_SYNC: (data?: APITypes.GatewayThreadListSyncDispatchData) => void;
  THREAD_MEMBER_UPDATE: (data?: APITypes.GatewayThreadMemberUpdateDispatchData) => void;
  THREAD_MEMBERS_UPDATE: (data?: APITypes.GatewayThreadMembersUpdateDispatchData) => void;
  GUILD_CREATE: (data?: APITypes.GatewayGuildCreateDispatchData) => void;
  GUILD_UPDATE: (data?: APITypes.GatewayGuildUpdateDispatchData) => void;
  GUILD_DELETE: (data?: APITypes.GatewayGuildDeleteDispatchData) => void;
  GUILD_BAN_ADD: (data?: APITypes.GatewayGuildBanAddDispatchData) => void;
  GUILD_BAN_REMOVE: (data?: APITypes.GatewayGuildBanRemoveDispatchData) => void;
  GUILD_EMOJIS_UPDATE: (data?: APITypes.GatewayGuildEmojisUpdateDispatchData) => void;
  GUILD_STICKERS_UPDATE: (data?: APITypes.GatewayGuildStickersUpdateDispatchData) => void;
  GUILD_INTEGRATIONS_UPDATE: (data?: APITypes.GatewayGuildIntegrationsUpdateDispatchData) => void;
  GUILD_MEMBER_ADD: (data?: APITypes.GatewayGuildMemberAddDispatchData) => void;
  GUILD_MEMBER_REMOVE: (data?: APITypes.GatewayGuildMemberRemoveDispatchData) => void;
  GUILD_MEMBER_UPDATE: (data?: APITypes.GatewayGuildMemberUpdateDispatchData) => void;
  GUILD_MEMBERS_CHUNK: (data?: APITypes.GatewayGuildMembersChunkDispatchData) => void;
  GUILD_ROLE_CREATE: (data?: APITypes.GatewayGuildRoleCreateDispatchData) => void;
  GUILD_ROLE_UPDATE: (data?: APITypes.GatewayGuildRoleUpdateDispatchData) => void;
  GUILD_ROLE_DELETE: (data?: APITypes.GatewayGuildRoleDeleteDispatchData) => void;
  GUILD_SCHEDULED_EVENT_CREATE: (data?: APITypes.GatewayGuildScheduledEventCreateDispatchData) => void;
  GUILD_SCHEDULED_EVENT_UPDATE: (data?: APITypes.GatewayGuildScheduledEventUpdateDispatchData) => void;
  GUILD_SCHEDULED_EVENT_DELETE: (data?: APITypes.GatewayGuildScheduledEventDeleteDispatchData) => void;
  GUILD_SCHEDULED_EVENT_USER_ADD: (data?: APITypes.GatewayGuildScheduledEventUserAddDispatchData) => void;
  GUILD_SCHEDULED_EVENT_USER_REMOVE: (data?: APITypes.GatewayGuildScheduledEventUserRemoveDispatchData) => void;
  INTEGRATION_CREATE: (data?: APITypes.GatewayIntegrationCreateDispatchData) => void;
  INTEGRATION_DELETE: (data?: APITypes.GatewayIntegrationDeleteDispatchData) => void;
  INTEGRATION_UPDATE: (data?: APITypes.GatewayIntegrationDeleteDispatchData) => void;
  INTERACTION_CREATE: (data?: APITypes.GatewayInteractionCreateDispatchData) => void;
  INVITE_CREATE: (data?: APITypes.GatewayInviteCreateDispatchData) => void;
  INVITE_DELETE: (data?: APITypes.GatewayInviteDeleteDispatchData) => void;
  MESSAGE_CREATE: (data?: APITypes.GatewayMessageCreateDispatchData) => void;
  MESSAGE_UPDATE: (data?: APITypes.GatewayMessageUpdateDispatchData) => void;
  MESSAGE_DELETE: (data?: APITypes.GatewayMessageDeleteDispatchData) => void;
  MESSAGE_DELETE_BULK: (data?: APITypes.GatewayMessageDeleteBulkDispatchData) => void;
  MESSAGE_REACTION_ADD: (data?: APITypes.GatewayMessageReactionAddDispatchData) => void;
  MESSAGE_REACTION_REMOVE: (data?: APITypes.GatewayMessageReactionRemoveDispatchData) => void;
  MESSAGE_REACTION_REMOVE_ALL: (data?: APITypes.GatewayMessageReactionRemoveAllDispatchData) => void;
  MESSAGE_REACTION_REMOVE_EMOJI: (data?: APITypes.GatewayMessageReactionRemoveEmojiDispatchData) => void;
  PRESENCE_UPDATE: (data?: APITypes.GatewayPresenceUpdateData) => void;
  STAGE_INSTANCE_CREATE: (data?: APITypes.GatewayStageInstanceCreateDispatchData) => void;
  STAGE_INSTANCE_UPDATE: (data?: APITypes.GatewayStageInstanceUpdateDispatchData) => void;
  STAGE_INSTANCE_DELETE: (data?: APITypes.GatewayStageInstanceDeleteDispatchData) => void;
  TYPING_START: (data?: APITypes.GatewayTypingStartDispatchData) => void;
  USER_UPDATE: (data?: APITypes.GatewayUserUpdateDispatchData) => void;
  VOICE_STATE_UPDATE: (data?: APITypes.GatewayVoiceStateUpdateData) => void;
  VOICE_SERVER_UPDATE: (data?: APITypes.GatewayVoiceServerUpdateDispatchData) => void;
  WEBHOOKS_UPDATE: (data?: APITypes.GatewayWebhooksUpdateDispatchData) => void;
}>;
