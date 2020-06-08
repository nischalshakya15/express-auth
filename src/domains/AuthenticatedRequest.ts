import { Request } from 'express';
import { Users } from './users/users';
import { Query } from './query';

export interface AuthenticatedRequest extends Request {
  users?: Users | any;
  query: Query;
}
