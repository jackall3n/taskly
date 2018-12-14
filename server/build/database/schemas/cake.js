"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.VenueSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const Venue = mongoose_1.model('Venue', exports.VenueSchema);
exports.default = Venue;
