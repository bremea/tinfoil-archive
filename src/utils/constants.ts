import { ClientOptions } from "../types/ClientTypes";
import { ServerOptions } from "../types/ServerTypes";

export const DefaultServerOptions: ServerOptions = {
  host: "127.0.0.1",
  port: 8080,
};

export const DefaultClientOptions: ClientOptions = {
  url: "https://discord.com/api",
  cdn: "https://cdn.discordapp.com",
  version: 10,
  userAgentAppendix: `Node.js ${process.version}`,
  server: DefaultServerOptions,
};

export const TinfoilVersion = "0.1.0";

export const DefaultUserAgent = `DiscordBot (https://tinfoil.bremea.com, ${TinfoilVersion})`;
