let nums = [1, 2, 3, 4, 5];

let result = nums.reduce((prev, current) => {
  console.log(
    'prev : ' +
      prev +
      ', current : ' +
      current +
      ', returned Value : ' +
      (prev + current)
  );
  return prev + current;
});

console.log(result);
