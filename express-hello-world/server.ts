import express from 'express';

const app = express();
app.use((req, res) => {
  console.log(req.method);
  res.send('random string 6 ');
});

app.listen(8080, () => {
  console.log('sever is listeing on port 8080');
});
