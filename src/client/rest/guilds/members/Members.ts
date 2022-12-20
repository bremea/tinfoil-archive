import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../../types/RestTypes.js";
import BaseAPI from "../../Base.js";
import GuildBans from "../Bans.js";
import CurrentGuildMember from "./CurrentGuildMember.js";
import GuildMemberRoles from "./GuildMemberRoles.js";

class GuildMembers extends BaseAPI {
  /** Get member */
  get = (guildID: APITypes.Snowflake, memberID: APITypes.Snowflake): Promise<APITypes.APIGuildMember> => this.client.request(`/guilds/${guildID}/members/${memberID}`, "GET");
  /** Get all members */
  getAll = (guildID: APITypes.Snowflake, options: APITypes.RESTGetAPIGuildMembersQuery): Promise<APITypes.RESTGetAPIGuildMembersResult> =>
    this.client.request(`/guilds/${guildID}/members`, "GET", options);
  /** Search members */
  search = (guildID: APITypes.Snowflake, options: APITypes.RESTGetAPIGuildMembersSearchQuery): Promise<APITypes.RESTGetAPIGuildMembersResult> =>
    this.client.request(`/guilds/${guildID}/members/search`, "GET", options);
  /** Add member */
  add = (guildID: APITypes.Snowflake, memberID: APITypes.Snowflake, options: APITypes.RESTPutAPIGuildMemberJSONBody): Promise<APITypes.RESTPutAPIGuildMemberResult> =>
    this.client.request(`/guilds/${guildID}/members/${memberID}`, "PUT", options);
  /** Modify member */
  modify = (guildID: APITypes.Snowflake, memberID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildMemberJSONBody>): Promise<APITypes.RESTPatchAPIGuildMemberResult> =>
    this.client.request(`/guilds/${guildID}/members/${memberID}`, "PATCH", options);
  /** Kick member from guild */
  remove = (guildID: APITypes.Snowflake, memberID: APITypes.Snowflake, options?: WithAuditReason<{}>): Promise<void> =>
    this.client.request(`/guilds/${guildID}/members/${memberID}`, "DELETE", options);

  /** Current member API */
  public me: CurrentGuildMember = new CurrentGuildMember(this.client);

  /** Guild member roles API */
  public roles: GuildMemberRoles = new GuildMemberRoles(this.client);

  /** Guild bans API */
  public bans: GuildBans = new GuildBans(this.client);
}

export default GuildMembers;
