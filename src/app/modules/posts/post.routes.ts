// create routes
import  express  from 'express';
import { PostController } from './post.controller';
const router =express.Router()

router.post('/create-post',PostController.createPostController  );
router.get('/get-all-post',PostController.getAllPostController  );

export const PostRoutes =router;