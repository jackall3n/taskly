import {makePropDecorator, TypeDecorator} from "./type-decorator";

export interface GetDecorator {
    (path: string, options?: GetOptions): TypeDecorator

    new(path: string, options?: GetOptions): void
}

export interface GetOptions {
    authorise?: boolean
}

export const Get: GetDecorator = makePropDecorator('Get', (path: string, options?: GetOptions) => ({
    method: "GET",
    authorise: true,
    path,
    ...options
}));