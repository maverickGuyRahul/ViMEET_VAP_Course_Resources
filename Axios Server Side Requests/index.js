import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://bored-api.appbrewery.com/random');
    console.log(response.data);
    const responseData = response.data;
    res.render('index.ejs', { activity: responseData.activity });
  } catch (error) {
    console.log('Failed to make request because : ' + error.message);
    res.status(500).send('Failed to fetch this activity, try again');
  }
});

app.listen(port, 'localhost', () => {
  console.log(`Server is actively listening on port ${port}`);
});
