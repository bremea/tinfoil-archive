import { Client } from "../src/index.js";

const bot = new Client(process.env.BOT_TOKEN as string);

const run = async () => {
  const me = await bot.users.me.get();

  console.log(me);
};

run();
