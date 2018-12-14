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
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
const controller_1 = require("../utils/decorators/controller");
const decorators_1 = require("../utils/decorators");
const schemas_1 = require("../database/schemas");
let AuthController = class AuthController {
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { username, password } = request.body;
            if (!username || !password) {
                response.status(400).send({
                    reason: "INVALID_REQUEST",
                    success: false
                });
                return;
            }
            try {
                const user = yield schemas_1.User.findOne({ username }).exec();
                if (!user) {
                    response.status(404).send({
                        reason: "USER_NOT_FOUND",
                        success: false
                    });
                    return;
                }
                const password_match = yield user.comparePassword(password);
                if (!password_match) {
                    response.status(404).send({
                        reason: "INVALID_CREDENTIALS",
                        success: false
                    });
                    return;
                }
                let token = jwt.sign({ id: user._id }, config_1.default.auth.secret, {
                    expiresIn: '2 days'
                });
                response.send({
                    username,
                    token,
                    success: true
                });
                return;
            }
            catch (e) {
                response.status(404).send({
                    reason: 'SERVER_ERROR',
                    success: false
                });
                return;
            }
        });
    }
    register(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { username, password } = request.body;
            if (!username || !password) {
                response.status(400).send({
                    reason: "INVALID_REQUEST",
                    success: false
                });
                return;
            }
            let user = new schemas_1.User({
                username,
                password
            });
            try {
                const result = yield user.save();
                let token = jwt.sign({ id: result._id }, config_1.default.auth.secret, {
                    expiresIn: '2 days'
                });
                response.send({
                    username,
                    token,
                    success: true
                });
            }
            catch (e) {
                response.status(500).send({
                    reason: 'SERVER_ERROR',
                    success: false
                });
            }
        });
    }
};
__decorate([
    decorators_1.Post('/login', { authorise: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    decorators_1.Post('/register', { authorise: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
AuthController = __decorate([
    controller_1.Controller()
], AuthController);
exports.AuthController = AuthController;
