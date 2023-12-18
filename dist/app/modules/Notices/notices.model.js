"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notices = void 0;
const mongoose_1 = require("mongoose");
const noticeSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    gradeId: {
        type: String,
    },
});
exports.Notices = (0, mongoose_1.model)('Notices', noticeSchema);
