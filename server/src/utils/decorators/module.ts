import {makeDecorator, TypeDecorator} from "./";

export interface ModuleDecorator {
    (obj: Module): TypeDecorator;
    new (obj: Module): Module;
}

export interface Module {
    controllers?: any
}

export const Module : ModuleDecorator
    = makeDecorator('Module', (m: Module) => ({...m}));