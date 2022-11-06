/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/formatted/FormattedSystemPermissions.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionsMap } from "../permissions/PermissionsMap";

export type FormattedSystemPermissions = {

    lockedPerms : PermissionsMap;
    unlockedPerms : PermissionsMap;
    ownerPerms : PermissionsMap;
    grantedPerms : PermissionsMap;
    deniedPerms : PermissionsMap;

};
