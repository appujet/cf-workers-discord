import { Context } from "./context";
export class ComponentContext extends Context {
    constructor(interaction, botToken, env) {
        super(interaction, botToken, env);
        this.interaction = interaction;
        this.env = env;
    }
}
//# sourceMappingURL=componentContext.js.map