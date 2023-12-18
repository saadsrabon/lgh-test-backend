


// const createUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const  user  = req.body;
//     const result = await UserService.createUser(user);

import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { sendSuccessResponse } from "../../../shared/customResponse";
import { INotice} from "./notices.interface";
import httpStatus from "http-status";
import { NoticeService, } from "./notices.service";




const createNotice: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const notice = req.body;
    const result = await NoticeService.createNotice(notice);
    sendSuccessResponse<INotice>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Notices created successfully!',
      data: result,
    });
  }
);

export const NoticeController={
  createNotice,
}