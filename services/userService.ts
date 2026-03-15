import { readJson } from '@/lib/jsondb';
import { User } from '../types';

export async function findUserByEmail(email: string) {
  const users = await readJson<User[]>('users.json');
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
}