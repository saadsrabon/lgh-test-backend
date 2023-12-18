"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradesRoutes = void 0;
// create routes
const express_1 = __importDefault(require("express"));
const grade_controller_1 = require("./grade.controller");
const router = express_1.default.Router();
// router.post('/create-user', UserController.createUser );
router.get('/get-grades', grade_controller_1.GradeController.getGrade);
// router.put('/update-student/:id',StudentController.updateStudent);
// router.delete('/delete-student/:id',StudentController.deleteStudent);
router.post('/create-grade', grade_controller_1.GradeController.createGrade);
router.put('/update-grade/:id', grade_controller_1.GradeController.updateGrade);
exports.GradesRoutes = router;
