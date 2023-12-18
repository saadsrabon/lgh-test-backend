// create user

import ApiError from "../../../errors/ApiError";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";



const getAllUser = async () => {

    const createdUser = await Student.find();
    if (!createdUser) {
        throw new ApiError(400, 'Failed to Get');
      }
    return createdUser;
   
}
//*Update Student

const updateStudent = async (
  id: string,
  payload: Partial<IStudent>
): Promise<IStudent | null> => {
 

  const result = await Student.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(400, 'Failed to update');
  }
  return result;
};

//!Delete Student service
const delteStudent = async (id: string): Promise<IStudent | null> => {
  const result = await Student.findByIdAndDelete({ _id: id });
  if (!result) {
    throw new ApiError(400, 'Failed to delete');
  }
  return result;
}
export const StudentService = {

getAllUser,
updateStudent,
delteStudent
}