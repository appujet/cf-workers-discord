import { Context } from "./context";
export class CommandContext extends Context {
    constructor(interaction, botToken) {
        super(interaction, botToken);
        this.interaction = interaction;
    }
}
//# sourceMappingURL=commandContext.js.map