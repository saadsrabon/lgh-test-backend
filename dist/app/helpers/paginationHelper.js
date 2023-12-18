"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePagination = void 0;
const paginationHelper = (option) => {
    const page = Number(option.page) || 1;
    const limit = Number(option.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = option.sortBy || 'createdAt';
    const sortOrder = option.sortOrder || 'desc';
    return { page, limit, skip, sortBy, sortOrder };
};
const calculatePagination = (options) => {
    const page = Number(options.page || 1);
    const limit = Number(options.limit || 10);
    const skip = (page - 1) * limit;
    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || 'desc';
    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder,
    };
};
exports.calculatePagination = calculatePagination;
exports.default = paginationHelper;
