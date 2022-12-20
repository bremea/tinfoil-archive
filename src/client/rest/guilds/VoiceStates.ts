import * as APITypes from "discord-api-types/v10";
import BaseAPI from "../Base.js";

class VoiceStates extends BaseAPI {
  /** Modify this user's voice state */
  modifyMe = (guildID: APITypes.Snowflake, options: APITypes.RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody): Promise<void> =>
    this.client.request(`/guilds/${guildID}/voice-states/@me`, "PATCH", options);
  /** Modify a user's voice state */
  modify = (guildID: APITypes.Snowflake, userID: APITypes.Snowflake, options: APITypes.RESTPatchAPIGuildVoiceStateUserJSONBody): Promise<void> =>
    this.client.request(`/guilds/${guildID}/voice-states/${userID}`, "PATCH", options);
}

export default VoiceStates;
