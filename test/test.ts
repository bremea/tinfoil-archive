import { Client } from "../src/index.js";

const bot = new Client(process.env.BOT_TOKEN as string);

// TODO: compiler package.json script for test file

const run = async () => {
  const me = await bot.users.me.get();
  console.log(me);
  logMemoryUsage();
};

run();

// logs the amount of memory used to console
function logMemoryUsage() {
  const formatMemoryUsage = (data) => `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;
  const memoryData = process.memoryUsage();
  console.log({
    rss: `${formatMemoryUsage(memoryData.rss)}`,
    heapTotal: `${formatMemoryUsage(memoryData.heapTotal)}`,
    heapUsed: `${formatMemoryUsage(memoryData.heapUsed)}`,
    external: `${formatMemoryUsage(memoryData.external)}`,
  });
}
