import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../../types/RestTypes.js";
import BaseAPI from "../../Base.js";

class GuildMemberRoles extends BaseAPI {
  /** Add role to member */
  add = (guildID: APITypes.Snowflake, memberID: APITypes.Snowflake, roleID: APITypes.Snowflake, options?: WithAuditReason<{}>): Promise<void> =>
    this.client.request(`/guilds/${guildID}/members/${memberID}/roles/${roleID}`, "PUT", options);
  /** Remove role from member */
  remove = (guildID: APITypes.Snowflake, memberID: APITypes.Snowflake, roleID: APITypes.Snowflake, options?: WithAuditReason<{}>): Promise<void> =>
    this.client.request(`/guilds/${guildID}/members/${memberID}/roles/${roleID}`, "DELETE", options);
}

export default GuildMemberRoles;
