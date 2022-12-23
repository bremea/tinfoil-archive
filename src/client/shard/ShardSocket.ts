import { EventEmitter } from "node:events";
import { ShardNetworkManagerOptions } from "../../types/ShardTypes.js";
import Client from "../Client.js";

class ShardSocket extends EventEmitter {
  private hostname: string;

  constructor(hostname: string, options?: ShardNetworkManagerOptions) {
    super();
    this.hostname = hostname;
  }

  public async sendToShard(internalID: number, subShardID: number, payload: Buffer | string) {
    // TODO send grpc to `internalID`
  }
}

export default ShardSocket;
