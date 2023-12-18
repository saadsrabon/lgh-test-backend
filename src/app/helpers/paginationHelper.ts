import { SortOrder } from 'mongoose'

interface IOption {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: SortOrder
}

interface IOptionWithSkip extends IOption {
  skip: number
}

const paginationHelper = (option: IOption): IOptionWithSkip => {
  const page = Number(option.page) || 1
  const limit = Number(option.limit) || 10
  const skip = (page - 1) * limit

  const sortBy = option.sortBy || 'createdAt'
  const sortOrder = option.sortOrder || 'desc'

  return { page, limit, skip, sortBy, sortOrder }
}
export const calculatePagination = (options: IOption) => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 10);
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || 'createdAt';
  const sortOrder = options.sortOrder || 'desc';

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export default paginationHelper
