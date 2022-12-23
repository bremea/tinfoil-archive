import { Client, GatewayClient, GatewayIntentBits, ShardManager } from "../src/index.js";

const bot = new Client(process.env.BOT_TOKEN as string);

async function spawn(id: number, total: number, url: string) {
	
}

const shardManager = new ShardManager(bot, spawn);
shardManager.spawnAll();