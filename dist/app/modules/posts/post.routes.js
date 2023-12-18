"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
// create routes
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
router.post('/create-post', post_controller_1.PostController.createPostController);
router.get('/get-all-post', post_controller_1.PostController.getAllPostController);
exports.PostRoutes = router;
