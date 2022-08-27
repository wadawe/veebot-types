/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/ServerMemberResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { PermissionString } from "discord.js";
import { ServerChannelResponse } from "./ServerChannelResponse";
import { ServerRoleResponse } from "./ServerRoleResponse";

export interface ServerMemberResponse {
    server ?: {
        id : string;
        name : string;
        icon : string;
        ownerId : string;
        channels : {
            [ key : string ] : ServerChannelResponse;
        }
        roles : {
            [ key : string ] : ServerRoleResponse;
        }
    };
    member ?: {
        permissions : PermissionString[];
        roles : string[];
    }
}
