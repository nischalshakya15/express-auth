import * as HttpStatus from 'http-status-codes';

import { GlobalExceptionHandler } from './GlobalExceptionHandler';

export class BadRequestException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(HttpStatus.BAD_REQUEST, message);
  }
}
