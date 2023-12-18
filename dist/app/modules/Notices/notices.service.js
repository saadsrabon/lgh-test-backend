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
exports.NoticeService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const grade_model_1 = require("../Grades/grade.model");
const notices_model_1 = require("./notices.model");
const createNotice = (notice) => __awaiter(void 0, void 0, void 0, function* () {
    const createdNotice = yield notices_model_1.Notices.create(notice);
    if (!createdNotice) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    console.log("notice", notice);
    const updateGrade = yield grade_model_1.Grades.findOneAndUpdate({ _id: notice.gradeId }, { $push: { noticeId: createdNotice._id } }, { new: true });
    console.log("updateGrade", updateGrade);
    return createdNotice;
});
exports.NoticeService = {
    createNotice,
};
