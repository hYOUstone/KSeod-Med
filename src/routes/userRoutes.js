import { Router } from 'express';
import authenticate from '../middleware/auth.js';
import { getProfile, listUsers } from '../controllers/userController.js';

const router = Router();

router.get('/me', authenticate, getProfile);
router.get('/', authenticate, listUsers);

export default router;
