import {AuthController} from "./auth.controller";
import {TasksController} from "./tasks.controller";
import {BaseController} from "./base.controller";
import {WunderlistController} from "./wunderlist.controller";

let controllers: any[] = [{
    path: '/auth',
    controller: AuthController
}, {
    path: "/tasks",
    controller: TasksController
}, {
    path: '/wunderlist',
    controller: WunderlistController
}, {
    path: '/',
    controller: BaseController
}];

export default controllers;