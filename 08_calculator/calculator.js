const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
};

const multiply = function (numbers) {
  let sum = 1;
  for (let num of numbers) {
    sum *= num;
  }
  return sum;
};

const power = function (a, b) {
  let sum = 0;
  for (let i = 0; i <= b; i++) {
    sum += a * a;
  }
  return sum;
};

const factorial = function (a) {
  let sum = a;
  if (a === 0) {
    return 1;
  }

  for (let i = a - 1; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
