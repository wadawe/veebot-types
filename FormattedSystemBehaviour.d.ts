/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/FormattedSystemBehaviour.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

export interface FormattedSystemBehaviour {
    deleteChannelWhenEmpty : boolean | null;
    deleteChannelWhenOwnerDC : boolean | null;
    moveUserOnCreate : boolean | null;
    disconnectUserOnDeny : boolean | null;
}
