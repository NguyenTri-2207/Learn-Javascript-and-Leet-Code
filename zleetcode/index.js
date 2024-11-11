/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let check = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        check++;
      }
    }
    if (check < 2) {
      return nums[i];
    }
  }
};
var singleNumber1 = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let number = 0;

  for (let i = 0; i < nums.length; i++) {
    number = number ^ nums[i];
  }

  return number;
};
// singleNumber([4, 1, 2, 1, 2]);
console.log(singleNumber1([4, 1, 2, 1, 4]));
