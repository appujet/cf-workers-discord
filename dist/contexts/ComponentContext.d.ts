import { APIMessageComponentInteraction } from "discord-api-types/v10";
import { Context } from "./context";
export declare class ComponentContext extends Context {
    interaction: APIMessageComponentInteraction;
    constructor(interaction: APIMessageComponentInteraction, botToken: string);
}
//# sourceMappingURL=ComponentContext.d.ts.map