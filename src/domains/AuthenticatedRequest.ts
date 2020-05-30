import { Request } from 'express';
import { Users } from './users/users';

export interface AuthenticatedRequest extends Request {
  users?: Users | any;
}
