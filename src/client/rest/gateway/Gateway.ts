import * as APITypes from "discord-api-types/v10";
import BaseAPI from "../Base.js";

class Gateway extends BaseAPI {
  /** Get gateway URL */
  get = (options?: APITypes.GatewayURLQuery): Promise<APITypes.RESTGetAPIGatewayBotResult> => this.client.request(`/gateway/bot`, "GET", options);
}

export default Gateway;
