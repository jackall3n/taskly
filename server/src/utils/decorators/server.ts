import {Type} from "./type";
import {makeDecorator, TypeDecorator} from "./";

export interface ServerDecorator {
    (s: Server) : TypeDecorator;
    new (s: Server) : Server;
}

export interface Server {
    mainModule: Type<any>
}