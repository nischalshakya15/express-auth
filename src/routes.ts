import { Router } from 'express';
import userRoutes from './domains/users/users.routes';

const router = Router();

router.use('/users', userRoutes);

export default router;
