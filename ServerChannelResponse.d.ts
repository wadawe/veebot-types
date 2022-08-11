/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/ServerChannelResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { GuildChannelTypes } from "discord.js";

export interface ServerChannelResponse {
    id : string;
    name : string;
    type : GuildChannelTypes;
    manageable : boolean;
}
