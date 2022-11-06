/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/express/index.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { TokenContent } from "../login/TokenContent";
import { ServerMemberResponse } from "../responses/ServerMemberResponse";
import { UserServersResponse } from "../responses/UserServersResponse";

declare global {

    namespace Express {

        interface Request {

            tokenContent ?: TokenContent;
            userServers ?: UserServersResponse;
            serverMember ?: ServerMemberResponse;

        }

    }

}
