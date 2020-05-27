import { Router } from 'express';
import userRoutes from './domains/users/users.routes';
import authRoutes from './auth/auth.routes';
import { authenticationMiddleware } from './auth/auth.middleware';

const router = Router();

router.use(authRoutes);

router.use(authenticationMiddleware);

router.use('/users', userRoutes);

export default router;
