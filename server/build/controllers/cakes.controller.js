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
const post_1 = require("../utils/decorators/post");
const delete_1 = require("../utils/decorators/delete");
const cake_1 = require("../database/schemas/cake");
const path = require("path");
const server_constants_1 = require("../constants/server.constants");
let CakesController = class CakesController {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const cakes = yield cake_1.default.find({}, '_id name image');
            response.send(cakes.map(c => ({
                id: c._id,
                name: c.name,
                image: c.image
            })));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            const image = path.join(server_constants_1.UPLOADS_PATH_FOLDER, request.file.filename);
            if (!name) {
                response.status(400);
                return;
            }
            try {
                const cake = new cake_1.default({
                    name,
                    image
                });
                const result = yield cake.save();
                response.send({
                    id: result._id,
                    name: result.name,
                    image: result.image
                });
            }
            catch (e) {
                response.status(400);
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = request.body;
            if (!id || !name) {
                response.status(400);
                return;
            }
            const cake = yield cake_1.default.findById(id);
            if (!cake) {
                response.status(400);
                return;
            }
            cake.name = name;
            if (request.file) {
                cake.image = path.join(server_constants_1.UPLOADS_PATH_FOLDER, request.file.filename);
            }
            try {
                const result = yield cake.save();
                response.send({
                    id: result._id,
                    name: result.name,
                    image: result.image
                });
            }
            catch (e) {
                response.status(400);
            }
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const deleted_cake = yield cake_1.default.findByIdAndRemove(id);
            response.send({
                id: deleted_cake._id
            });
        });
    }
};
__decorate([
    get_1.Get({ path: '/' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CakesController.prototype, "get", null);
__decorate([
    post_1.Post({ path: '/create', authorise: true, uploads: [{ name: 'image' }] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CakesController.prototype, "create", null);
__decorate([
    post_1.Post({ path: '/update', authorise: true, uploads: [{ name: 'image' }] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CakesController.prototype, "update", null);
__decorate([
    delete_1.Delete({ path: '/delete/:id', authorise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CakesController.prototype, "delete", null);
CakesController = __decorate([
    controller_1.Controller()
], CakesController);
exports.CakesController = CakesController;
