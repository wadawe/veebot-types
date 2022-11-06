/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/responses/ServerResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { ServerMemberResponse } from "./ServerMemberResponse";
import { ServerSettingsResponse } from "./ServerSettingsResponse";

export interface ServerResponse extends ServerMemberResponse, ServerSettingsResponse {}
