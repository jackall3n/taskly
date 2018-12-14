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
const api_service_1 = require("./api.service");
class WunderlistService {
    constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.getAuthorisationUrl = (state) => {
            const client_id = encodeURIComponent(this.client_id);
            const redirect_url = encodeURIComponent(`${process.env.URL}/wunderlist/token`);
            return `https://www.wunderlist.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_url}&state=${state}`;
        };
        this.accessToken = (code) => __awaiter(this, void 0, void 0, function* () {
            return yield api_service_1.ApiService.post('https://www.wunderlist.com/oauth/access_token', {
                data: {
                    client_id: this.client_id,
                    client_secret: this.client_secret,
                    code
                }
            });
        });
    }
}
exports.WunderlistService = WunderlistService;
