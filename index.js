
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
function namedFunction() {
      console.log("This is a named function.");
  }
return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
      console.log("This is an anonymous function.");
  };
}

const divide = function() {
  return 2000 / 100;
};

const square = (num) => {
  return num * num;
};

const add = (a, b) => {
  return a + b;
};


receivesAFunction(() => {
  console.log("Callback function called.");
});

const namedFunc = returnsANamedFunction();
namedFunc();

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();

console.log("Result of divide():", divide()); // Output: 20
console.log("Result of square(5):", square(5)); // Output: 25
console.log("Result of add(3, 7):", add(3, 7)); // Output: 10
