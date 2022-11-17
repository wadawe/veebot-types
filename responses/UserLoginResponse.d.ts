/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/responses/UserLoginResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedTokenContent } from "../formatted/FormattedTokenContent";

export interface UserLoginResponse extends FormattedTokenContent {

    accessToken : string;

}
