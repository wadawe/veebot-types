/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/formatted/FormattedSystemPermissions.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedPermissionsMap } from "./FormattedPermissionsMap";

export type FormattedSystemPermissions = {

    lockedPerms : FormattedPermissionsMap;
    unlockedPerms : FormattedPermissionsMap;
    ownerPerms : FormattedPermissionsMap;
    grantedPerms : FormattedPermissionsMap;
    deniedPerms : FormattedPermissionsMap;

};
