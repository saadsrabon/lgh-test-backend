
import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { sendSuccessResponse } from "../../../shared/customResponse";

import httpStatus from "http-status";
import { GradeService } from "./grade.service";
import { IGrade } from "./grade.interface";
import { sendReponse } from "../../../constant/shared.constant";




const createGrade: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const grade = req.body;
    const result = await GradeService.createGrade(grade);

    sendSuccessResponse<IGrade>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grade created successfully!',
      data: result,
    });
  }
);


//*Update Grade controller

//  const updateGrade: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const payload = req.body;
//     const result = await GradeService.updateGrade(id, payload);

//    sendReponse<IGrade>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Grade Update successfully!',
//       data: result,
//     });
  
//   });
//!Delete Student controller
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

const getGrade: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
   
    const result = await GradeService.getAllGrades();

    sendSuccessResponse<IGrade[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grade retrive successfully!',
      data: result,
    });
  }
);

const updateGrade: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await GradeService.updateGrade(id, payload);

   sendReponse<IGrade>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Grade Update successfully!',
      data: result,
    });
  
  }
)



export const GradeController = {
 createGrade,
  getGrade,
  updateGrade
  
};
