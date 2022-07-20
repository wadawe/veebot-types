/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/EventHookName.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import * as eventHookList from "../events";

export type EventHookName = keyof typeof eventHookList;
