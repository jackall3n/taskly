"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_decorator_1 = require("./type-decorator");
exports.Delete = type_decorator_1.makePropDecorator('Delete', (path, options) => (Object.assign({ method: "DELETE", authorise: true, path }, options)));
