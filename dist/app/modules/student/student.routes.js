"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
// create routes
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const router = express_1.default.Router();
// router.post('/create-user', UserController.createUser );
router.get('/get-user');
router.put('/update-student/:id', student_controller_1.StudentController.updateStudent);
router.delete('/delete-student/:id', student_controller_1.StudentController.deleteStudent);
exports.StudentRoutes = router;
