import EventEmitter from "node:events";
import { createServer, IncomingMessage, ServerResponse, Server } from "node:http";
import { ServerOptions } from "../../types/ServerTypes.js";
import { DefaultServerOptions } from "../../utils/constants.js";
import { stringify } from "typia";

class BotServer extends EventEmitter {
  private options: ServerOptions;
  public network: EventEmitter;
  public rawServer: Server<typeof IncomingMessage, typeof ServerResponse>;

  constructor(options?: ServerOptions) {
    super();
    this.options = { ...DefaultServerOptions, ...options };
  }

  public start(): void {
    this.rawServer = createServer(this.requestHandler).listen(this.options.port);
  }

  private async requestHandler(req: IncomingMessage, res: ServerResponse) {
    switch (req.url.split("/")[1]) {
      case "interaction": {
		// TODO interaction handling
        break;
      }
      case "shard": {
		// TODO shard communication
        break;
      }
      default: {
        res.write(stringify({ error: true, message: "Not found" }));
        res.writeHead(404);
        break;
      }
    }
  }
}

export default BotServer;
