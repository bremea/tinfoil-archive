import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class AutoModeration extends BaseAPI {
  /** List rules */
  getAllRules = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIAutoModerationRulesResult> => this.client.request(`/guilds/${guildID}/auto-moderation/rules`, "GET");
  /** Get rule */
  getRule = (guildID: APITypes.Snowflake, ruleID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIAutoModerationRuleResult> =>
    this.client.request(`/guilds/${guildID}/auto-moderation/rules/${ruleID}`, "GET");
  /** Create rule */
  newRule = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIAutoModerationRuleJSONBody>): Promise<APITypes.APIAutoModerationRule> =>
    this.client.request(`/guilds/${guildID}/auto-moderation/rules`, "POST", options);
  /** Modify rule */
  modifyRule = (
    guildID: APITypes.Snowflake,
    ruleID: APITypes.Snowflake,
    options: WithAuditReason<APITypes.RESTPatchAPIAutoModerationRuleJSONBody>
  ): Promise<APITypes.RESTPatchAPIAutoModerationRuleResult> => this.client.request(`/guilds/${guildID}/auto-moderation/rules/${ruleID}`, "PATCH", options);
  /** Delete rule */
  deleteRule = (guildID: APITypes.Snowflake, ruleID: APITypes.Snowflake, options?: WithAuditReason<{}>): Promise<APITypes.RESTPatchAPIAutoModerationRuleResult> =>
    this.client.request(`/guilds/${guildID}/auto-moderation/rules/${ruleID}`, "DELETE", options);
}

export default AutoModeration;
