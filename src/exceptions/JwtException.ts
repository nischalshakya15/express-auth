import * as HttpStatus from 'http-status-codes';

import { GlobalExceptionHandler } from './GlobalExceptionHandler';

export class JwtException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message);
  }
}
