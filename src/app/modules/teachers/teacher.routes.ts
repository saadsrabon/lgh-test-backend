// create routes
import  express  from 'express';
import { TeacherController } from './teacher.controller';


const router =express.Router();
// router.post('/create-user', UserController.createUser );
// router.get('/get-user', UserController.getUser );
router.get('/get-teacher/:id', TeacherController.findFacilitatorByIdController);  
router.put('/update-teacher/:id',TeacherController.updateTeacherController);
router.delete('/delete-teacher/:id',TeacherController.deleteTeacherController);


export  const TeachersRoutes =router;