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
export const createApplicationCommandHandler = (application, env, context) => {
    const components = toDictComponents(application);
    const commands = toDictCommands(application);
    const publicKey = fromHexString(application.publicKey);
    router.get('/', authorize(application.applicationId, application.permissions));
    router.post('/interaction', interaction({ applicationId: application.applicationId, publicKey, commands, components }, env, context));
    router.get('/setup', setup(application));
    return router.handle;
};
//# sourceMappingURL=handler.js.map