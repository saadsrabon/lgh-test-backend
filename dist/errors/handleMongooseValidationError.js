"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleMongooseValidationError = (error) => {
    const errors = Object.values(error.errors).map((el) => {
        return {
            message: el.message,
            path: el.path,
        };
    });
    const statusCode = 400;
    return {
        status: 'false',
        statusCode,
        message: 'Validation Error',
        errorMessages: errors,
    };
};
exports.default = handleMongooseValidationError;
