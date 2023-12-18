// create user

import ApiError from "../../../errors/ApiError";
import { IGrade } from "./grade.interface";
import { Grades } from "./grade.model";

const createGrade = async (grade: IGrade) => {
  const createdGrade = await Grades.create(grade);
  if (!createdGrade) {
    throw new ApiError(400, 'Failed to create');
  }
  return createdGrade;

}

const getAllGrades= async () => {

    const createdGrades = await Grades.find()
    if (!createdGrades) {
        throw new ApiError(400, 'Failed to Get');
      }
    return createdGrades;
   
}
//*Update Grade

const updateGrade = async ( id: string,
  payload: Partial<IGrade>):Promise<IGrade|null> => {
   //i want to add the notices in the notices array also need to available previous values
    //so i use $push
     const result =await Grades.findOneAndUpdate({_id:id},{$push:{notices:payload.notices}},{new:true}) 
    // const result =await Grades.findOneAndUpdate({_id:id},payload,{new:true})
    if(!result){
      throw new ApiError(400,'Failed to update');
    }
    return result;
}


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
export const GradeService = {

createGrade,
getAllGrades,
updateGrade

}