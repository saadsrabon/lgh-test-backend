"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachersRoutes = void 0;
// create routes
const express_1 = __importDefault(require("express"));
const teacher_controller_1 = require("./teacher.controller");
const router = express_1.default.Router();
// router.post('/create-user', UserController.createUser );
// router.get('/get-user', UserController.getUser );
router.get('/get-teacher/:id', teacher_controller_1.TeacherController.findFacilitatorByIdController);
router.put('/update-teacher/:id', teacher_controller_1.TeacherController.updateTeacherController);
router.delete('/delete-teacher/:id', teacher_controller_1.TeacherController.deleteTeacherController);
exports.TeachersRoutes = router;
