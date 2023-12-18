// create routes
import  express  from 'express';
import { EmailController } from './email.controller';


const router =express.Router();

router.post('/send-email', EmailController.sendEmail)

export  const EmailRoutes =router;