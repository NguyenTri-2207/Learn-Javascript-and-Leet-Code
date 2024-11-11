/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let num = null;
  let max = -Infinity;

  for (const [key, value] of map) {
    if (value > max) {
      num = key;
      max = value;
    }
  }
  return num;
};
majorityElement([2, 2, 1, 1, 1, 2, 2]);
