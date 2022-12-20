import * as APITypes from "discord-api-types/v10";
import BaseAPI from "../Base.js";

class GuildTemplate extends BaseAPI {
  /** Get all templates in guild */
  getAll = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildTemplatesResult> => this.client.request(`/guilds/${guildID}/templates`, "GET");
  /** Create guild template */
  new = (guildID: APITypes.Snowflake, options: APITypes.RESTPostAPIGuildTemplatesJSONBody): Promise<APITypes.RESTPostAPIGuildTemplatesResult> =>
    this.client.request(`/guilds/${guildID}/templates`, "POST", options);
  /** Sync template to guild's current state */
  sync = (guildID: APITypes.Snowflake, templateCode: string): Promise<APITypes.RESTPutAPIGuildTemplateSyncResult> => this.client.request(`/guilds/${guildID}/templates/${templateCode}`, "PUT");
  /** Modify guild template */
  modify = (guildID: APITypes.Snowflake, templateCode: string, options: APITypes.RESTPatchAPIGuildTemplateJSONBody): Promise<APITypes.RESTPatchAPIGuildTemplateResult> =>
    this.client.request(`/guilds/${guildID}/templates/${templateCode}`, "PATCH", options);
  /** Delete guild template */
  delete = (guildID: APITypes.Snowflake, templateCode: string): Promise<void> => this.client.request(`/guilds/${guildID}/templates/${templateCode}`, "DELETE");
}

export default GuildTemplate;
