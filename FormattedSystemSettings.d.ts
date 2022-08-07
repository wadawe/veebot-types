/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/FormattedSystemSettings.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystem } from "./FormattedSystem";
import { FormattedSystemCommands } from "./FormattedSystemCommands";
import { FormattedSystemDefaults } from "./FormattedSystemDefaults";

export interface FormattedSystemSettings extends
    FormattedSystem,
    FormattedSystemCommands,
    FormattedSystemDefaults
{}
