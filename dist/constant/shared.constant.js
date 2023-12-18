"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReponse = exports.paginationFields = void 0;
exports.paginationFields = ['page', 'limit', 'sortBy', 'sortOrder'];
const sendReponse = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null,
    };
    res.status(data.statusCode).json(responseData);
};
exports.sendReponse = sendReponse;
