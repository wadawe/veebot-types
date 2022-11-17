/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/formatted/FormattedTokenContent.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { DiscordUserResponse } from "../discord/DiscordUserResponse";

export interface FormattedTokenContent extends DiscordUserResponse {

    discordToken : string;

}
