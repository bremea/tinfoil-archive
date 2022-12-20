import * as APITypes from "discord-api-types/v10";

export type GatewayClientOptions = {
	intents?: APITypes.GatewayIntentBits[],
	identifyProperties?: APITypes.GatewayIdentifyProperties
}