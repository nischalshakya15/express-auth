import { Users } from './users';
import * as userRepository from './users.repository';

export async function fetchAll(): Promise<Users[]> {
  return await userRepository.fetchAll();
}

export async function create(user: Users): Promise<Users> {
  return await userRepository.create(user);
}

export async function update(id: number, user: Users): Promise<Users> {
  return await userRepository.update(id, user);
}

export async function remove(id: number): Promise<void> {
  await userRepository.remove(id);
}

export async function fetchById(id: number): Promise<Users> {
  return await userRepository.fetchById(id);
}
