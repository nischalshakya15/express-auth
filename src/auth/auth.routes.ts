import { Router } from 'express';
import { authenticate, createAccessToken } from './auth.controller';
import { fetchUser } from '../middlewares/users.middleware';
import { verifyRefreshToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/authenticate', authenticate);

router.post('/token', [verifyRefreshToken, fetchUser], createAccessToken);

export default router;
