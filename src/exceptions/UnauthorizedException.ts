import { UNAUTHORIZED } from 'http-status-codes';

import { GlobalExceptionHandler } from './GlobalExceptionHandler';

export class UnauthorizedException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(UNAUTHORIZED, message);
  }
}
