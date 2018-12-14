"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_decorator_1 = require("./type-decorator");
exports.Get = type_decorator_1.makePropDecorator('Get', (path, options) => (Object.assign({ method: "GET", authorise: true, path }, options)));
