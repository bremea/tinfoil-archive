import { ClientOptions } from "../types/ClientTypes.js";
import { DefaultClientOptions } from "../utils/constants.js";
import RestClient from "./RestClient.js";

class Client extends RestClient {
  private token: string;

  constructor(token: string, options?: ClientOptions) {
	options = {...DefaultClientOptions, ...options};
    super(token, options.url, options.version);
    this.token = token;
  }
}

export default Client;
