import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class WelcomeScreen extends BaseAPI {
  /** Get welcome screen */
  get = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildWelcomeScreenResult> => this.client.request(`/guilds/${guildID}/welcome-screen`, "GET");
  /** Modify welcome screen */
  modify = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildWelcomeScreenJSONBody>): Promise<APITypes.RESTPatchAPIGuildWelcomeScreenResult> =>
    this.client.request(`/guilds/${guildID}/welcome-screen`, "PATCH", options);
}

export default WelcomeScreen;
