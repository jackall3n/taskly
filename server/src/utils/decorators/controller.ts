import {makeDecorator, TypeDecorator} from "./";

export interface ControllerDecorator {
    (co?: ControllerOptions): TypeDecorator;

    new (co?: ControllerOptions): ControllerOptions;
}

export interface ControllerOptions {
    authorise?: boolean;
}

function initialize(co?: ControllerOptions) {
    console.log(co);
}

export const Controller: ControllerDecorator = makeDecorator('Controller', (co: ControllerOptions = {}) =>
    ({
        initialize,
        ...co
    })
);