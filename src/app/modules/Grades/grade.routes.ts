// create routes
import  express  from 'express';
import { GradeController } from './grade.controller';


const router =express.Router();
// router.post('/create-user', UserController.createUser );
router.get('/get-grades',GradeController.getGrade);
// router.put('/update-student/:id',StudentController.updateStudent);
// router.delete('/delete-student/:id',StudentController.deleteStudent);
router.post('/create-grade', GradeController.createGrade );
router.put('/update-grade/:id',GradeController.updateGrade);


export  const GradesRoutes =router;