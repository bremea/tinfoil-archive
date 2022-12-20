import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class Prune extends BaseAPI {
  /** Gets a count of users removed in an actual prune */
  simulate = (guildID: APITypes.Snowflake, options: APITypes.RESTGetAPIGuildPruneCountQuery): Promise<APITypes.RESTGetAPIGuildPruneCountResult> =>
    this.client.request(`/guilds/${guildID}/prune`, "GET", options);
  /** Begins a prune operation */
  begin = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildPruneJSONBody>): Promise<APITypes.RESTPostAPIGuildPruneResult> =>
    this.client.request(`/guilds/${guildID}/prune`, "POST", options);
}

export default Prune;
