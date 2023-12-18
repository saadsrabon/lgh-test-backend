"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const handleMongooseValidationError_1 = __importDefault(require("../../errors/handleMongooseValidationError"));
const logger_1 = require("../../shared/logger");
const zod_1 = require("zod");
const handleZodValidationError_1 = __importDefault(require("../../errors/handleZodValidationError"));
const handleCastValidationError_1 = __importDefault(require("../../errors/handleCastValidationError"));
const handleMongoServerError_1 = __importDefault(require("../../errors/handleMongoServerError"));
const globalErrorHandler = (error, req, res, next) => {
    if (config_1.default.env === 'development') {
        console.log(error);
    }
    else {
        logger_1.errorLogger.error(error);
    }
    const status = 'false';
    let statusCode = 500;
    let message = 'Something went wrong';
    let errorMessages = [];
    if (error instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodValidationError_1.default)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error.name === 'ValidationError') {
        const simplifiedError = (0, handleMongooseValidationError_1.default)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error.name === 'MongoServerError') {
        const simplifiedError = (0, handleMongoServerError_1.default)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error.name === 'CastError') {
        const simplifiedError = (0, handleCastValidationError_1.default)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof ApiError_1.default) {
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = [{ message: error.message, path: '' }];
    }
    else if (error instanceof Error) {
        message = error.message;
        errorMessages = [{ message: error.message, path: '' }];
    }
    res.status(statusCode).json({
        status,
        message,
        errorMessages,
        stack: config_1.default.env === 'development' ? error.stack : '',
    });
};
exports.default = globalErrorHandler;
