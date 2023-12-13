import { readFile } from 'node:fs/promises';
const argumentArray = process.argv.slice(2);
try {
  const promises = argumentArray.map((path) => readFile(path, 'utf8'));

  const joinedPromises = (await Promise.all(promises)).join('\n');

  console.log(joinedPromises);
} catch (err) {
  console.error('Error reading file', err);
  process.exit(1);
}
