import { Context } from "./context";
export class CommandContext extends Context {
    constructor(interaction, botToken, env) {
        super(interaction, botToken, env);
        this.interaction = interaction;
        this.env = env;
    }
}
//# sourceMappingURL=commandContext.js.map