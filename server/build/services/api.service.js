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
const axios_1 = require("axios");
class ApiService {
}
ApiService.get = (url, options) => __awaiter(this, void 0, void 0, function* () {
    let request_options = Object.assign({ url }, options);
    try {
        return yield ApiService.request('GET', request_options);
    }
    catch (e) {
        throw e;
    }
});
ApiService.post = (url, options) => __awaiter(this, void 0, void 0, function* () {
    let request_options = Object.assign({ url }, options);
    try {
        return yield ApiService.request('POST', request_options);
    }
    catch (e) {
        throw e;
    }
});
ApiService.request = (method, options) => __awaiter(this, void 0, void 0, function* () {
    let request_options = Object.assign({ method }, options);
    try {
        const response = yield axios_1.default.request(request_options);
        return response.data;
    }
    catch (e) {
        throw e;
    }
});
exports.ApiService = ApiService;
