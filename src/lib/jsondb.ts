import fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export async function readJson<T>(file: string): Promise<T> {
  const p = path.join(dataDir, file);
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw) as T;
}

export async function writeJson<T>(file: string, data: T): Promise<void> {
  const p = path.join(dataDir, file);
  const tmp = JSON.stringify(data, null, 2);
  await fs.writeFile(p, tmp, 'utf8');
}