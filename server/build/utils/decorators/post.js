"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_decorator_1 = require("./type-decorator");
exports.Post = type_decorator_1.makePropDecorator('Post', (path, options) => (Object.assign({ method: "POST", authorise: true, path }, options)));
