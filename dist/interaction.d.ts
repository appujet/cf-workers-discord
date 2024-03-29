/// <reference types="@cloudflare/workers-types" />
import { DictCommands, DictComponents } from './handler';
interface InteractionArgs {
    applicationId: string;
    publicKey: Uint8Array;
    commands: DictCommands;
    components?: DictComponents;
}
export declare const interaction: ({ applicationId, publicKey, commands, components }: InteractionArgs, env: any, context: ExecutionContext) => (request: Request, ...extra: any) => Promise<Response>;
export {};
//# sourceMappingURL=interaction.d.ts.map