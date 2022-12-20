import * as APITypes from "discord-api-types/v10";
import BaseAPI from "../Base.js";

class Threads extends BaseAPI {
  /** Get all active threads */
  getAllActive = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildThreadsResult> => this.client.request(`/guilds/${guildID}/threads/active`, "GET");
}

export default Threads;