


// const createUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const  user  = req.body;
//     const result = await UserService.createUser(user);

import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { sendSuccessResponse } from "../../../shared/customResponse";
import { IAdmin } from "./admin.interface";
import httpStatus from "http-status";
import { AdminService,} from "./admin.service";
// import { sendReponse } from "../../../constant/shared.constant";

//     sendSuccessResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'user created successfully!',
//       data: result,
//     });
//   }
// );

const getAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
 
    const result = await AdminService.getAllAdmin();

    sendSuccessResponse<IAdmin[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrive successfully!',
      data: result,
    });
  }
);

// //*Update Student
// const updateStudent: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//    const id = req.params.id;
   
//     const student = req.body;
//     const result = await StudentService.updateStudent(id ,student);

//     sendReponse<IStudent>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student Update successfully!',
//       data: result,
//     });
//   }
// );

// //!Delete Student controller
//  const deleteStudent: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const result = await StudentService.delteStudent(id);

//     sendReponse<IStudent>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student Delete successfully!',
//       data: result,
//     });
//   }
//  );


export const AdminController = {
  getAdmin
};
