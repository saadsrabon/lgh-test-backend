"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodValidationError = (error) => {
    const errors = error.issues.map((issue) => {
        return {
            message: issue.message,
            path: issue.path[issue.path.length - 1],
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
exports.default = handleZodValidationError;
