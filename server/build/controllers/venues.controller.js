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
const schemas_1 = require("../database/schemas");
const post_1 = require("../utils/decorators/post");
let VenuesController = class VenuesController {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = request;
            try {
                const venues = yield schemas_1.Venue.find({ _id: { $in: user.venues } }, 'name created');
                response.send({
                    venues
                });
            }
            catch (e) {
                response.status(500).send({
                    reason: "SERVER_ERROR"
                });
            }
        });
    }
    get_one(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            if (request.user.venues.indexOf(id) < 0) {
                response.send({
                    reason: 'VENUE_NOT_FOUND'
                });
                return;
            }
            const venue = yield schemas_1.Venue.findById(id);
            response.send(venue);
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            const user = request.user;
            const venue = new schemas_1.Venue({ name });
            const result = yield venue.save();
            user.venues.push(result._id);
            yield user.save();
            response.send(result);
        });
    }
};
__decorate([
    get_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VenuesController.prototype, "get", null);
__decorate([
    get_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VenuesController.prototype, "get_one", null);
__decorate([
    post_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VenuesController.prototype, "create", null);
VenuesController = __decorate([
    controller_1.Controller()
], VenuesController);
exports.VenuesController = VenuesController;
