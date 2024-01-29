import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://rahul123:123@fullstackbatch1.g0vl8bj.mongodb.net/students'
);

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', peopleSchema);

// const rohan = new Person({
//   name: 'Rohan',
//   age: 20,
// });

const rahul = new Person({
  name: 'Rahul',
  age: 42,
});

rahul.save();

// mongoose.disconnect();
