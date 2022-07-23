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
    defaultChannelName : string | null;
    defaultChannelUserLimit : number | null;
    defaultChannelBitrate : number | null;
    defaultChannelState : boolean | null;
}
