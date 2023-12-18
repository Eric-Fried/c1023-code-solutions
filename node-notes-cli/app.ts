import { readFile, writeFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const [, , command, arg1, arg2] = process.argv;
const contents = await readFile('data.json', { encoding: 'utf8' });

const data: Data = JSON.parse(contents);

async function write(data: Data): Promise<void> {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}
async function checkNote(note: string): Promise<void> {
  if (!note) {
    console.log('no note entered');
    process.exit(1);
  }
}

try {
  switch (command) {
    case 'read':
      await readNotes();
      break;
    case 'create':
      await addNote(arg1);
      break;
    case 'update':
      await updateNote(arg1, arg2);
      break;
    case 'delete':
      await deleteNote(arg1);
      break;

    default:
      console.log('bad command ');
      process.exit(1);
  }
} catch (err) {
  console.log(err);
  process.exit(1);
}

async function readNotes(): Promise<void> {
  for (const prop in data.notes) {
    console.log(`${prop} - ${data.notes[prop]}`);
  }
}

async function addNote(note: string): Promise<void> {
  checkNote(note);
  data.notes[data.nextId] = note;
  data.nextId++;
  await write(data);
  readNotes();
}

async function deleteNote(id: string): Promise<void> {
  delete data.notes[id];
  await write(data);
  readNotes();
}

async function updateNote(id: string, note: string): Promise<void> {
  checkNote(note);
  data.notes[id] = note;
  await write(data);
  readNotes();
}
