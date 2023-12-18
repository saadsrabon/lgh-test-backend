"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    birthdate: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    grade: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Student = (0, mongoose_1.model)('Student', studentSchema);
