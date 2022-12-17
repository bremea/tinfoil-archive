import { ClientOptions } from "../types/ClientTypes.js";
import { DefaultClientOptions } from "../utils/constants.js";
import RestClient from "./RestClient.js";
import Server from "./server/Server.js";

class Client extends RestClient {
  public server: Server;

  constructor(token: string, options?: ClientOptions) {
    options = { ...DefaultClientOptions, ...options };
    super(token, options.url, options.version, options.userAgentAppendix);
    this.server = new Server(options.server);
  }
}

export default Client;
