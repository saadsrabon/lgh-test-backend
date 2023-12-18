"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const handleCastValidationError = (error) => {
    const errors = [
        {
            message: error.message,
            path: error.path,
        },
    ];
    const statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    return {
        status: 'false',
        statusCode,
        message: 'Cast Error',
        errorMessages: errors,
    };
};
exports.default = handleCastValidationError;
