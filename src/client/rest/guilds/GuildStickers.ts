import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class GuildStickers extends BaseAPI {
  /** Get all stickers in guild */
  getAll = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildStickersResult> => this.client.request(`/guilds/${guildID}/stickers`, "GET");
  /** Get sticker in guild */
  get = (guildID: APITypes.Snowflake, stickerID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildStickerResult> => this.client.request(`/guilds/${guildID}/stickers/${stickerID}`, "GET");
  /** Add sticker to guild */
  new = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildStickerFormDataBody>): Promise<APITypes.RESTPostAPIGuildStickerResult> =>
    this.client.request(`/guilds/${guildID}/stickers`, "POST", options, true);
  /** Modify sticker to guild */
  modify = (guildID: APITypes.Snowflake, stickerID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildStickerJSONBody>): Promise<APITypes.RESTPatchAPIGuildStickerResult> =>
    this.client.request(`/guilds/${guildID}/stickers/${stickerID}`, "PATCH", options);
  /** Modify sticker to guild */
  delete = (guildID: APITypes.Snowflake, stickerID: APITypes.Snowflake, options: WithAuditReason<{}>): Promise<void> =>
    this.client.request(`/guilds/${guildID}/stickers/${stickerID}`, "DELETE", options);
}

export default GuildStickers;
