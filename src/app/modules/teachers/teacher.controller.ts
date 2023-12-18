import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';


import { sendSuccessResponse } from '../../../shared/customResponse';
import { TeacherService } from './teacher.service';
import { IFacilitator } from './teacher.interface';
import { sendReponse } from '../../../constant/shared.constant';

//* Update Teacher Controller
const updateTeacherController: RequestHandler = catchAsync(
  async (req: Request, res: Response)=> {
    const id = req.params.id;
    const teacher = req.body;
    const result = await TeacherService.updateTeacher(id ,teacher);
  


  sendReponse<IFacilitator>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teacher Update successfully!',
    data: result,
  });}
 
);
// Find Facilitator By ID
const findFacilitatorByIdController: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await TeacherService.findFacilitatorById(id);

    sendReponse<IFacilitator>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Teacher find successfully!',
      data: result,
    });
  }
);

//!Delete Teacher controller
 const deleteTeacherController: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await TeacherService.delteTeacher(id);

    sendReponse<IFacilitator>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Teacher Delete successfully!',
      data: result,
    });
  }
);




export const TeacherController = {
  updateTeacherController,
  deleteTeacherController,
  findFacilitatorByIdController
};
