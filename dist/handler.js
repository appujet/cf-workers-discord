import { Router } from 'itty-router';
import { setup } from './setup';
import { authorize } from './authorize';
import { interaction } from './interaction';
const router = Router();
export const fromHexString = (hexString) => Uint8Array.from((hexString.match(/.{1,2}/g) ?? []).map((byte) => parseInt(byte, 16)));
const toDictComponents = (application) => {
    return application.components?.reduce((result, c) => {
        result[c.component.custom_id] = { component: c.component, handler: c.handler };
        return result;
    }, {});
};
const toDictCommands = (application) => {
    return application.commands.reduce((result, c) => {
        result[c.command.name] = { command: c.command, handler: c.handler };
        return result;
    }, {});
};
export const createApplicationCommandHandler = (application) => {
    const components = toDictComponents(application);
    const commands = toDictCommands(application);
    const publicKey = fromHexString(application.publicKey);
    router.get('/', authorize(application.applicationId, application.permissions));
    router.post('/interaction', interaction({ publicKey, commands, components }));
    router.get('/setup', setup({
        applicationId: application.applicationId,
        botToken: application.botToken,
        guildId: application.guildId,
        commands: application.commands,
        publicKey: application.publicKey,
        permissions: application.permissions
    }));
    return router.handle;
};
//# sourceMappingURL=handler.js.map