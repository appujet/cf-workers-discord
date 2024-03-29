import type {
  PermissionFlagsBits,
  APIApplicationCommand,
  APIInteraction,
  APIInteractionResponse,
} from 'discord-api-types/v10';

export * from 'discord-api-types/v10';
export type PermissionFlags = keyof typeof PermissionFlagsBits;

type PartialWithRequired<T, K extends keyof T> = Pick<T, K> & Partial<T>;

export type PartialWithRequiredAPIApplicationCommand = PartialWithRequired<APIApplicationCommand, 'name'>;

export type InteractionHandler = (
  interaction: APIInteraction,
) => Promise<APIInteractionResponse> | APIInteractionResponse;
