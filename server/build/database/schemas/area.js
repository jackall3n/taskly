"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.AreaSchema = new mongoose_1.Schema({
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    check: {
        every: Number,
        unit: String
    },
    venue: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Venue',
        required: true
    },
    history: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'History'
        }]
});
const Area = mongoose_1.model('Area', exports.AreaSchema);
exports.Area = Area;
