import { EventEmitter } from "node:events";
import Client from "../Client.js";

class ShardSocket extends EventEmitter {
  private client: Client;

  constructor(client: Client) {
    super();
    this.client = client;
  }

  public spawn(internalID: number, id: number, total: number) {
    // TODO spawn sub process (needs reviewing)
  }
}

export default ShardSocket;
