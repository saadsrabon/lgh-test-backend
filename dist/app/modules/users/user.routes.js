"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
// create routes
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/create-user', user_controller_1.UserController.createUser);
router.post('/create-facilitator', user_controller_1.UserController.createFacilitators);
router.post('/create-parent', user_controller_1.UserController.createParents);
router.get('/get-user', user_controller_1.UserController.getUser);
router.get('/get-alluser', user_controller_1.UserController.getAllUserDetails);
exports.userRoutes = router;
