/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/login/LoginResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { TokenContent } from "./TokenContent";

export interface LoginResponse extends TokenContent {

    accessToken : string;

}
