import { APIApplicationCommandInteraction } from "discord-api-types/v10";
import { Context } from "./context";


export class CommandContext extends Context {
    public interaction: APIApplicationCommandInteraction;

    constructor(interaction: APIApplicationCommandInteraction, botToken: string) {
        super(interaction, botToken);

        this.interaction = interaction;
    }
}