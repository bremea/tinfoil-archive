![Tinfoil Logo](assets/tinfoil.jpeg "Tinfoil Logo")

# Tinfoil
[![](https://dcbadge.vercel.app/api/server/CXhCTscDfc)](https://discord.gg/CXhCTscDfc)

Tinfoil is a small and lightweight wrapper for Discord's REST and Gateway API, written in Typescript and designed with scalability in mind. It leaves a lot of stuff up to the user, allowing for more fine-tuned control over how your bot interacts with the API. It is best to think of Tinfoil more like a general utilities library for working with Discord's API, rather than a feature-complete library such as [discord.js](https://discord.js.org).

This was originally built for internal use at [combobot](https://discord.gg/J3rYDmbjU4), and currently powers our Gateway proxy.

**[Documentation Site](https://example.com)**

## Getting Started
You can install Tinfoil with one of the commands below, depending on what package manager you are using:
```
// Install commmands coming soon
```

A simple bot example:
```ts
import { Client } from "tinfoil";

const bot = new Client(process.env.BOT_TOKEN as string);
console.log(await bot.users.me.get()) // Logs bot information
```

## Scaling

Tinfoil is designed to be used in a Kubernetes cluster, but it can be modified if needed. Tinfoil provides APIs for global app state management, communication with other pods (shards), and additional utility functions. 

Each pod in the cluster is a separate gateway shard. The cluster manager contains global app state information (total guilds, users, shard status, etc) that is periodically updated by requesting data from each shard. Each shard exposes an HTTP server (additionally used for receiving interactions over HTTP from Discord) that is used to communicate with other shards in the cluster. This way, requests from shard-to-shard are not all routed through a single process.

Below is a high-level overview of what a Kubernetes cluster running tinfoil might look like:
![image](https://user-images.githubusercontent.com/63671187/208197679-590e1ba2-f229-43f2-9ffd-d167e38a02a1.png)

Examples of implementing scaling with Tinfoil:
```ts
// Examples coming soon
```

## Contributing

Please open an issue with any bug reports, or a 
