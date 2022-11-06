/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/formatted/FormattedServerChannel.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { GuildChannelTypes } from "discord.js";

export type FormattedServerChannel = {

    id : string;
    name : string;
    type : GuildChannelTypes;
    manageable : boolean;

};
