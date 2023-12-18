"use strict";
// const createUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const  user  = req.body;
//     const result = await UserService.createUser(user);
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
exports.StudentController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const customResponse_1 = require("../../../shared/customResponse");
const http_status_1 = __importDefault(require("http-status"));
const student_service_1 = require("./student.service");
const shared_constant_1 = require("../../../constant/shared.constant");
//     sendSuccessResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'user created successfully!',
//       data: result,
//     });
//   }
// );
const getStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_service_1.StudentService.getAllUser();
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student retrive successfully!',
        data: result,
    });
}));
//*Update Student
const updateStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const student = req.body;
    const result = yield student_service_1.StudentService.updateStudent(id, student);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student Update successfully!',
        data: result,
    });
}));
//!Delete Student controller
const deleteStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield student_service_1.StudentService.delteStudent(id);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student Delete successfully!',
        data: result,
    });
}));
exports.StudentController = {
    getStudent,
    updateStudent,
    deleteStudent
};
