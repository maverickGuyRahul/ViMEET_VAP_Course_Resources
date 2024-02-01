import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import encrypt from 'mongoose-encryption';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;
const saltRounds = 10;

console.log(process.env.SECRET_KEY);

mongoose.connect(
  'mongodb+srv://rahul123:123@fullstackbatch1.g0vl8bj.mongodb.net/users'
);

const peopleSchema = new mongoose.Schema({
  email: String,
  password: String,
  age: String,
});

// peopleSchema.plugin(encrypt, {
//   secret: process.env.SECRET_KEY,
//   encryptedFields: ['password'],
// });

const User = mongoose.model('User', peopleSchema);

// const rohan = new Person({
//   name: 'Rohan',
//   age: 20,
// });

// mongoose.disconnect();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('signup.ejs');
});

app.get('/login', async (req, res) => {
  res.render('login.ejs');
});

app.post('/signup', async (req, res) => {
  try {
    const { email, passwd, age } = req.body;

    // Validation
    if (!email || !passwd || !age) {
      return res.status(400).send('Invalid input data');
    }

    const foundUser = await User.findOne({ email: email });
    if (!foundUser) {
      bcrypt.hash(passwd, saltRounds, function (err, hash) {
        console.log('password hash : ' + hash);

        const user = new User({
          email: email,
          password: hash,
          age: parseInt(age),
        });

        user.save(); // Use async/await to wait for the save operation to complete
      });

      res.render('landingPage.ejs', {
        username: email,
        message: ' Registered',
      });
      console.log(req.body);
    } else {
      res.send('This email already exists');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, passwd } = req.body;
    console.log(email);
    console.log(passwd);
    // Validation
    if (!email || !passwd) {
      return res.status(400).send('Invalid input data');
    }

    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
      bcrypt.compare(passwd, foundUser.password, async (err, result) => {
        console.log(foundUser.password);
        console.log(result);
        if (result === true) {
          res.render('landingPage.ejs', {
            username: email,
            message: ' logged in',
          });
        } else {
          res.status(400).send('Invalid credentials');
        }
      });

      console.log(foundUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, 'localhost', () => {
  console.log(`Server is actively listening on port ${port}`);
});
