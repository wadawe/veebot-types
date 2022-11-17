/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/express/index.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedTokenContent } from "../formatted/FormattedTokenContent";
import { ServerMemberResponse } from "../responses/ServerMemberResponse";
import { UserServersResponse } from "../responses/UserServersResponse";

declare global {

    namespace Express {

        interface Request {

            tokenContent ?: FormattedTokenContent;
            userServers ?: UserServersResponse;
            serverMember ?: ServerMemberResponse;

        }

    }

}
