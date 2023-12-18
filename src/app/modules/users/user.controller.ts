import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

import { IUser } from './user.interface';
import { UserService } from './user.service';
import { sendSuccessResponse } from '../../../shared/customResponse';
import { Facilitator } from './../teachers/teacher.model';
import pick from '../../../shared/pick';
import { userSearchableFields } from './user.constants';
import { paginationFields, sendReponse  } from '../../../constant/shared.constant';
import { IParent } from '../parents/parents.interface';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const  {student ,... userData}  = req.body;
    const result = await UserService.createUser(userData ,student);

    sendSuccessResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  }
);
const createFacilitators: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const  {facilitator ,... userData}  = req.body;
    const result = await UserService.createFacilitators(userData ,facilitator);

    sendSuccessResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Facilatator created successfully!',
      data: result,
    });
  }
);
const createParents: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const  {parent ,... userData}  = req.body;
    const result = await UserService.createParent(userData ,parent);

    sendReponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Parent created successfully!',
      data: result,
    });
  }
);

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const  {admin ,... userData}  = req.body;
    const result = await UserService.createAdmin(userData ,admin);

    sendSuccessResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created successfully!',
      data: result,
    });
  }
);

const getUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
 
    const result = await UserService.getAllUser();

    sendSuccessResponse<IUser[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user retrive successfully!',
      data: result,
    });
  }
);

const getAllUserDetails = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userSearchableFields);
  const paginationOptions = pick(req.query, paginationFields);
console.log("filters",filters);
console.log("paginationOptions",paginationOptions);
  const result = await UserService.getAllUserDetails(
    filters,
    paginationOptions
  );

  sendSuccessResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});


export const UserController = {
  createUser,
  getUser,
  createFacilitators,
  getAllUserDetails,
  createParents,
  createAdmin
};
