/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { sign } from 'tweetnacl';
import { fromHexString } from './handler';
import { InteractionType, } from './types';
class InvalidRequestError extends Error {
    constructor(message) {
        super(message);
    }
}
const validateRequest = async (request, publicKey) => {
    const signature = request.headers.get('x-signature-ed25519');
    const timestamp = request.headers.get('x-signature-timestamp');
    if (signature === null || timestamp === null) {
        console.error(`Signature and/or timestamp are invalid: ${signature}, ${timestamp}`);
        throw new InvalidRequestError(`Request signature is ${signature} and timestamp is ${timestamp}`);
    }
    const encoder = new TextEncoder();
    const isValid = sign.detached.verify(encoder.encode(timestamp + (await request.text())), fromHexString(signature), publicKey);
    if (!isValid) {
        throw new InvalidRequestError("Request didn't comply with the correct signature.");
    }
};
const jsonResponse = (data) => {
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};
export const interaction = ({ publicKey, commands, components = {} }) => async (request, ...extra) => {
    try {
        await validateRequest(request.clone(), publicKey);
        const interaction = (await request.json());
        switch (interaction.type) {
            case InteractionType.Ping: {
                return jsonResponse({ type: 1 });
            }
            case InteractionType.ApplicationCommand: {
                const structure = interaction;
                if (structure.data?.name === undefined) {
                    throw Error('Interaction name is undefined');
                }
                const handler = commands[structure.data?.name].handler;
                return jsonResponse(await handler(interaction));
            }
            case InteractionType.MessageComponent: {
                const structure = interaction;
                if (structure.data === undefined) {
                    throw Error('Interaction custom_id is undefined');
                }
                const handler = components[structure.data?.custom_id].handler;
                return jsonResponse(await handler(interaction));
            }
            default: {
                return new Response(null, { status: 404 });
            }
        }
    }
    catch (e) {
        console.error(e);
        if (e instanceof InvalidRequestError) {
            return new Response(e.message, { status: 401 });
        }
        return new Response('Internal server error!', { status: 500 });
    }
};
//# sourceMappingURL=interaction.js.map