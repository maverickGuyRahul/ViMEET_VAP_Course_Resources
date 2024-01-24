let nums = [1, 2, 3, 4, 5, 6, 7, 12, 22];

let returnedPishvi = nums
  .filter((num) => {
    return num % 2 === 0;
  })
  .map((num) => {
    return num * 2;
  });

console.log(returnedPishvi);
