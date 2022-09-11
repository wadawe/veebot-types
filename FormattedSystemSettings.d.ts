/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/FormattedSystemSettings.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystem } from "./FormattedSystem";
import { FormattedSystemBehaviour } from "./FormattedSystemBehaviour";
import { FormattedSystemCommands } from "./FormattedSystemCommands";
import { FormattedSystemDefaults } from "./FormattedSystemDefaults";
import { FormattedSystemPersistence } from "./FormattedSystemPersistence";
import { FormattedSystemPermissions } from "./FormattedSystemPermissions";

export interface FormattedSystemSettings extends
    FormattedSystem,
    FormattedSystemCommands,
    FormattedSystemDefaults,
    FormattedSystemBehaviour,
    FormattedSystemPersistence,
    FormattedSystemPermissions
{}
