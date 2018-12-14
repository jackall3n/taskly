"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function initialize(co) {
    console.log(co);
}
exports.Controller = _1.makeDecorator('Controller', (co = {}) => (Object.assign({ initialize }, co)));
