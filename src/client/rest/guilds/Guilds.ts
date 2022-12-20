import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";
import AutoModeration from "./AutoModeration.js";
import Emojis from "./Emojis.js";
import GuildChannels from "./GuildChannels.js";
import GuildIntegrations from "./GuildIntegrations.js";
import GuildStickers from "./GuildStickers.js";
import GuildTemplate from "./GuildTemplate.js";
import GuildMembers from "./members/Members.js";
import Prune from "./Prune.js";
import GuildRoles from "./Roles.js";
import ScheduledEvents from "./ScheduledEvents.js";
import Threads from "./Threads.js";
import VoiceStates from "./VoiceStates.js";
import WelcomeScreen from "./WelcomeScreen.js";
import Widget from "./Widget.js";

class GuildsAPI extends BaseAPI {
  /** Create guild */
  new = (options: APITypes.RESTPostAPIGuildsJSONBody): Promise<APITypes.APIGuild> => this.client.request(`/guilds`, "POST", options);
  /** Get guild */
  get = (guildID: APITypes.Snowflake): Promise<APITypes.APIGuild> => this.client.request(`/guilds/${guildID}`, "GET");
  /** Get guild preview */
  getPreview = (guildID: APITypes.Snowflake): Promise<APITypes.APIGuildPreview> => this.client.request(`/guilds/${guildID}/preview`, "GET");
  /** Modify guild */
  modify = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPatchAPIGuildJSONBody>): Promise<APITypes.APIGuild> => this.client.request(`/guilds/${guildID}`, "PATCH", options);
  /** Delete guild */
  delete = (guildID: APITypes.Snowflake): Promise<void> => this.client.request(`/guilds/${guildID}`, "DELETE");

  /** Get template */
  getTemplate = (templateCode: string): Promise<APITypes.APITemplate> => this.client.request(`/guilds/templates/${templateCode}`, "GET");
  /** Create guild from template */
  newFromTemplate = (templateCode: string, options: APITypes.RESTPostAPITemplateCreateGuildJSONBody): Promise<APITypes.APIGuild> =>
    this.client.request(`/guilds/templates/${templateCode}`, "POST", options);

  /** Get Audit Log */
  getAuditLog = (guildID: APITypes.Snowflake, options: APITypes.RESTGetAPIAuditLogQuery): Promise<APITypes.APIAuditLog> => this.client.request(`/guilds/${guildID}/audit-logs`, "GET", options);

  /** Modify MFA level */
  modifyMFA = (guildID: APITypes.Snowflake, options: WithAuditReason<APITypes.RESTPostAPIGuildsMFAJSONBody>): Promise<APITypes.RESTPostAPIGuildsMFAResult> =>
    this.client.request(`/guilds/${guildID}/mfa`, "POST", options);

  /** Get voice regions */
  getVoiceRegions = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildVoiceRegionsResult> => this.client.request(`/guilds/${guildID}/regions`, "GET");

  /** Get webhooks */
  getWebhooks = (guildID: APITypes.Snowflake): Promise<APITypes.RESTGetAPIGuildWebhooksResult> => this.client.request(`/guilds/${guildID}/webhooks`, "GET");

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

  /** Template API */
  public templates: GuildTemplate = new GuildTemplate(this.client);

  /** Integrations API */
  public integrations: GuildIntegrations = new GuildIntegrations(this.client);

  /** Events API */
  public scheduledEvents: ScheduledEvents = new ScheduledEvents(this.client);

  /** Guild stickers API */
  public stickers: GuildStickers = new GuildStickers(this.client);

  /** Widget API */
  public widget: Widget = new Widget(this.client);

  /** Welcome screen API */
  public welcomeScreen: WelcomeScreen = new WelcomeScreen(this.client);

  /** Voice states API */
  public voiceStates: VoiceStates = new VoiceStates(this.client);

  /** Role API */
  public roles: GuildRoles = new GuildRoles(this.client);
}

export default GuildsAPI;
