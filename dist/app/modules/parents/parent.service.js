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
exports.StudentService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const student_model_1 = require("../student/student.model");
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield student_model_1.Student.find();
    if (!createdUser) {
        throw new ApiError_1.default(400, 'Failed to Get');
    }
    return createdUser;
});
//*Update Student
const updateStudent = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.Student.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(400, 'Failed to update');
    }
    return result;
});
//!Delete Student service
const delteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.Student.findByIdAndDelete({ _id: id });
    if (!result) {
        throw new ApiError_1.default(400, 'Failed to delete');
    }
    return result;
});
exports.StudentService = {
    getAllUser,
    updateStudent,
    delteStudent
};
