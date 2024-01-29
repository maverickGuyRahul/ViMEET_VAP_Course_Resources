import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://rahul123:123@fullstackbatch1.g0vl8bj.mongodb.net/users'
);

const peopleSchema = new mongoose.Schema({
  email: String,
  password: String,
  age: String,
});

const User = mongoose.model('User', peopleSchema);

// const rohan = new Person({
//   name: 'Rohan',
//   age: 20,
// });

// mongoose.disconnect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('signup.ejs');
});

app.post('/signup', async (req, res) => {
  try {
    const { email, passwd, age } = req.body;

    // Validation
    if (!email || !passwd || !age) {
      return res.status(400).send('Invalid input data');
    }

    const user = new User({
      email: email,
      password: passwd,
      age: parseInt(age),
    });

    await user.save(); // Use async/await to wait for the save operation to complete

    res.render('landingPage.ejs', { username: email });
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, 'localhost', () => {
  console.log(`Server is actively listening on port ${port}`);
});
