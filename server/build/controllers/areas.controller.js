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
const schemas_1 = require("../database/schemas");
let AreasController = class AreasController {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = request;
            try {
                const areas = yield schemas_1.Area.find({ venue: user.venues }, {
                    history: {
                        $slice: -1
                    }
                }).populate('history');
                const a = areas.map(area => ({
                    _id: area._id,
                    description: area.description,
                    last_checked: area.history.length ? area.history[0].created : undefined,
                    check: area.check
                }));
                response.send({
                    areas: a
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
            const { user } = request;
            const area = yield schemas_1.Area.findOne({
                _id: id,
                venue: user.venues
            }, {
                history: {
                    $slice: -1
                }
            }).populate('history');
            response.send(area);
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, venue, check } = request.body;
            if (request.user.venues.indexOf(venue) < 0) {
                response.send({
                    reason: 'VENUE_NOT_FOUND'
                });
                return;
            }
            try {
                const _venue = yield schemas_1.Venue.findById(venue);
                if (!_venue) {
                    response.send({
                        reason: 'VENUE_NOT_FOUND'
                    });
                    return;
                }
                const area = new schemas_1.Area({
                    description,
                    venue,
                    check
                });
                const result = yield area.save();
                _venue.areas.push(area._id);
                yield _venue.save();
                response.send(result);
            }
            catch (e) {
                console.log(e);
                response.send({
                    reason: 'SERVER_ERROR'
                });
                return;
            }
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, } = request.params;
            const { user } = request;
            try {
                const area = yield schemas_1.Area.findOneAndRemove({ _id: id, venue: user.venues });
                yield schemas_1.Venue.findByIdAndUpdate(area.venue, { $pullAll: { areas: [id] } }, { new: true });
                response.send(area);
            }
            catch (e) {
                console.log(e);
                response.send({
                    reason: 'SERVER_ERROR'
                });
                return;
            }
        });
    }
    scan(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = request;
            const { id } = request.params;
            const area = yield schemas_1.Area.findOne({ _id: id, venue: user.venues });
            if (!area) {
                response.status(404).send({
                    reason: 'AREA_NOT_FOUND',
                    success: false
                });
                return;
            }
            const history = yield schemas_1.History.create({ area });
            area.history.push(history._id);
            yield area.save();
            response.send(area);
        });
    }
};
__decorate([
    decorators_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AreasController.prototype, "get", null);
__decorate([
    decorators_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AreasController.prototype, "get_one", null);
__decorate([
    decorators_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AreasController.prototype, "create", null);
__decorate([
    decorators_1.Delete('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AreasController.prototype, "delete", null);
__decorate([
    decorators_1.Post('/:id/scan'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AreasController.prototype, "scan", null);
AreasController = __decorate([
    controller_1.Controller()
], AreasController);
exports.AreasController = AreasController;
