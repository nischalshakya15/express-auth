import jwt from 'jsonwebtoken';
import { Users } from '../domains/users/users';
import { config } from '../config/config';

export function generateToken(user: Users) {
  const accessToken =
    'Bearer ' +
    jwt.sign({ id: user.id }, config.jwt.accessToken.secret, {
      expiresIn: config.jwt.accessToken.expiresIn
    });

  const refreshToken =
    'Bearer ' +
    jwt.sign({ id: user.id }, config.jwt.refreshToken.secret, {
      expiresIn: config.jwt.refreshToken.expiresIn
    });
  return { accessToken, refreshToken };
}
