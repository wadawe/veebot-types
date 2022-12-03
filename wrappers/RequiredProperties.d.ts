/**
 * Typing File
 * For storing relevant TypeScript types
 *
 * /types/wrappers/RequiredProperties.d.ts
 *
 * Copyright (C) 2022 wadawe
 */

export type RequiredProperties<T> = {

    [ P in keyof T ] : Required<NonNullable<T[ P ]>>;

};
