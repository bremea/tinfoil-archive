import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class Widget extends BaseAPI {
  /** Get widget settings */
  getSettings = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildWidgetSettingsResult> => this.client.request(`/guilds/${guildID}/widget`, "GET");
  /** Modify widget settings */
  modify = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildWidgetSettingsJSONBody>): Promise<APITypes.RESTPatchAPIGuildWidgetSettingsResult> =>
    this.client.request(`/guilds/${guildID}/widget`, "PATCH", options);
  /** Get widget */
  get = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildWidgetJSONResult> => this.client.request(`/guilds/${guildID}/widget.json`, "GET");
  /** Get widget image */
  getImage = (guildID: APITypes.Snowflake, options: APITypes.RESTGetAPIGuildWidgetImageQuery): Promise<APITypes.RESTGetAPIGuildWidgetImageResult> =>
    this.client.request(`/guilds/${guildID}/widget.png`, "GET", options);
}

export default Widget;
