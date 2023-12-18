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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const post_service_1 = require("./post.service");
const shared_constant_1 = require("../../../constant/shared.constant");
const http_status_1 = __importDefault(require("http-status"));
const post_constants_1 = require("./post.constants");
const pick_1 = __importDefault(require("../../../shared/pick"));
const createPostController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_service_1.PostService.createPost(req.body);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'post created !',
        data: post,
    });
}));
// get All Post Controller
const getAllPostController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, post_constants_1.postSearchableFields);
    const paginationOptions = (0, pick_1.default)(req.query, shared_constant_1.paginationFields);
    const post = yield post_service_1.PostService.getAllPost(filters, paginationOptions);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Posts retrive successfully!',
        meta: post.meta,
        data: post.data,
    });
}));
exports.PostController = {
    createPostController,
    getAllPostController
};
