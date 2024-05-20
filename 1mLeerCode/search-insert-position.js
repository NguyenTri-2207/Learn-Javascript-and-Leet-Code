/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// My code
var searchInsert = function (nums, target) {
  let result = nums.findIndex((item) => item === target);
  if (result === -1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        result = i;
        break;
      } else {
        result = i + 1;
      }
    }
  }
  console.log(result);
  return result;
};

// Code of the top 1
// var searchInsert = function (nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//       if (target <= nums[i]) {
//         return i;
//       }
//     }
//     return i;
//   };
var nums = [1, 3, 5, 6];
var target = 7;
console.log(searchInsert(nums, target));
