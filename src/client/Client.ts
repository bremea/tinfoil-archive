import { ClientOptions } from "../types/ClientTypes.js";
import { DefaultClientOptions } from "../utils/constants.js";
import RestClient from "./RestClient.js";

class Client extends RestClient {
  /** You shouldn't share this! */
  public token: string;

  constructor(token: string, options?: ClientOptions) {
    options = { ...DefaultClientOptions, ...options };
    super(token, options.url!, options.version!, options.userAgentAppendix!);
    this.token = token;
  }
}

export default Client;
