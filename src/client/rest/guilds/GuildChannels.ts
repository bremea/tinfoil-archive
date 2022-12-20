import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class GuildChannels extends BaseAPI {
  /** Get channels */
  getAll = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildChannelsResult> => this.client.request(`/guilds/${guildID}/channels`, "GET");
  /** Create channel */
  new = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildChannelJSONBody>): Promise<APITypes.RESTPostAPIGuildChannelResult> =>
    this.client.request(`/guilds/${guildID}/channels`, "POST", options);
  /** Modify channel positions */
  modifyPositions = (guildID: APITypes.Snowflake, options: APITypes.RESTPatchAPIGuildChannelPositionsJSONBody): Promise<void> => this.client.request(`/guilds/${guildID}/channels`, "PATCH", options);
}

export default GuildChannels;
