import { ClientOptions } from "../types/ClientTypes";

export const DefaultClientOptions: ClientOptions = {
	url: 'https://discord.com/api',
	cdn: 'https://cdn.discordapp.com',
	version: 10,
	userAgentAppendix: `Node.js ${process.version}`
}

export const TinfoilVersion = '0.1.0';

export const DefaultUserAgent = `DiscordBot (https://tinfoil.bremea.com, ${TinfoilVersion})`;