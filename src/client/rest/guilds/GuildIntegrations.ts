import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class GuildIntegrations extends BaseAPI {
  /** Gets integrations */
  get = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildIntegrationsResult> => this.client.request(`/guilds/${guildID}/integrations`, "GET");
  /** Deletes integration */
  delete = (guildID: APITypes.Snowflake, integrationID: APITypes.Snowflake, options: WithAuditReason<{}>): Promise<void> =>
    this.client.request(`/guilds/${guildID}/integrations/${integrationID}`, "DELETE", options);
}

export default GuildIntegrations;
