/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/names/BotCommandName.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import * as botCommandList from "../../commands";

export type BotCommandName = keyof typeof botCommandList;
