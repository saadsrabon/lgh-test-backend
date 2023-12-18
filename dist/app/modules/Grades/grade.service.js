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
exports.GradeService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const grade_model_1 = require("./grade.model");
const createGrade = (grade) => __awaiter(void 0, void 0, void 0, function* () {
    const createdGrade = yield grade_model_1.Grades.create(grade);
    if (!createdGrade) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    return createdGrade;
});
const getAllGrades = () => __awaiter(void 0, void 0, void 0, function* () {
    const createdGrades = yield grade_model_1.Grades.find();
    if (!createdGrades) {
        throw new ApiError_1.default(400, 'Failed to Get');
    }
    return createdGrades;
});
//*Update Grade
const updateGrade = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    //i want to add the notices in the notices array also need to available previous values
    //so i use $push
    const result = yield grade_model_1.Grades.findOneAndUpdate({ _id: id }, { $push: { notices: payload.notices } }, { new: true });
    // const result =await Grades.findOneAndUpdate({_id:id},payload,{new:true})
    if (!result) {
        throw new ApiError_1.default(400, 'Failed to update');
    }
    return result;
});
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
//!Delete Student service
// const delteStudent = async (id: string): Promise<IStudent | null> => {
//   const result = await Student.findByIdAndDelete({ _id: id });
//   if (!result) {
//     throw new ApiError(400, 'Failed to delete');
//   }
//   return result;
// }
exports.GradeService = {
    createGrade,
    getAllGrades,
    updateGrade
};
