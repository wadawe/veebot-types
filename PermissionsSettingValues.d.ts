/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/PermissionsSettingValues.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionsSettingName } from "./PermissionsSettingName";

export type PermissionsSettingValues = {
    [ key in PermissionsSettingName ] ?: bigint;
};
