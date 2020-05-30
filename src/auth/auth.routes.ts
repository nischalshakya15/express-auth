import { Router } from 'express';
import { authenticate, createAccessToken } from './auth.controller';
import { verifyRefreshToken } from '../middlewares/token.middleware';
import { fetchUser } from '../middlewares/users.middleware';

const router = Router();

router.post('/authenticate', authenticate);

router.post('/token', [verifyRefreshToken, fetchUser], createAccessToken);

export default router;
