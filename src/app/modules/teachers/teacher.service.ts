// create user

import ApiError from "../../../errors/ApiError";
import { IFacilitator } from "./teacher.interface";
import { Facilitator } from "./teacher.model";


//*Update Teacher
const updateTeacher = async (id:string ,payload:Partial<IFacilitator>):Promise<IFacilitator |null> => {
 const updatedTeacher = await Facilitator.findOneAndUpdate({_id:id}, payload, {new: true});
  if (!updatedTeacher) {
    throw new ApiError(400, 'Failed to update Facilitator');
  }
  return updatedTeacher;
}
//* Find Facilator By ID
const findFacilitatorById = async (id: string): Promise<IFacilitator | null> => { 
   const result = await Facilitator.findById(id);
    if (!result) {
      throw new ApiError(400, 'Failed to find');
    }
    return result;
} 
// !Delete Teacher service
 const delteTeacher = async (id: string): Promise<IFacilitator | null> => { 
  const result = await Facilitator.findByIdAndDelete({ _id: id });
  if (!result) {
    throw new ApiError(400, 'Failed to delete');
  }
  return result;
 }

export const TeacherService = {
  updateTeacher,
  delteTeacher,
  findFacilitatorById
}