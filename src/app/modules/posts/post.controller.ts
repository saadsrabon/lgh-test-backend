import e from "cors";
import catchAsync from "../../../shared/catchAsync";
import { PostService } from "./post.service";
import { paginationFields, sendReponse } from "../../../constant/shared.constant";
import { IPost } from "./posts.interface";
import httpStatus from "http-status";
import { postSearchableFields } from "./post.constants";
import pick from "../../../shared/pick";

const createPostController = catchAsync(async (req, res) => {
    const post = await PostService.createPost(req.body);
   
    sendReponse<IPost>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'post created !',
        data: post,
      });

    });

    // get All Post Controller
    const getAllPostController = catchAsync(async (req, res) => {

        const filters = pick(req.query, postSearchableFields);
        const paginationOptions = pick(req.query, paginationFields);

        const post = await PostService.getAllPost(filters, paginationOptions);
        sendReponse<IPost[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Posts retrive successfully!',
            meta: post.meta,
            data: post.data,
          });
    
        });


    export const PostController = {
        createPostController,
        getAllPostController
    }