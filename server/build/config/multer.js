"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const storage = multer.diskStorage({
    destination: '/test',
    filename: function (request, file, callback) {
        crypto.pseudoRandomBytes(16, function (error, raw) {
            if (error) {
                return callback(error, undefined);
            }
            const file_name = raw.toString('hex') + path.extname(file.originalname);
            callback(null, file_name);
        });
    }
});
exports.default = multer({ storage: storage });
