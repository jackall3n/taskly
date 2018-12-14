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
const axios_1 = require("axios");
const controller_1 = require("../utils/decorators/controller");
const decorators_1 = require("../utils/decorators");
let BaseController = class BaseController {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get('https://api.giphy.com/v1/gifs/random?api_key=ItR8CThPlicWrITU1W3JsT7z95DOFpoE&tag=funny&rating=R');
            response.send(`
            <div style="display: flex; justify-content: center; align-items: center;">
                <img style="width: 300px;" src="${result.data.data.image_original_url}" alt="damn"/>
            </div>
        `);
        });
    }
};
__decorate([
    decorators_1.Get('/', { authorise: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "get", null);
BaseController = __decorate([
    controller_1.Controller()
], BaseController);
exports.BaseController = BaseController;
