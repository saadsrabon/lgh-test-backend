"use strict";
// create user
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const student_model_1 = require("../student/student.model");
const teacher_model_1 = require("../teachers/teacher.model");
const user_model_1 = require("./user.model");
const user_constants_1 = require("./user.constants");
const paginationHelper_1 = require("../../helpers/paginationHelper");
const parent_model_1 = require("../parents/parent.model");
const admin_model_1 = require("../Admin/admin.model");
// Create a user sdtudet
const createUser = (user, student) => __awaiter(void 0, void 0, void 0, function* () {
    //  student create korbo
    console.log("user", user);
    console.log("student", student);
    const createdStudent = yield student_model_1.Student.create(student);
    if (!createdStudent) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    console.log('going to user');
    user.studentId = createdStudent._id;
    const createdUser = (yield user_model_1.User.create(user)).populate('studentId');
    if (!createdUser) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    return createdUser;
});
const createFacilitators = (user, facilitator) => __awaiter(void 0, void 0, void 0, function* () {
    //  student create korbo
    const createdFacilitator = yield teacher_model_1.Facilitator.create(facilitator);
    if (!createdFacilitator) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    user.facilitatorId = createdFacilitator._id;
    const createdUser = (yield user_model_1.User.create(user)).populate('facilitatorId');
    if (!createdUser) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    return createdUser;
});
const createParent = (user, parent) => __awaiter(void 0, void 0, void 0, function* () {
    //  student create korbo
    const createdParent = (yield parent_model_1.Parent.create(parent));
    if (!createdParent) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    console.log("createdParent", createdParent);
    user.parentId = createdParent._id;
    const createdUser = (yield user_model_1.User.create(user)).populate('parentId');
    if (!createdUser) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    return createdUser;
});
const createAdmin = (user, admin) => __awaiter(void 0, void 0, void 0, function* () {
    //  student create korbo
    const createdAdmin = yield admin_model_1.Admin.create(admin);
    if (!createdAdmin) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    user.adminId = createdAdmin._id;
    const createdUser = (yield user_model_1.User.create(user)).populate('adminId');
    if (!createdUser) {
        throw new ApiError_1.default(400, 'Failed to create');
    }
    return createdUser;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield user_model_1.User.find();
    if (!createdUser) {
        throw new ApiError_1.default(400, 'Failed to Get');
    }
    return createdUser;
});
const getAllUserDetails = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: user_constants_1.userSearchableFields.map(field => ({
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
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelper_1.calculatePagination)(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditons = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield user_model_1.User.find(whereConditons).populate('studentId').populate('facilitatorId').populate('parentId')
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield user_model_1.User.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
exports.UserService = {
    createUser,
    getAllUser,
    getAllUserDetails,
    createFacilitators,
    createParent,
    createAdmin,
};
