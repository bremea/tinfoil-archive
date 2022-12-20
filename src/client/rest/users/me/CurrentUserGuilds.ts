import * as APITypes from "discord-api-types/v10";
import BaseAPI from "../../Base.js";

class GuildManager extends BaseAPI {
  /** Get current user guilds */
  get = (): Promise<APITypes.APIGuild> => this.client.request("/users/@me/guilds", "GET");
  /** Get guild member */
  getMember = (guildID: APITypes.Snowflake): Promise<APITypes.APIGuildMember> => this.client.request(`/users/@me/guilds/${guildID}/member`, "GET");
  /** Leave guild */
  leave = (guildID: APITypes.Snowflake): Promise<void> => this.client.request(`/users/@me/guilds/${guildID}`, "DELETE");
}

export default GuildManager;