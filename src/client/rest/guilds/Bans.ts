import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class GuildBans extends BaseAPI {
  /** Get all bans */
  getAll = (guildID: APITypes.Snowflake, options: APITypes.RESTGetAPIGuildBansQuery): Promise<APITypes.RESTGetAPIGuildBansResult> => this.client.request(`/guilds/${guildID}/bans`, "GET", options);
  /** Get ban */
  get = (guildID: APITypes.Snowflake, userID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildBanResult> => this.client.request(`/guilds/${guildID}/bans/${userID}`, "GET");
  /** Ban a user */
  create = (guildID: APITypes.Snowflake, userID: APITypes.Snowflake, options?: WithAuditReason<APITypes.RESTPutAPIGuildBanJSONBody>): Promise<void> =>
    this.client.request(`/guilds/${guildID}/bans/${userID}`, "PUT", options);
  /** Un-ban a user */
  delete = (guildID: APITypes.Snowflake, userID: APITypes.Snowflake, options?: WithAuditReason<{}>): Promise<void> => this.client.request(`/guilds/${guildID}/bans/${userID}`, "DELETE", options);
}

export default GuildBans;
