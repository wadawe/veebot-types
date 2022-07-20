/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/FormattedServerSettings.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystemChannels } from "./FormattedSystemChannels";

export interface FormattedServerSettings {
    premium : boolean;
    premiumExpires : string;
    userCount : number;
    currSystems : number;
    maxSystems : number;
    systems : FormattedSystemChannels[]
}
