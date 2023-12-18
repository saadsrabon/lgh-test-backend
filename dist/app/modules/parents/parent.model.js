"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parent = void 0;
const mongoose_1 = require("mongoose");
const ParentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    childrenId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Student', //collection name as
    },
}, {
    timestamps: true,
});
exports.Parent = (0, mongoose_1.model)('Parent', ParentSchema);
