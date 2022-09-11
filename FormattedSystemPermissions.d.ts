/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/FormattedSystemPermissions.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionsMap } from "./PermissionsMap";

export interface FormattedSystemPermissions {

    lockedPerms : PermissionsMap;

    unlockedPerms : PermissionsMap;

    ownerPerms : PermissionsMap;

    grantedPerms : PermissionsMap;

    deniedPerms : PermissionsMap;

}
