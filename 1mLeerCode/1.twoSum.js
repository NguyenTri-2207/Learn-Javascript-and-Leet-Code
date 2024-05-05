/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// solution 1
var twoSumS1 = function (arr, target) {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (target - arr[i] === arr[j]) {
          return [i, j];
        }
      }
    }
  }
};
// solution 2
var twoSumS2 = function (arr, target) {
  let has = {};
  for (let i = 0; i < arr.length; i++) {
    let findNum = target - arr[i];
    if (has[findNum] !== undefined) {
      return [has[findNum], i];
    } else {
      has[arr[i]] = i;
    }
  }
};

// solution 3
var twoSumS3 = function (arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let findNum = target - arr[i];
    if (map.has(findNum)) {
      return [map.get(findNum), i];
    } else {
      map.set(arr[i], i);
    }
  }
};
(nums = [2, 3, 4, 11, 9, 2]), (target = 7);
console.log(twoSumS3(nums, target));

// 1.for
// 2.crearte has table has ={}
// 3. fin = target - arr[i]  => fin exist has => true
// 4. fin no exist => has[arr[i]] = i
