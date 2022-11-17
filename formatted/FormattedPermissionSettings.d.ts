/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/formatted/FormattedPermissionSettings.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionsSettingName } from "../names/PermissionsSettingName";

export type FormattedPermissionSettings = {

    [ key in PermissionsSettingName ] ?: bigint;

};
