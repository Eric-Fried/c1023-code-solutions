import { writeFile } from 'node:fs/promises';

try {
  const randomNumber = Math.random().toString();

  writeFile('random.txt', randomNumber.concat('\n'), 'utf8');
} catch (err) {
  console.log('Error writing file', err);
}
