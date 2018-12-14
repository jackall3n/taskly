"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class TasksService {
    constructor() {
        this.wunderlist = new _1.WunderlistService(process.env.WUNDERLIST_CLIENT_ID, process.env.WUNDERLIST_CLIENT_SECRET);
        this.getAuth = () => {
            return this.wunderlist.getAuthorisationUrl();
        };
        this.accessToken = () => __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.TasksService = TasksService;
