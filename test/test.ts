import { Client } from "../dist/index.js";

const bot = new Client(process.env.BOT_TOKEN);

const run = async () => {
  const me = await bot.users.me.guilds.get()
  console.log(me);
};
run();
