import { isParse, stringify } from "typia";
import { DefaultGatewayClientOptions, urlAppendix, validReconnectionCodes } from "../utils/constants.js";
import Client from "./Client.js";
import * as APITypes from "discord-api-types/v10";
import { inflateSync } from "node:zlib";
import { EventEmitter } from "node:events";
import { WebSocket } from "ws";
import { GatewayClientEvents, GatewayClientOptions } from "../types/GatewayTypes.js";

class GatewayClient extends (EventEmitter as new () => GatewayClientEvents) {
  private token: string;
  private client: Client;
  private url: string;

  private reconnectSessionID: string;
  private lastSequence: number;
  private reconnectURL: string;
  private heartbeatWasAcknowledged: boolean;

  public rawConnection: WebSocket | undefined;
  public options: any;

  constructor(client: Client, options: GatewayClientOptions) {
    super();
    this.token = client.token;
    this.client = client;
    this.options = { ...DefaultGatewayClientOptions, ...options };
    this.url = this.reconnectSessionID = this.reconnectURL = "";
    this.lastSequence = 0;
    this.heartbeatWasAcknowledged = false;
  }

  /** Send data to gateway */
  public send(opCode: APITypes.GatewayOpcodes, data?: any, type?: APITypes.GatewayDispatchEvents, s?: number): void {
    const payload: object = {
      op: opCode,
      d: data,
      t: type,
      s: s,
    };
    this.rawConnection?.send(stringify(payload));
  }

  private handleIncoming(data: any, isBinary: boolean) {
    const parsed: APITypes.GatewayReceivePayload | APITypes.GatewayDispatchPayload = isParse<any>(isBinary ? inflateSync(data as Buffer).toString() : data.toString())!;
    switch (parsed.op) {
      case 1: {
        this.send(1, this.lastSequence);
        break;
      }
      case 7: {
        this.rawConnection?.close(4000);
        break;
      }
      case 9: {
        if (parsed.d) {
          this.rawConnection?.close(4000);
        } else {
          this.rawConnection?.close(1000);
          throw new Error("GATEWAY ERROR: max_concurrency (opcode 9) has been exceeded.");
        }
      }
      case 10: {
        this.startHeartbeatLoop((parsed as APITypes.GatewayHello).d.heartbeat_interval);
        this.identify();
        break;
      }
      case 11: {
        this.heartbeatWasAcknowledged = true;
        break;
      }
      default: {
        if (parsed.t) {
          if (parsed.t === "READY") {
            this.reconnectURL = (parsed.d as APITypes.GatewayReadyDispatchData).resume_gateway_url;
          }
		  // @ts-ignore
          this.emit(parsed.t, (parsed as APITypes.GatewayDispatchPayload).d);
        }
        break;
      }
    }
  }

  /** Connect client to gateway */
  public async connect(isReconnection?: boolean) {
    if (!isReconnection) {
      const gatewayData = await this.client.gateway.get();
      this.url = gatewayData.url;
      this.reconnectURL = gatewayData.url;
    }

    this.rawConnection = new WebSocket((isReconnection ? this.reconnectURL : this.url) + urlAppendix);

    this.rawConnection.onclose = (data) => {
      if (!data.code || validReconnectionCodes.includes(data.code)) {
        this.connect(true);
      } else {
        // TODO handle total disconnect
      }
    };

    this.rawConnection?.on("message", (data, isBinary) => {
      this.handleIncoming(data, isBinary);
    });

    this.rawConnection.onopen = () => {
      if (isReconnection) {
        this.send(6, {
          token: this.token,
          session_id: this.reconnectSessionID,
          seq: this.lastSequence,
        });
      }
    };
  }

  private async identify() {
    this.send(2, {
      token: this.token,
      intents: 0,
      compress: true,
      properties: {},
    } as APITypes.GatewayIdentifyData);
  }

  private async startHeartbeatLoop(interval: number) {
    this.heartbeatWasAcknowledged = true;
    await new Promise((r) => setTimeout(r, interval * Math.random()));
    this.sendHeartbeat();
    setInterval(() => {
      this.sendHeartbeat();
    }, interval);
  }

  private sendHeartbeat() {
    if (this.heartbeatWasAcknowledged === true) {
      this.heartbeatWasAcknowledged = false;
      this.send(1, this.lastSequence);
    } else {
      this.rawConnection?.close(4000);
    }
  }
}

export default GatewayClient;
