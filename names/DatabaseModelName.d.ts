/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/names/DatabaseModelName.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import * as databaseModelList from "../../models";

export type DatabaseModelName = keyof typeof databaseModelList;
