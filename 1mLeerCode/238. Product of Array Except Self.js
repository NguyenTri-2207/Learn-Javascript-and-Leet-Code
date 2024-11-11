function productExceptSelf(nums) {
  const output = new Array(nums.length);
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = left;
    left *= nums[i];
  }
  let right = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= right;
    right *= nums[j];
  }

  return output;
}

// Example usage:
const nums = [2, 2, 3];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
