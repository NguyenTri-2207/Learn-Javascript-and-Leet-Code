var map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};
console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i;
  })
);
