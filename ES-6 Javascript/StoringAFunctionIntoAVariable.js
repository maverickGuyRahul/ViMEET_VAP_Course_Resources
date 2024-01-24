// let addition = function (num1, num2) {
//   let result = num1 + num2;
//   return result;
// };

// let returnValue = addition(24, 21);

// let addition = (num1, num2) => {
//   let result = num1 + num2;
//   return result;
// };

// let returnValue = addition(24, 21);

let addition = (num1, num2) => num1 + num2; // If there is only one line In the body of an arrow function, And if that line is only doing the work of returning something, then don't  write the return keyword also.

let returnValue = addition(24, 21);

console.log(returnValue);
