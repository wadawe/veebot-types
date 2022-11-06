/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/permissions/PermissionsSettingValues.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionsSettingName } from "../names/PermissionsSettingName";

export type PermissionsSettingValues = {

    [ key in PermissionsSettingName ] ?: bigint;

};
