import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/home', (req, res) => {
  res.send('HOME PAGE');
});

app.listen(3000, () => {
  console.log(`The server is running on port ${port}`);
});
