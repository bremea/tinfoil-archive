import { ServerOptions } from "./ServerTypes";

export type ClientOptions = {
  url?: string;
  cdn?: string;
  version?: number;
  userAgentAppendix?: string;
  server: ServerOptions;
};
