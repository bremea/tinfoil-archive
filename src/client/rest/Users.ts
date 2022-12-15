import { RESTPatchAPICurrentUserJSONBody, RESTPostAPICurrentUserCreateDMChannelJSONBody, Snowflake } from "discord-api-types/v10";
import BaseAPI from "./Base.js";

class UsersAPI extends BaseAPI {
  public me: Me = new Me(this.client);

  get = (userID: Snowflake) => this.client.request(`/users/${userID}`, "GET");
}

class Me extends BaseAPI {
  // Fetch current user
  get = () => this.client.request("/users/@me", "GET");
  // Modify current user
  modify = (options: RESTPatchAPICurrentUserJSONBody) => this.client.request("/users/@me", "PATCH", options);

  // Current user guild API
  public guilds: GuildManager = new GuildManager(this.client);

  // Create DM
  newDM = (options: RESTPostAPICurrentUserCreateDMChannelJSONBody) => this.client.request(`/users/@me/channels`, "POST", options);
  // Get connections
  connections = () => this.client.request(`/users/@me/connections`, "GET");
}

class GuildManager extends BaseAPI {
  // Get current user guilds
  get = () => this.client.request("/users/@me/guilds", "GET");
  // Get guild member
  getMember = (guildID: Snowflake) => this.client.request(`/users/@me/guilds/${guildID}/member`, "GET");
  // Leave guild
  leave = (guildID: Snowflake) => this.client.request(`/users/@me/guilds/${guildID}`, "DELETE");
}

export default UsersAPI;