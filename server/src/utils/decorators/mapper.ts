import {Injector} from "../../services/injector.service";
import {Type} from "./type";

export const Mapper = () => {
    return (target: Type<Mapper<any>>) => {
        Injector.set(target);
    }
};

export interface Mapper<T> {
    map(data: any): T
}