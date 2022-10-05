/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/PermissionsSettingObject.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionsSettingName } from "./PermissionsSettingName";

export type PermissionsSettingObject = {
    trueSetting : PermissionsSettingName,
    falseSetting : PermissionsSettingName
};
