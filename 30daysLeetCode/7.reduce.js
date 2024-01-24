var reduce = function (nums, fn, init) {
  let accumalator = init !== undefined ? init : nums[0];

  let startIndex = init !== undefined ? 0 : 1;

  for (let i = startIndex; i < nums.length; i++) {
    accumalator = fn(accumalator, nums[i]);
  }
  return accumalator;
};
console.log(reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 5));
