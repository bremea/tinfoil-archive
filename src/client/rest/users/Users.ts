import * as APITypes from "discord-api-types/v10";
import BaseAPI from "../Base.js";
import Me from "./me/CurrentUser.js";

class UsersAPI extends BaseAPI {
  /** Current user */
  public me: Me = new Me(this.client);

  /** Get user */
  get = (userID: APITypes.Snowflake): Promise<APITypes.APIUser> => this.client.request(`/users/${userID}`, "GET");
}

export default UsersAPI;
