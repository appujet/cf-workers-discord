/// <reference types="@cloudflare/workers-types" />
import { Permissions } from './permissions';
import { APIButtonComponentWithCustomId, APISelectMenuComponent, InteractionHandler, PartialWithRequiredAPIApplicationCommand } from './types';
export interface Command {
    command: PartialWithRequiredAPIApplicationCommand;
    handler: InteractionHandler;
}
export interface MessageComponent {
    component: MessageComponentWithCustomId;
    handler: InteractionHandler;
}
export interface Application {
    applicationId: string;
    botToken: string;
    publicKey: string;
    guildId?: string;
    commands: Command[];
    components?: MessageComponent[];
    permissions: Permissions;
}
export type DictComponents = Record<string, MessageComponent>;
export type DictCommands = Record<string, Command>;
export type MessageComponentWithCustomId = APIButtonComponentWithCustomId | APISelectMenuComponent;
export declare const fromHexString: (hexString: string) => Uint8Array;
export type ApplicationCommandHandler = (request: Request, ...extra: any) => Promise<any>;
export declare const createApplicationCommandHandler: (application: Application, env: any, context: ExecutionContext) => ApplicationCommandHandler;
//# sourceMappingURL=handler.d.ts.map