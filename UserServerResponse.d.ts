/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/UserServerResponse.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

export interface UserServerResponse {
    id : string;
    name : string;
    icon : string;
    isOwner : boolean;
    permissions : string;
}
