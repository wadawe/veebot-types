/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/formatted/FormattedPermissionsMap.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionString } from "discord.js";

export type FormattedPermissionsMap = {

    [ key in PermissionString ] ?: - 1 | 0 | 1;

}
