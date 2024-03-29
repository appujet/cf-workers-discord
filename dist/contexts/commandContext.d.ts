import { APIApplicationCommandInteraction } from "discord-api-types/v10";
import { Context } from "./context";
export declare class CommandContext extends Context {
    interaction: APIApplicationCommandInteraction;
    constructor(interaction: APIApplicationCommandInteraction, botToken: string);
}
//# sourceMappingURL=commandContext.d.ts.map