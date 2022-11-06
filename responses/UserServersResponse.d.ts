/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/responses/UserServersResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { DiscordServerResponse } from "../discord/DiscordServerResponse";

export type UserServersResponse = {

    [ key : string ] : DiscordServerResponse;

};
