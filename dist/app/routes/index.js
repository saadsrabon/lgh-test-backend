"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/users/user.routes");
const student_routes_1 = require("../modules/student/student.routes");
const teacher_routes_1 = require("../modules/teachers/teacher.routes");
const post_routes_1 = require("../modules/posts/post.routes");
const grade_routes_1 = require("../modules/Grades/grade.routes");
const notices_routes_1 = require("../modules/Notices/notices.routes");
const emial_routes_1 = require("../modules/Email/emial.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_routes_1.userRoutes,
    },
    {
        path: '/students',
        route: student_routes_1.StudentRoutes,
    },
    {
        path: '/teachers',
        route: teacher_routes_1.TeachersRoutes,
    },
    {
        path: '/posts',
        route: post_routes_1.PostRoutes,
    },
    {
        path: '/grades',
        route: grade_routes_1.GradesRoutes,
    },
    {
        path: '/notices',
        route: notices_routes_1.NoticeRoutes,
    },
    {
        path: '/mail',
        route: emial_routes_1.EmailRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
