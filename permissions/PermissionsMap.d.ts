/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/permissions/PermissionsMap.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionString } from "discord.js";

export type PermissionsMap = {

    [ key in PermissionString ] ?: - 1 | 0 | 1;

}
