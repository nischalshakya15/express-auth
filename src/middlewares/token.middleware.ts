import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { AuthenticatedRequest } from '../domains/AuthenticatedRequest';
import { JwtException } from '../exceptions/JwtException';

export function verifyRefreshToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const refreshToken: string | null = req.body.refreshToken.split(' ')[1];
  if (refreshToken) {
    jwt.verify(refreshToken, config.jwt.refreshToken.secret, (err, user: any) => {
      if (err) {
        throw new JwtException(err.message);
      }
      req.users = user.data;
      next();
    });
  }
}
