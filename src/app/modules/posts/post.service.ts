import { SortOrder } from "mongoose";
import { IPaginationOption } from "../../../interfaces/sharedInterface";
import { calculatePagination } from "../../helpers/paginationHelper";
import { postSearchableFields, postSerchableFilters } from "./post.constants";
import { IPost } from "./posts.interface";
import { Post } from "./posts.model";

const createPost =async(post:IPost) => {
    return (await Post.create(post)).populate('authorId');
}

// * GET All Posts
const getAllPost = async (
    filters: postSerchableFilters,
    paginationOptions: IPaginationOption
  ) => {
    const { searchTerm, ...filtersData } = filters;
  
    const andConditions = [];
  
    if (searchTerm) {
      andConditions.push({
        $or: postSearchableFields.map(field => ({
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
  
    const result = await Post.find(whereConditons).populate('authorId') 
      .sort(sortConditions)
      .skip(skip)
      .limit(limit);
  
    const total = await Post.countDocuments();
  
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    };
  };

export const PostService ={
    createPost,
    getAllPost
}