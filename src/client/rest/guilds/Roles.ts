import * as APITypes from "discord-api-types/v10.js";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class GuildRoles extends BaseAPI {
  /** Get all roles */
  getAll = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildRolesResult> => this.client.request(`/guilds/${guildID}/roles`, "GET");
  /** Create role */
  new = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildRoleJSONBody>): Promise<APITypes.RESTPostAPIGuildRoleResult> =>
    this.client.request(`/guilds/${guildID}/roles`, "POST", options);
}

export default GuildRoles;
