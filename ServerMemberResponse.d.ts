/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/ServerMemberResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { GuildChannelTypes, PermissionString } from "discord.js";

export interface ServerMemberResponse {
    server ?: {
        id : string;
        name : string;
        icon : string;
        ownerId : string;
        channels : {
            [ key : string ] : {
                id : string;
                name : string;
                type : GuildChannelTypes;
                manageable : boolean;
            }
        }
        roles : {
            [ key : string ] : {
                id : string;
                name : string;
                color : string;
                bot : boolean;
                manageable : boolean;
            }
        }
    };
    member ?: {
        permissions : PermissionString[];
        roles : string[];
    }
}
