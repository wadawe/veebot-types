/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/responses/ServerSettingsResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { ServerMemberResponse } from "./ServerMemberResponse";
import { FormattedServerSettings } from "../formatted/FormattedServerSettings";

export interface ServerSettingsResponse extends ServerMemberResponse, FormattedServerSettings {}
