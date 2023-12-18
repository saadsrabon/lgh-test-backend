// create routes
import  express  from 'express';
import { StudentController } from './student.controller';

const router =express.Router();
// router.post('/create-user', UserController.createUser );
router.get('/get-user',  );
router.put('/update-student/:id',StudentController.updateStudent);
router.delete('/delete-student/:id',StudentController.deleteStudent);


export  const StudentRoutes =router;