import { GlobalExceptionHandler } from './GlobalExceptionHandler';
import { NextFunction, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';

export function globalExceptionHandlerMiddleware(
  exceptionHandler: GlobalExceptionHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(exceptionHandler.status || HttpStatus.INTERNAL_SERVER_ERROR).send({
    timestamp: new Date(),
    status: exceptionHandler.status || HttpStatus.INTERNAL_SERVER_ERROR,
    message: exceptionHandler.message || 'Something went wrong',
  });
}
