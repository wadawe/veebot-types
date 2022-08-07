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

    enableCommandName : boolean | null;
    enableCommandLimit : boolean | null;
    enableCommandBitrate : boolean | null;
    enableCommandLock : boolean | null;
    enableCommandUnlock : boolean | null;
    enableCommandGrant : boolean | null;
    enableCommandDeny : boolean | null;
    enableCommandClear : boolean | null;
    enableCommandKick : boolean | null;
    enableCommandMute : boolean | null;
    enableCommandUnmute : boolean | null;
    enableCommandTransfer : boolean | null;
    enableCommandClaim : boolean | null;
    enableCommandDelete : boolean | null;

}
