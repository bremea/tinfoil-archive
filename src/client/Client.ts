import { ClientOptions } from "../types/ClientTypes";
import RestClient from "./RestClient.js";

class Client extends RestClient {
  private token: string;

  constructor(token: string, options?: ClientOptions) {
    super(token, "https://discord.com/api", 10);
    this.token = token;
  }
}

export default Client;
