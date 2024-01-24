import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('HELLO');
});

// app.post('/login', (req, res) => {
//   console.log(req.body);
// });

app.listen(port, 'localhost', () => {
  console.log(`Server is actively listening on port ${port}`);
});
