import { NextFunction, Request, Response } from 'express';
import { Users } from '../domains/users/users';
import { validateUser } from '../domains/users/users.repository';
import * as HttpStatus from 'http-status-codes';
import { generateToken } from './jwt';

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user: Users = await validateUser(req.body);
    const { refreshToken, accessToken } = generateToken(user);
    res.status(HttpStatus.OK).send({ refreshToken, accessToken });
  } catch (error) {
    next(error);
  }
}
