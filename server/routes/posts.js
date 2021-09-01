import express from 'express';
import { getPosts} from '../controllers/posts.js'
import { createPost} from '../controllers/posts.js'



const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);

export default router;