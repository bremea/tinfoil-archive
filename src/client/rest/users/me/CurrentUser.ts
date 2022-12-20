import * as APITypes from "discord-api-types/v10";
import BaseAPI from "../../Base.js";
import GuildManager from "./CurrentUserGuilds.js";

class Me extends BaseAPI {
  /** Fetch current user */
  get = (): Promise<APITypes.APIUser> => this.client.request("/users/@me", "GET");
  /** Modify current user */
  modify = (options: APITypes.RESTPatchAPICurrentUserJSONBody): Promise<APITypes.APIUser> => this.client.request("/users/@me", "PATCH", options);

  /** Current user guild API */
  public guilds: GuildManager = new GuildManager(this.client);

  /** Create DM */
  newDM = (options: APITypes.RESTPostAPICurrentUserCreateDMChannelJSONBody): Promise<APITypes.APIDMChannel> => this.client.request(`/users/@me/channels`, "POST", options);
  /** Get connections */
  connections = (): Promise<APITypes.RESTGetAPICurrentUserConnectionsResult> => this.client.request(`/users/@me/connections`, "GET");
}

export default Me;