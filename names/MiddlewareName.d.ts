/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/names/MiddlewareName.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import * as middlewareList from "../../middleware";

export type MiddlewareName = keyof typeof middlewareList;
