import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class GuildRoles extends BaseAPI {
  /** Get all roles */
  getAll = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildRolesResult> => this.client.request(`/guilds/${guildID}/roles`, "GET");
  /** Create role */
  new = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildRoleJSONBody>): Promise<APITypes.RESTPostAPIGuildRoleResult> =>
    this.client.request(`/guilds/${guildID}/roles`, "POST", options);
  /** Modify role positions */
  modifyPositions = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildRolePositionsJSONBody>): Promise<APITypes.RESTPatchAPIGuildRolePositionsResult> =>
    this.client.request(`/guilds/${guildID}/roles`, "PATCH", options);
  /** Modify role */
  modify = (guildID: APITypes.Snowflake, roleID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildRoleJSONBody>): Promise<APITypes.RESTPatchAPIGuildRoleResult> =>
    this.client.request(`/guilds/${guildID}/roles/${roleID}`, "PATCH", options);
  /** Delete role */
  delete = (guildID: APITypes.Snowflake, roleID: APITypes.Snowflake, options: WithAuditReason<{}>): Promise<void> => this.client.request(`/guilds/${guildID}/roles/${roleID}`, "DELETE", options);
}

export default GuildRoles;
