"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const handleMongoServerError = (error) => {
    const firstKey = Object.keys(error.keyPattern)[0];
    const errors = [
        {
            path: firstKey,
            message: error.message,
        },
    ];
    const statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    return {
        status: 'false',
        statusCode,
        message: error.message,
        errorMessages: errors,
    };
};
exports.default = handleMongoServerError;
