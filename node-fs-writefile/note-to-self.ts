import { writeFile } from 'node:fs/promises';

// const [, , note] = process.argv;

try {
  writeFile('note.txt', `${process.argv[2]} \n`, 'utf8');
} catch (err) {
  console.log(err);
  process.exit(1);
}
