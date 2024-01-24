var compose = function (functions) {
  return function (x) {
    let sum = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      sum = functions[i](sum);
    }
    return sum;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4);
console.log(fn(4));
