"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.HistorySchema = new mongoose_1.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    area: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Area',
        required: true
    },
});
const History = mongoose_1.model('History', exports.HistorySchema);
exports.History = History;
