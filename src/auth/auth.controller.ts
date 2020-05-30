import { NextFunction, Request, Response } from 'express';
import { Users } from '../domains/users/users';
import * as HttpStatus from 'http-status-codes';
import { generateToken } from './jwt';
import * as authService from './auth.service';

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user: Users = await authService.authenticate(req.body);
    const { refreshToken, accessToken } = generateToken(user);
    res.status(HttpStatus.OK).send({ refreshToken, accessToken });
  } catch (error) {
    next(error);
  }
}
