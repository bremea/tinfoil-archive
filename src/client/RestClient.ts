import { Users, Guilds, Gateway } from "./rest/index.js";
import Centra from "centra";
import { HTTPMethods } from "../types/RestTypes.js";
import { RESTError } from "discord-api-types/v10";
import { DefaultUserAgent } from "../utils/constants.js";

class RestClient {
  private authorization: string;
  private baseURL: string;
  private userAgent: string;

  public users: Users;
  public guilds: Guilds;
  public gateway: Gateway;

  constructor(token: string, url: string, version: number, userAgentAppendix: string) {
    this.authorization = `Bot ${token}`;
    this.baseURL = `${url}/v${version}`;
    this.users = new Users(this);
    this.guilds = new Guilds(this);
	this.gateway = new Gateway(this);
    this.userAgent = `${DefaultUserAgent} ${userAgentAppendix}`;
  }

  async request(endpoint: string, method: HTTPMethods, options?: any, formData?: boolean): Promise<any> {
    try {
      const url = new URL(this.baseURL + endpoint);
      if (method === "GET" && options) {
        for (const optionKey of Object.keys(options)) {
          url.searchParams.set(optionKey, options[optionKey]);
        }
      }

      const req = Centra(url, method);
      req.header("User-Agent", this.userAgent);
      req.header("Authorization", this.authorization);

      if (options && options.auditLogReason) {
        req.header("X-Audit-Log-Reason", options.auditLogReason);
      }

      if ((method === "POST" || method === "PATCH" || method === "PUT") && options) {
        req.body(options, formData ? "form" : "json");
      }

      const res = await req.send();

      if (res.statusCode === 200) {
        return await res.json();
      } else if ([400, 401, 403, 404, 405, 502, 500].includes(res.statusCode!)) {
        let error: RESTError | undefined;
        try {
          error = await res.json();
        } catch (e) {
          throw new Error(`HTTP error ${res.statusCode} on ${method} ${endpoint} (no JSON data sent)`);
        }
        throw new Error(`HTTP error ${res.statusCode} on ${method} ${endpoint}: ${error?.message}`);
      } else {
        return undefined;
      }
    } catch (e) {
      throw e;
    }
  }
}

export default RestClient;
