"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facilitator = void 0;
const mongoose_1 = require("mongoose");
const facilitatorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        required: true,
    },
    template: {
        type: Object,
    },
}, {
    timestamps: true,
});
exports.Facilitator = (0, mongoose_1.model)('Facilitator', facilitatorSchema);
