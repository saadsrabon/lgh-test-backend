"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grades = void 0;
const mongoose_1 = require("mongoose");
const gradeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    notices: {
        type: [Object],
    },
    routine: {
        type: Object,
    },
}, {
    timestamps: true,
});
exports.Grades = (0, mongoose_1.model)('Grades', gradeSchema);
