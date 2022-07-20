/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/ServerSettingsResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedServerSettings } from "./FormattedServerSettings";
import { ServerMemberResponse } from "./ServerMemberResponse";

export interface ServerSettingsResponse extends ServerMemberResponse {
    settings ?: FormattedServerSettings;
}
