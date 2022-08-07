/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/FormattedServerSettings.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystem } from "./FormattedSystem";

export interface FormattedServerSettings {
    premium : boolean;
    premiumExpires : string;
    userCount : number;
    currSystems : number;
    maxSystems : number;
    systems : FormattedSystem[]
}
