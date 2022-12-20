import { ClientOptions } from "../types/ClientTypes";
import { GatewayClientOptions } from "../types/GatewayTypes";

export const DefaultClientOptions: ClientOptions = {
  url: "https://discord.com/api",
  cdn: "https://cdn.discordapp.com",
  version: 10,
  userAgentAppendix: `Node.js ${process.version}`,
};

export const DefaultGatewayClientOptions: GatewayClientOptions = {
  intents: [],
  identifyProperties: {
    os: "Linux",
    browser: "Tinfoil Alpha",
    device: "Tinfoil Alpha",
  },
};

export const TinfoilVersion = "0.1.0";

export const DefaultUserAgent = `DiscordBot (https://tinfoil.dev, ${TinfoilVersion})`;

export const validReconnectionCodes = [4000, 4001, 4002, 4003, 4004, 4005, 4007, 4008, 4009];

export const urlAppendix = `/?v=${DefaultClientOptions.version}&encoding=json`;