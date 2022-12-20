import { EventEmitter } from "node:events";
import { ShardNetworkManagerOptions } from "../../types/ShardTypes.js";

class ShardManager extends EventEmitter {
  options: ShardNetworkManagerOptions;

  constructor(options?: ShardNetworkManagerOptions) {
    super();
	this.options = options!;
  }
}

export default ShardManager;
