"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const e = require("express");
const controller_1 = require("../utils/decorators/controller");
const decorators_1 = require("../utils/decorators");
const services_1 = require("../services");
let WunderlistController = class WunderlistController {
    constructor() {
        this.tasks_service = new services_1.TasksService();
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const access_token = yield this.tasks_service.wunderlist.accessToken(request.query.code);
            response.send(Object.assign({}, access_token, { state: request.query.state }));
        });
    }
    wunderlist(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.redirect(this.tasks_service.wunderlist.getAuthorisationUrl(request.query.state));
        });
    }
    get_token(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = 'MY_NAME_IS_JACK_ALLEN';
            response.send({
                url: `${process.env.URL}/wunderlist/authorise?state=${state}`
            });
        });
    }
};
__decorate([
    decorators_1.Get('/token', { authorise: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WunderlistController.prototype, "get", null);
__decorate([
    decorators_1.Get('/authorise', { authorise: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WunderlistController.prototype, "wunderlist", null);
__decorate([
    decorators_1.Get('/redirect', { authorise: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WunderlistController.prototype, "get_token", null);
WunderlistController = __decorate([
    controller_1.Controller()
], WunderlistController);
exports.WunderlistController = WunderlistController;
