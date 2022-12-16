![Tinfoil Logo](assets/tinfoil.jpeg "Tinfoil Logo")

# Tinfoil
[![](https://dcbadge.vercel.app/api/server/CXhCTscDfc?style=flat)](https://discord.gg/CXhCTscDfc)
Tinfoil is a small and lightweight wrapper for Discord's REST and Gateway API, written in Typescript and designed with scalability in mind. It leaves a lot of stuff up to the user, allowing for more fine-tuned control over how your bot interacts with the API. It is best to think of Tinfoil more like a general utilities library for working with Discord's API, rather than a feature-complete library such as [discord.js](https://discord.js.org).

This was originally built for internal use at [combobot](https://discord.gg/J3rYDmbjU4), and currently powers our Gateway proxy.

**[Documentation Site](https://example.com)**

## Getting Started
You can install Tinfoil with one of the commands below, depending on what package manager you are using:
```
commands soon:tm:
```

A simple bot example:
```ts
import { Client } from "tinfoil";

const bot = new Client(process.env.BOT_TOKEN as string);
console.log(await bot.users.me.get()) // Logs bot information
```

## Scaling

tbd

## Contributing

tbd
