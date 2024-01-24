const reqFilterMiddleware = (req, res, next) => {
  console.log(req.query);
  if (!req.query.age) {
    res.send('Please provide your age');
  } else if (req.query.age < 18) {
    res.send('You are underage');
  } else {
    next();
  }
};

const name = 'Rahul';

export default reqFilterMiddleware;
export { name };
