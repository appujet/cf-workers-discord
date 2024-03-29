import { APIMessageComponentInteraction } from "discord-api-types/v10";
import { Context } from "./context";

export class ComponentContext extends Context {
    public interaction: APIMessageComponentInteraction;

    constructor(interaction: APIMessageComponentInteraction, botToken: string) {
        super(interaction, botToken);

        this.interaction = interaction;
    }
}