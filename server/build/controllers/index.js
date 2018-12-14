"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("./auth.controller");
const tasks_controller_1 = require("./tasks.controller");
const base_controller_1 = require("./base.controller");
const wunderlist_controller_1 = require("./wunderlist.controller");
let controllers = [{
        path: '/auth',
        controller: auth_controller_1.AuthController
    }, {
        path: "/tasks",
        controller: tasks_controller_1.TasksController
    }, {
        path: '/wunderlist',
        controller: wunderlist_controller_1.WunderlistController
    }, {
        path: '/',
        controller: base_controller_1.BaseController
    }];
exports.default = controllers;
