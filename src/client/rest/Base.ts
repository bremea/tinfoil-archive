import RestClient from "../RestClient.js";

class BaseAPI {
  public client: RestClient;

  constructor(client: RestClient) {
    this.client = client;
  }
}

export default BaseAPI;
