import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const myHobbies = [
  'Play guitar and singing',
  'Reading about human psychology',
  'Cooking and baking',
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home.ejs', { hobbies: myHobbies });
});

app.listen(port, 'localhost', () => {
  console.log(`Server is actively listening on port ${port}`);
});
