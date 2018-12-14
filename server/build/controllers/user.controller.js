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
const get_1 = require("../utils/decorators/get");
const user_1 = require("../database/schemas/user");
let UserController = class UserController {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.default.findById(request.user._id);
                if (!user) {
                    response.status(401).send({});
                    return;
                }
                response.send({
                    username: user.username
                });
                return;
            }
            catch (e) {
                response.status(500).send({});
            }
        });
    }
};
__decorate([
    get_1.Get({ path: '/', authorise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
UserController = __decorate([
    controller_1.Controller()
], UserController);
exports.UserController = UserController;