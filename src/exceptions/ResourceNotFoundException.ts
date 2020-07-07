import {NOT_FOUND} from 'http-status-codes';

import { GlobalExceptionHandler } from './GlobalExceptionHandler';

export class ResourceNotFoundException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(NOT_FOUND, message);
  }
}
