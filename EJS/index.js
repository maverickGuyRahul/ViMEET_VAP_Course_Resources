import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('formPage.ejs');
});

app.post('/user', (req, res) => {
  // res.render('index.ejs', {name : req.body})
  // console.log(req.body.fullName);
  const nameFromFrontEnd = req.body.fullName;

  res.render('index.ejs', { name: nameFromFrontEnd });
});

app.listen(port, 'localhost', () => {
  console.log(`Server is actively listening on port ${port}`);
});
