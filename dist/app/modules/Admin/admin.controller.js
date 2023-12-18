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
exports.AdminController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const customResponse_1 = require("../../../shared/customResponse");
const http_status_1 = __importDefault(require("http-status"));
const admin_service_1 = require("./admin.service");
// import { sendReponse } from "../../../constant/shared.constant";
//     sendSuccessResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'user created successfully!',
//       data: result,
//     });
//   }
// );
const getAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admin_service_1.AdminService.getAllAdmin();
    (0, customResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student retrive successfully!',
        data: result,
    });
}));
// //*Update Student
// const updateStudent: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//    const id = req.params.id;
//     const student = req.body;
//     const result = await StudentService.updateStudent(id ,student);
//     sendReponse<IStudent>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student Update successfully!',
//       data: result,
//     });
//   }
// );
// //!Delete Student controller
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
exports.AdminController = {
    getAdmin
};
