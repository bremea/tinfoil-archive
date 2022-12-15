import { ClientOptions } from "../types/ClientTypes";

export const DefaultClientOptions: ClientOptions = {
	url: 'https://discord.com/api',
	cdn: 'https://cdn.discordapp.com',
	version: 10,
	userAgentAppendix: `Node.js ${process.version}`
}