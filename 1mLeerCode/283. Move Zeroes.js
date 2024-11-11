/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonzero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonzero] = nums[i];
      nonzero++;
    }
  }
  for (let j = nonzero; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};
moveZeroes([0, 1, 0, 3, 12]);
// console.log(moveZeroes([0, 1, 0, 3, 12]));
