// import * as fs from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

try {
  const filePath = new URL('dijkstra.txt', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error('Error reading file', err);
  process.exit(1);
}
