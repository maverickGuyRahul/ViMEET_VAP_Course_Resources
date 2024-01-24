let nums = [1, 2, 3, 4, 5, 6, 7, 12, 22];

// nums.forEach((number) => {
//   console.log(number * 2);
// });

function callBackFunction(num) {
  return num % 2 === 0;
}

let pishviValue = nums.filter(callBackFunction);

console.log(nums);
console.log(pishviValue);
