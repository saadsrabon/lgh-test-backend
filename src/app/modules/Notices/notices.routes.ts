// create routes
import  express  from 'express';
import { NoticeController} from './notices.controller';

const router =express.Router();

router.post('/create-notice', NoticeController.createNotice );


export  const NoticeRoutes =router;