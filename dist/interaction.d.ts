import { DictCommands, DictComponents } from './handler';
interface InteractionArgs {
    publicKey: Uint8Array;
    commands: DictCommands;
    components?: DictComponents;
}
export declare const interaction: ({ publicKey, commands, components }: InteractionArgs) => (request: Request, ...extra: any) => Promise<Response>;
export {};
//# sourceMappingURL=interaction.d.ts.map