import ApiError from "../../../errors/ApiError";
import { Grades } from "../Grades/grade.model";
import { INotice } from "./notices.interface";
import { Notices } from "./notices.model";

const createNotice = async (notice:INotice)=> {
  const createdNotice = await Notices.create(notice);
  if (!createdNotice) {
    throw new ApiError(400, 'Failed to create');
  }
  console.log("notice",notice);
  const updateGrade= await  Grades.findOneAndUpdate({_id:notice.gradeId},{$push:{noticeId:createdNotice._id}},{new:true})
  console.log("updateGrade",updateGrade)
  return createdNotice;
}

export const NoticeService = {
  createNotice,
}