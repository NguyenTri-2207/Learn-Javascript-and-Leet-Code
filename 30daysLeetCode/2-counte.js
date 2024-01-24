var createCounter = function (n) {
  return function () {
    let counter = n++;
    return counter;
  };
};
const f = createCounter(1);
console.log(f());
console.log(f());
console.log(f());
