import Users from "./rest/Users.js";
import Centra from "centra";
import { HTTPMethods } from "../types/ClientTypes.js";

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
      return await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
}

export default RestClient;
