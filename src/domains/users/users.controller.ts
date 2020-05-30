import { NextFunction, Request, Response } from 'express';
import * as userService from './users.service';
import { Users } from './users';
import * as HttpStatus from 'http-status-codes';

export async function fetchAll(req: Request, res: Response, next: NextFunction) {
  try {
    const users: Users[] = await userService.fetchAll();
    res.status(HttpStatus.OK).send({ data: users });
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const user: Users = await userService.create(req.body);
    res.status(HttpStatus.CREATED).send({ data: user });
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const user: Users = await userService.update(Number(req.params.id), req.body);
    res.status(HttpStatus.OK).send({ data: user });
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await userService.remove(Number(req.params.id));
    res.status(HttpStatus.OK).send({ data: 'User removed successfully' });
  } catch (error) {
    next(error);
  }
}

export async function fetchById(req: Request, res: Response, next: NextFunction) {
  try {
    const user: Users = await userService.fetchById(Number(req.params.id));
    res.status(HttpStatus.OK).send({ data: user });
  } catch (error) {
    next(error);
  }
}
