import {
  APIAuditLog,
  APIAutoModerationRule,
  RESTGetAPIAuditLogQuery,
  RESTGetAPIAutoModerationRuleResult,
  RESTGetAPIAutoModerationRulesResult,
  RESTGetAPIGuildEmojiResult,
  RESTGetAPIGuildEmojisResult,
  RESTPatchAPIAutoModerationRuleJSONBody,
  RESTPatchAPIAutoModerationRuleResult,
  RESTPatchAPIGuildEmojiJSONBody,
  RESTPostAPIAutoModerationRuleJSONBody,
  RESTPostAPIGuildEmojiJSONBody,
  Snowflake,
} from "discord-api-types/v10.js";
import { WithAuditReason } from "../../types/RestTypes.js";
import BaseAPI from "./Base.js";

class GuildsAPI extends BaseAPI {
  // Get Audit Log
  getAuditLog = (guildID: Snowflake, options: RESTGetAPIAuditLogQuery): Promise<APIAuditLog> => this.client.request(`/guilds/${guildID}/audit-logs`, "GET", options);

  // Auto mod API
  public autoMod: AutoModeration = new AutoModeration(this.client);

  // Emoji API
  public emojis: Emojis = new Emojis(this.client);
}

class AutoModeration extends BaseAPI {
  // List rules
  getAllRules = (guildID: Snowflake): Promise<RESTGetAPIAutoModerationRulesResult> => this.client.request(`/guilds/${guildID}/auto-moderation/rules`, "GET");
  // Get rule
  getRule = (guildID: Snowflake, ruleID: Snowflake): Promise<RESTGetAPIAutoModerationRuleResult> => this.client.request(`/guilds/${guildID}/auto-moderation/rules/${ruleID}`, "GET");
  // Create rule
  newRule = (guildID: Snowflake, options: WithAuditReason<RESTPostAPIAutoModerationRuleJSONBody>): Promise<APIAutoModerationRule> =>
    this.client.request(`/guilds/${guildID}/auto-moderation/rules`, "POST", options);
  // Modify rule
  modifyRule = (guildID: Snowflake, ruleID: Snowflake, options: WithAuditReason<RESTPatchAPIAutoModerationRuleJSONBody>): Promise<RESTPatchAPIAutoModerationRuleResult> =>
    this.client.request(`/guilds/${guildID}/auto-moderation/rules/${ruleID}`, "PATCH", options);
  // Delete rule
  deleteRule = (guildID: Snowflake, ruleID: Snowflake, options: WithAuditReason<{}>): Promise<RESTPatchAPIAutoModerationRuleResult> =>
    this.client.request(`/guilds/${guildID}/auto-moderation/rules/${ruleID}`, "DELETE", options);
}

class Emojis extends BaseAPI {
  // List emojis
  getAll = (guildID: Snowflake): Promise<RESTGetAPIGuildEmojisResult> => this.client.request(`/guilds/${guildID}/emojis`, "GET");
  // Get emoji
  get = (guildID: Snowflake, emojiID: Snowflake): Promise<RESTGetAPIGuildEmojiResult> => this.client.request(`/guilds/${guildID}/emojis/${emojiID}`, "GET");
  // Create emoji
  new = (guildID: Snowflake, options: WithAuditReason<RESTPostAPIGuildEmojiJSONBody>): Promise<RESTGetAPIGuildEmojiResult> => this.client.request(`/guilds/${guildID}/emojis`, "POST", options);
  // Modify emoji
  modify = (guildID: Snowflake, emojiID: Snowflake, options: WithAuditReason<RESTPatchAPIGuildEmojiJSONBody>): Promise<RESTGetAPIGuildEmojiResult> =>
    this.client.request(`/guilds/${guildID}/emojis/${emojiID}`, "PATCH", options);
  // Delete emoji
  delete = (guildID: Snowflake, emojiID: Snowflake, options: WithAuditReason<{}>): Promise<undefined> => this.client.request(`/guilds/${guildID}/emojis/${emojiID}`, "DELETE", options);
}

export default GuildsAPI;
