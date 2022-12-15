import { Client } from "../src/index.js";

const bot = new Client(process.env.BOT_TOKEN as string);

const run = async () => {
  const me = (await bot.users.get('buh'));
  console.log(me);
};
run();
