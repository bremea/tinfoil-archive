import * as APITypes from "discord-api-types/v10";
import { WithAuditReason } from "../../../types/RestTypes.js";
import BaseAPI from "../Base.js";

class ScheduledEvents extends BaseAPI {
  /** Get all scheduled events */
  getAll = (guildID: APITypes.Snowflake, options?: APITypes.RESTGetAPIGuildScheduledEventsQuery): Promise<APITypes.RESTGetAPIGuildScheduledEventsResult> =>
    this.client.request(`/guilds/${guildID}/scheduled-events`, "GET", options);
  /** Create event */
  new = (guildID: APITypes.Snowflake, options?: WithAuditReason<APITypes.RESTPostAPIGuildScheduledEventJSONBody>): Promise<APITypes.RESTPostAPIGuildScheduledEventResult> =>
    this.client.request(`/guilds/${guildID}/scheduled-events`, "POST", options);
  /** Get event */
  get = (guildID: APITypes.Snowflake, eventID: APITypes.Snowflake, options?: APITypes.RESTGetAPIGuildScheduledEventQuery): Promise<APITypes.RESTGetAPIGuildScheduledEventResult> =>
    this.client.request(`/guilds/${guildID}/scheduled-events/${eventID}`, "GET", options);
  /** Modify event */
  modify = (
    guildID: APITypes.Snowflake,
    eventID: APITypes.Snowflake,
    options?: WithAuditReason<APITypes.RESTPatchAPIGuildScheduledEventJSONBody>
  ): Promise<APITypes.RESTPatchAPIGuildScheduledEventResult> => this.client.request(`/guilds/${guildID}/scheduled-events/${eventID}`, "PATCH", options);
  /** Delete event */
  delete = (guildID: APITypes.Snowflake, eventID: APITypes.Snowflake): Promise<void> => this.client.request(`/guilds/${guildID}/scheduled-events/${eventID}`, "DELETE");
  /** Get event users */
  getUsers = (guildID: APITypes.Snowflake, eventID: APITypes.Snowflake, options?: APITypes.RESTGetAPIGuildScheduledEventUsersQuery): Promise<APITypes.RESTGetAPIGuildScheduledEventUsersResult> =>
    this.client.request(`/guilds/${guildID}/scheduled-events/${eventID}/users`, "GET", options);
}

export default ScheduledEvents;
