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
exports.GradeController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const customResponse_1 = require("../../../shared/customResponse");
const http_status_1 = __importDefault(require("http-status"));
const grade_service_1 = require("./grade.service");
const shared_constant_1 = require("../../../constant/shared.constant");
const createGrade = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grade = req.body;
    const result = yield grade_service_1.GradeService.createGrade(grade);
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Grade created successfully!',
        data: result,
    });
}));
//*Update Grade controller
//  const updateGrade: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const payload = req.body;
//     const result = await GradeService.updateGrade(id, payload);
//    sendReponse<IGrade>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Grade Update successfully!',
//       data: result,
//     });
//   });
//!Delete Student controller
//  const deleteStudent: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const result = await StudentService.delteStudent(id);
//     sendReponse<IStudent>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student Delete successfully!',
//       data: result,
//     });
//   }
//  );
const getGrade = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield grade_service_1.GradeService.getAllGrades();
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Grade retrive successfully!',
        data: result,
    });
}));
const updateGrade = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const payload = req.body;
    const result = yield grade_service_1.GradeService.updateGrade(id, payload);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Grade Update successfully!',
        data: result,
    });
}));
exports.GradeController = {
    createGrade,
    getGrade,
    updateGrade
};
