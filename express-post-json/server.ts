import express from 'express';

type UnsavedGrade = {
  name: string;
  course: string;
  score: number;
};
type Grade = UnsavedGrade & { id: number };

let nextId = 1;
const grades: Record<number, Grade> = {};
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  if (!req.body) {
    res.status(400).send('No body');
    return;
  }
  if (!req.body.name) {
    res.status(400).send('No name');
    return;
  }
  if (!req.body.course) {
    res.status(400).send('No course');
    return;
  }
  const score = req.body.score;
  if (!score || !Number.isInteger(+score) || +score < 0 || +score > 100) {
    res.status(400).send('Score must be integer between 0 and 100');
    return;
  }
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
