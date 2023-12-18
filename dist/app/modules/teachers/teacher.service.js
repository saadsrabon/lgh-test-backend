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
exports.TeacherService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const teacher_model_1 = require("./teacher.model");
//*Update Teacher
const updateTeacher = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTeacher = yield teacher_model_1.Facilitator.findOneAndUpdate({ _id: id }, payload, { new: true });
    if (!updatedTeacher) {
        throw new ApiError_1.default(400, 'Failed to update Facilitator');
    }
    return updatedTeacher;
});
//* Find Facilator By ID
const findFacilitatorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacher_model_1.Facilitator.findById(id);
    if (!result) {
        throw new ApiError_1.default(400, 'Failed to find');
    }
    return result;
});
// !Delete Teacher service
const delteTeacher = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacher_model_1.Facilitator.findByIdAndDelete({ _id: id });
    if (!result) {
        throw new ApiError_1.default(400, 'Failed to delete');
    }
    return result;
});
exports.TeacherService = {
    updateTeacher,
    delteTeacher,
    findFacilitatorById
};
