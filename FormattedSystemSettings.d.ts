/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/FormattedSystemSettings.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystemChannels } from "./FormattedSystemChannels";

export interface FormattedSystemSettings extends FormattedSystemChannels {
    systemNumber : number,
    systemName : string,
    createChannel : string;
    parentCategory : string;
}
