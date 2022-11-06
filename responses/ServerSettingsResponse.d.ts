/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/responses/ServerSettingsResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystem } from "../formatted/FormattedSystem";

export interface ServerSettingsResponse {

    premium : boolean;
    premiumExpires : string;

    systemCount : number;
    maxSystems : number;

    settings : {

        systems : {
            [ key : string ] : FormattedSystem;
        }

    }

}
