/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/login/TokenContent.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { DiscordUserResponse } from "../discord/DiscordUserResponse";

export interface TokenContent extends DiscordUserResponse {

    discordToken : string;

}
