import express from 'express';
import reqFilterMiddleware from './middleware.js';
import { name } from './middleware.js';

const app = express();
const port = 3000;

// app.use(reqFilterMiddleware);

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.get('/users', reqFilterMiddleware, (req, res) => {
  res.send('Welcome to users page!!');
});

app.listen(port, 'localhost', () => {
  console.log(
    `Server is actively listening on port ${port} and name is ${name}`
  );
});
