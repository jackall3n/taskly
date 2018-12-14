import {makeDecorator, TypeDecorator} from "./";

export interface ServiceDecorator {
    (): TypeDecorator;

    new (): Service;
}

export interface Service {
}

export const Service: ServiceDecorator = makeDecorator('Service', (s: Service = {}) => s);