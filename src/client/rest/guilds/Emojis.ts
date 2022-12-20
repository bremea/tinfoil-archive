import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class Emojis extends BaseAPI {
  /** List emojis */
  getAll = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildEmojisResult> => this.client.request(`/guilds/${guildID}/emojis`, "GET");
  /** Get emoji */
  get = (guildID: APITypes.Snowflake, emojiID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildEmojiResult> => this.client.request(`/guilds/${guildID}/emojis/${emojiID}`, "GET");
  /** Create emoji */
  new = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildEmojiJSONBody>): Promise<APITypes.RESTGetAPIGuildEmojiResult> =>
    this.client.request(`/guilds/${guildID}/emojis`, "POST", options);
  /** Modify emoji */
  modify = (guildID: APITypes.Snowflake, emojiID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildEmojiJSONBody>): Promise<APITypes.RESTGetAPIGuildEmojiResult> =>
    this.client.request(`/guilds/${guildID}/emojis/${emojiID}`, "PATCH", options);
  /** Delete emoji */
  delete = (guildID: APITypes.Snowflake, emojiID: APITypes.Snowflake, options?: WithAuditReason<{}>): Promise<void> => this.client.request(`/guilds/${guildID}/emojis/${emojiID}`, "DELETE", options);
}

export default Emojis;
