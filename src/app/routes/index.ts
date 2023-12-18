import express from 'express';
import { userRoutes } from '../modules/users/user.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { TeachersRoutes } from '../modules/teachers/teacher.routes';
import { PostRoutes } from '../modules/posts/post.routes';
import { GradesRoutes } from '../modules/Grades/grade.routes';
import { NoticeRoutes } from '../modules/Notices/notices.routes';
import { EmailRoutes } from '../modules/Email/emial.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,

  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/teachers',
    route: TeachersRoutes,
  },
  {
    path: '/posts',
    route: PostRoutes,
  },
  {
    path: '/grades',
    route: GradesRoutes,
  },
  {
    path: '/notices',
    route: NoticeRoutes,
  },
  {
    path:'/mail',
    route:EmailRoutes
  }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
