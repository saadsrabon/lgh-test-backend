"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRoutes = void 0;
// create routes
const express_1 = __importDefault(require("express"));
const notices_controller_1 = require("./notices.controller");
const router = express_1.default.Router();
router.post('/create-notice', notices_controller_1.NoticeController.createNotice);
exports.NoticeRoutes = router;
