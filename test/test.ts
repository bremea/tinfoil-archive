import { Client, GatewayClient, GatewayIntentBits } from "../src/index.js";

const bot = new Client(process.env.BOT_TOKEN as string);

const run = async () => {
  const me = await bot.users.me.get();
  console.log(me);

  const gateway = new GatewayClient(bot, { intents: [GatewayIntentBits.Guilds] });
  gateway.connect();
  gateway.on("READY", () => console.log("connected to gateway"));
};

run();
