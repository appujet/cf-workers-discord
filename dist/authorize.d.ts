/// <reference types="@cloudflare/workers-types" />
import { Permissions } from './permissions';
export declare const authorize: (applicationId: string, permissions: Permissions) => () => Promise<Response>;
//# sourceMappingURL=authorize.d.ts.map