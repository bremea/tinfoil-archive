import { APIAuditLog, RESTGetAPIAuditLogQuery, Snowflake } from "discord-api-types/v10.js";
import BaseAPI from "./Base.js";

class GuildsAPI extends BaseAPI {
  // Get Audit Log
  getAuditLog = (guildID: Snowflake, options: RESTGetAPIAuditLogQuery): Promise<APIAuditLog> => this.client.request(`/guilds/@${guildID}/audit-logs`, "GET", options);

  
}
