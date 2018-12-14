import {makePropDecorator, TypeDecorator} from "./type-decorator";

export interface DeleteDecorator {
    (path: string, options?: DeleteOptions): TypeDecorator

    new(path: string, options?: DeleteOptions): void
}

export interface DeleteOptions {
    authorise?: boolean
}

export const Delete: DeleteDecorator = makePropDecorator('Delete', (path: string, options?: DeleteOptions) => ({
    method: "DELETE",
    authorise: true,
    path,
    ...options
}));