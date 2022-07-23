/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/SystemSettingsResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystemSettings } from "./FormattedSystemSettings";

export interface SystemSettingsResponse {
    settings ?: FormattedSystemSettings;
}
