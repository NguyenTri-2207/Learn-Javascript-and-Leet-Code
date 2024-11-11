/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let left = Infinity;
  let right = Infinity;

  for (let curent of nums) {
    if (curent <= left) {
      left = curent; // Update left if i is smaller than or equal to left
    } else if (curent <= right) {
      right = curent; // Update right if i is smaller than or equal to right
    } else {
      return true; // Found a triplet where left < right < i
    }
  }

  return false; // No triplet found
};

increasingTriplet([2, 1, 5, 2, 4, 6]);
