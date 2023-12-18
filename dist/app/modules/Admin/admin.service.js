"use strict";
// create user
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
exports.AdminService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const admin_model_1 = require("./admin.model");
const getAllAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield admin_model_1.Admin.find();
    if (!createdUser) {
        throw new ApiError_1.default(400, 'Failed to Get');
    }
    return createdUser;
});
//*Update Student
// const updateStudent = async (
//   id: string,
//   payload: Partial<IStudent>
// ): Promise<IStudent | null> => {
//   const result = await Student.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   if (!result) {
//     throw new ApiError(400, 'Failed to update');
//   }
//   return result;
// };
// //!Delete Student service
// const delteStudent = async (id: string): Promise<IStudent | null> => {
//   const result = await Student.findByIdAndDelete({ _id: id });
//   if (!result) {
//     throw new ApiError(400, 'Failed to delete');
//   }
//   return result;
// }
exports.AdminService = {
    getAllAdmin
};
