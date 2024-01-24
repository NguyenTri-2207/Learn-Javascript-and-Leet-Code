var once = function (fn) {
  let hasExecuted = true;
  return function (...args) {
    if (hasExecuted) {
      hasExecuted = false;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
