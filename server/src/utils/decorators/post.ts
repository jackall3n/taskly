import {makePropDecorator, TypeDecorator} from "./type-decorator";

export interface PostDecorator {
    (path: string, options?: PostOptions): TypeDecorator

    new(path: string, options?: PostOptions): void
}

export interface PostOptions {
    authorise?: boolean;
    uploads?: [{ name: string, maxCount?: number }]
}

export const Post: PostDecorator = makePropDecorator('Post', (path : string, options?: PostOptions) => ({
    method: "POST",
    authorise: true,
    path,
    ...options
}));