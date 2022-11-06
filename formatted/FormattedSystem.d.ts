/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/formatted/FormattedSystem.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

import { FormattedSystemBasics } from "./FormattedSystemBasics";
import { FormattedSystemBehaviour } from "./FormattedSystemBehaviour";
import { FormattedSystemCommands } from "./FormattedSystemCommands";
import { FormattedSystemDefaults } from "./FormattedSystemDefaults";
import { FormattedSystemPermissions } from "./FormattedSystemPermissions";
import { FormattedSystemPersistence } from "./FormattedSystemPersistence";

export interface FormattedSystem extends FormattedSystemBasics,
    FormattedSystemCommands,
    FormattedSystemDefaults,
    FormattedSystemBehaviour,
    FormattedSystemPersistence,
    FormattedSystemPermissions
{

    systemNumber : number;

}
