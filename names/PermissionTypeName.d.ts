/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/names/PermissionTypeName.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { ChannelStateName } from "./ChannelStateName";
import { UserAccessName } from "./UserAccessName";

export type PermissionTypeName = ChannelStateName | UserAccessName | "owner";
