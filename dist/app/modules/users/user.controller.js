"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const customResponse_1 = require("../../../shared/customResponse");
const pick_1 = __importDefault(require("../../../shared/pick"));
const user_constants_1 = require("./user.constants");
const shared_constant_1 = require("../../../constant/shared.constant");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { student } = _a, userData = __rest(_a, ["student"]);
    const result = yield user_service_1.UserService.createUser(userData, student);
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student created successfully!',
        data: result,
    });
}));
const createFacilitators = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _b = req.body, { facilitator } = _b, userData = __rest(_b, ["facilitator"]);
    const result = yield user_service_1.UserService.createFacilitators(userData, facilitator);
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Facilatator created successfully!',
        data: result,
    });
}));
const createParents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _c = req.body, { parent } = _c, userData = __rest(_c, ["parent"]);
    const result = yield user_service_1.UserService.createParent(userData, parent);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Parent created successfully!',
        data: result,
    });
}));
const createAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _d = req.body, { admin } = _d, userData = __rest(_d, ["admin"]);
    const result = yield user_service_1.UserService.createAdmin(userData, admin);
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Admin created successfully!',
        data: result,
    });
}));
const getUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getAllUser();
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'user retrive successfully!',
        data: result,
    });
}));
const getAllUserDetails = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, user_constants_1.userSearchableFields);
    const paginationOptions = (0, pick_1.default)(req.query, shared_constant_1.paginationFields);
    console.log("filters", filters);
    console.log("paginationOptions", paginationOptions);
    const result = yield user_service_1.UserService.getAllUserDetails(filters, paginationOptions);
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Users retrieved successfully !',
        meta: result.meta,
        data: result.data,
    });
}));
exports.UserController = {
    createUser,
    getUser,
    createFacilitators,
    getAllUserDetails,
    createParents,
    createAdmin
};
