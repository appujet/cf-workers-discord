import { InteractionResponseType, RouteBases, Routes, } from "discord-api-types/v10";
import respond from "../respond";
export class Context {
    constructor(interaction, botToken) {
        this.respond = respond;
        this.interaction = interaction;
        this.botToken = botToken;
    }
    get guildId() {
        return this.interaction.guild_id;
    }
    async editReply(content) {
        return await fetch(`${RouteBases.api}${Routes.webhookMessage(this.interaction.application_id, this.interaction.token)}`, {
            method: "PATCH",
            body: JSON.stringify(content),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bot ${this.botToken}`,
            },
        });
    }
    async showModal(content) {
        return await fetch(`${RouteBases.api}${Routes.interactionCallback(this.interaction.id, this.interaction.token)}`, {
            method: "POST",
            body: JSON.stringify({
                type: InteractionResponseType.Modal,
                data: content,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bot ${this.botToken}`,
            },
        });
    }
    async returnModal(content) {
        return respond({
            type: InteractionResponseType.Modal,
            data: content,
        });
    }
}
//# sourceMappingURL=context.js.map