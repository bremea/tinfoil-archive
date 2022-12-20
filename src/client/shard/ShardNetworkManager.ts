import { EventEmitter } from "node:events";
import { ShardNetworkManagerOptions } from "../../types/ShardTypes.js";

class ShardNetworkManager extends EventEmitter {
  options: ShardNetworkManagerOptions;

  constructor(options?: ShardNetworkManagerOptions) {
    super();
	this.options = options!;
  }
}

export default ShardNetworkManager;
