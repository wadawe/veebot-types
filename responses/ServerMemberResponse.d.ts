/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/responses/ServerMemberResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionString } from "discord.js";
import { FormattedServerChannel } from "../formatted/FormattedServerChannel";
import { FormattedServerRole } from "../formatted/FormattedServerRole";

export type ServerMemberResponse = {

    id : string;
    name : string;
    icon : string;
    ownerId : string;
    userCount : number;

    channels : {
        [ key in string ] ?: FormattedServerChannel;
    }

    roles : {
        [ key in string ] ?: FormattedServerRole;
    }

    member : {
        roles : string[];
        permissions : PermissionString[];
    }

};
