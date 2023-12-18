// create user

import ApiError from "../../../errors/ApiError";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IFacilitator } from "../teachers/teacher.interface";
import { Facilitator } from "../teachers/teacher.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { userSearchableFields, userSerchableFilters } from './user.constants';
import { IGenericResponse, IPaginationOption } from "../../../interfaces/sharedInterface";
import paginationHelper, { calculatePagination } from "../../helpers/paginationHelper";
import { SortOrder } from "mongoose";
import { IParent } from "../parents/parents.interface";
import { Parent } from "../parents/parent.model";
import { IAdmin } from "../Admin/admin.interface";
import { Admin } from "../Admin/admin.model";

// Create a user sdtudet
const createUser = async (user: IUser ,student:IStudent) => {
  //  student create korbo
    console.log("user",user);
    console.log("student",student);
  const createdStudent = await Student.create(student);  

  if (!createdStudent) {
    throw new ApiError(400, 'Failed to create');
  }
  console.log('going to user')
   user.studentId = createdStudent._id;
  const createdUser = (await User.create(user)).populate('studentId');
    if (!createdUser) {
        throw new ApiError(400, 'Failed to create');
      }
      return createdUser;
   
   
}
const createFacilitators  = async (user: IUser ,facilitator:IFacilitator) => {
  //  student create korbo
    
  const createdFacilitator = await Facilitator.create(facilitator);  

  if (!createdFacilitator) {
    throw new ApiError(400, 'Failed to create');
  }
   user.facilitatorId= createdFacilitator._id;
  const createdUser = (await User.create(user)).populate('facilitatorId');
    if (!createdUser) {
        throw new ApiError(400, 'Failed to create');
      }
      return createdUser;
   
   
}

const createParent  = async (user: IUser ,parent:IParent) => {
  //  student create korbo
    
  const createdParent= (await Parent.create(parent))  

  if (!createdParent) {
    throw new ApiError(400, 'Failed to create');
  }
  console.log("createdParent",createdParent);
   user.parentId= createdParent._id;
  const createdUser = (await User.create(user)).populate('parentId');
    if (!createdUser) {
        throw new ApiError(400, 'Failed to create');
      }
      return createdUser;
   
   
}

const createAdmin = async (user: IUser ,admin:IAdmin) => {
  //  student create korbo
    
  const createdAdmin = await Admin.create(admin);  

  if (!createdAdmin) {
    throw new ApiError(400, 'Failed to create');
  }
   user.adminId= createdAdmin._id;
  const createdUser = (await User.create(user)).populate('adminId');
    if (!createdUser) {
        throw new ApiError(400, 'Failed to create');
      }
      return createdUser;
}


const getAllUser = async () => {

    const createdUser = await User.find();
    if (!createdUser) {
        throw new ApiError(400, 'Failed to Get');
      }
    return createdUser;
   
}
const getAllUserDetails = async (
  filters: userSerchableFilters,
  paginationOptions: IPaginationOption
) => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }


  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditons =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await User.find(whereConditons).populate('studentId').populate('facilitatorId').populate('parentId') 
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await User.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
export const UserService = {
createUser,
getAllUser,
getAllUserDetails,
createFacilitators,
createParent,
createAdmin,
}