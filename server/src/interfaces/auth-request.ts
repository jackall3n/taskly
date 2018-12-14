import * as e from "express"
import {IUser} from "../database/schemas";

export interface AuthRequest extends e.Request {
    user?: IUser;
}