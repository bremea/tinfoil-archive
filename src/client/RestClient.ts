import Users from "./rest/Users.js";
import Centra from "centra";
import { HTTPMethods } from "../types/ClientTypes.js";
import { RESTError } from "discord-api-types/v10.js";

class RestClient {
  private authorization: string;
  private baseURL: string;
  public users: Users;

  constructor(token: string, url: string, version: number) {
    this.authorization = `Bot ${token}`;
    this.baseURL = `${url}/v${version}`;
    this.users = new Users(this);
  }

  async request(endpoint: string, method: HTTPMethods, body?: any): Promise<any> {
    try {
      const req = Centra(this.baseURL + endpoint, method);
      req.header("Authorization", this.authorization);
      if (body) req.body(body);

      const res = await req.send();

      if (res.statusCode === 200) {
        return await res.json();
      } else if ([400, 401, 403, 404, 405, 502, 500].includes(res.statusCode)) {
		let error: RESTError | undefined;
        try {
          error = await res.json();
        } catch (e) {
          throw new Error(`HTTP error ${res.statusCode} on ${method} ${endpoint} (no JSON data sent)`);
        }
		throw new Error(`HTTP error ${res.statusCode} on ${method} ${endpoint}: ${error.message}`);
      } else {
        return undefined;
      }
    } catch (e) {
      throw e;
    }
  }
}

export default RestClient;
