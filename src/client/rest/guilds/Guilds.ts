import * as APITypes from "discord-api-types/v10.js";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";
import AutoModeration from "./AutoModeration.js";
import Emojis from "./Emojis.js";
import GuildChannels from "./GuildChannels.js";
import GuildIntegrations from "./GuildIntegrations.js";
import GuildMembers from "./members/Members.js";
import Prune from "./Prune.js";
import GuildRoles from "./Roles.js";
import Threads from "./Threads.js";
import WelcomeScreen from "./WelcomeScreen.js";
import Widget from "./Widget.js";

class GuildsAPI extends BaseAPI {
  /** Get guild */
  new = (options: APITypes.RESTPostAPIGuildsJSONBody): Promise<APITypes.APIGuild> => this.client.request(`/guilds`, "POST", options);
  /** Get guild */
  get = (guildID: APITypes.Snowflake): Promise<APITypes.APIGuild> => this.client.request(`/guilds/${guildID}`, "GET");
  /** Get guild preview */
  getPreview = (guildID: APITypes.Snowflake): Promise<APITypes.APIGuildPreview> => this.client.request(`/guilds/${guildID}/preview`, "GET");
  /** Modify guild */
  modify = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildJSONBody>): Promise<APITypes.APIGuild> => this.client.request(`/guilds/${guildID}`, "PATCH", options);
  /** Delete guild */
  delete = (guildID: APITypes.Snowflake): Promise<void> => this.client.request(`/guilds/${guildID}`, "DELETE");

  /** Get Audit Log */
  getAuditLog = (guildID: APITypes.Snowflake, options: APITypes.RESTGetAPIAuditLogQuery): Promise<APITypes.APIAuditLog> => this.client.request(`/guilds/${guildID}/audit-logs`, "GET", options);

  /** Modify MFA level */
  modifyMFA = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildsMFAJSONBody>): Promise<APITypes.RESTPostAPIGuildsMFAResult> =>
    this.client.request(`/guilds/${guildID}/mfa`, "POST", options);

  /** Get voice regions */
  getVoiceRegions = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildVoiceRegionsResult> => this.client.request(`/guilds/${guildID}/regions`, "GET");

  /** Get invites */
  getInvites = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildInvitesResult> => this.client.request(`/guilds/${guildID}/invites`, "GET");
  /** Get vanity URL */
  getVanityURL = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildVanityUrlResult> => this.client.request(`/guilds/${guildID}/vanity-url`, "GET");

  /** Guild channel API */
  public channels: GuildChannels = new GuildChannels(this.client);

  /** Threads API */
  public threads: Threads = new Threads(this.client);

  /** Member API */
  public members: GuildMembers = new GuildMembers(this.client);

  /** Auto mod API */
  public autoMod: AutoModeration = new AutoModeration(this.client);

  /** Emoji API */
  public emojis: Emojis = new Emojis(this.client);

  /** Prune API */
  public prune: Prune = new Prune(this.client);

  /** Integrations API */
  public integrations: GuildIntegrations = new GuildIntegrations(this.client);

  /** Widget API */
  public widget: Widget = new Widget(this.client);

  /** Welcome Screen API */
  public welcomeScreen: WelcomeScreen = new WelcomeScreen(this.client);

  /** Role API */
  public roles: GuildRoles = new GuildRoles(this.client);
}

export default GuildsAPI;
