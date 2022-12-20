import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../../types/RestTypes.js";
import BaseAPI from "../../Base.js";

class CurrentGuildMember extends BaseAPI {
  /** Modify current member */
  modify = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPICurrentGuildMemberJSONBody>): Promise<APITypes.RESTPatchAPIGuildMemberResult> =>
    this.client.request(`/guilds/${guildID}/members/@me`, "PATCH", options);
  /** Modify current member nickname
   * @deprecated Use guilds.members.me.modify() instead
   */
  modifyNickname = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPICurrentGuildMemberNicknameJSONBody>): Promise<APITypes.RESTPatchAPICurrentGuildMemberNicknameResult> =>
    this.client.request(`/guilds/${guildID}/members/@me/nick`, "PATCH", options);
}

export default CurrentGuildMember;
