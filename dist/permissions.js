import { PermissionFlagsBits } from './types';
export class Permissions {
    constructor(types) {
        this.types = types;
    }
    compute() {
        let permission = 0n;
        this.types.forEach((type) => (permission += PermissionFlagsBits[type]));
        return String(permission);
    }
}
//# sourceMappingURL=permissions.js.map