import {
    APIInteraction,
    APIInteractionResponseCallbackData,
    APIModalInteractionResponseCallbackData,
    InteractionResponseType,
    RouteBases,
    Routes,
} from "discord-api-types/v10";
import respond from "../respond";
import { fetch } from "undici";

export class Context {
    public interaction: APIInteraction;
    public botToken: string;

    constructor(interaction: APIInteraction, botToken: string) {
        this.interaction = interaction;
        this.botToken = botToken;
    }

    get guildId() {
        return this.interaction.guild_id;
    }

    public respond = respond;

    public async editReply(content: APIInteractionResponseCallbackData) {
        return await fetch(
            `${RouteBases.api}${Routes.webhookMessage(
                this.interaction.application_id,
                this.interaction.token,
            )}`,
            {
                method: "PATCH",
                body: JSON.stringify(content),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bot ${this.botToken}`,
                },
            },
        );
    }

    public async showModal(content: APIModalInteractionResponseCallbackData) {
        return await fetch(
            `${RouteBases.api}${Routes.interactionCallback(
                this.interaction.id,
                this.interaction.token,
            )}`,
            {
                method: "POST",
                body: JSON.stringify({
                    type: InteractionResponseType.Modal,
                    data: content,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bot ${this.botToken}`,
                },
            },
        );
    }

    public async returnModal(content: APIModalInteractionResponseCallbackData) {
        return respond({
            type: InteractionResponseType.Modal,
            data: content,
        });
    }
}