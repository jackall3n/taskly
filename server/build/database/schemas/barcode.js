"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.BarcodeSchema = new mongoose_1.Schema({
    redirect: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    area: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Area',
        required: true
    }
});
const Barcode = mongoose_1.model('Barcode', exports.BarcodeSchema);
exports.Barcode = Barcode;
