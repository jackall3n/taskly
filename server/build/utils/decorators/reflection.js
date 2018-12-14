"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reflector_capabilities_1 = require("./reflector-capabilities");
const reflector_1 = require("./reflector");
exports.reflector = new reflector_1.Reflector(new reflector_capabilities_1.ReflectionCapabilities());
