/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/express/index.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { AuthTokenContents } from "../AuthTokenContents";
import { ServerMemberResponse } from "../ServerMemberResponse";
import { UserServersResponse } from "../UserServersResponse";

declare global {

    namespace Express {

        interface Request {

            tokenContent ?: AuthTokenContents;
            userServers ?: UserServersResponse;
            memberData ?: ServerMemberResponse;

        }

    }

}
