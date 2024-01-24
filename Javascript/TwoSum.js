// Use Set 54ms 44.22MB
function twoSumSet(nums, target) {
  const hasMap = new Set();

  for (let i = 0; i < nums.length; i++) {
    const completement = target - nums[i];
    if (hasMap.has(completement)) {
      return [nums.indexOf(completement), i];
    }
    hasMap.add(nums[i]);
  }
  return null;
}
// Use Map. 58ms 42.98MB
function twoSumMap(nums, target) {
  const hasMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const completement = target - nums[i];
    if (hasMap.has(completement)) {
      return [hasMap.get(completement), i];
    }
    hasMap.set(nums[i], i); //.set giá trị làm key để get đươc index từ .get
  }
  return null;
}

function twoSumhashMap(nums, target) {
  const hasMap = {};

  for (let i = 0; i < nums.length; i++) {
    const completement = target - nums[i];
    if (hasMap.has(completement)) {
      return [hasMap.get(completement), i];
    }
    hasMap[nums[i]] = i; //.set giá trị làm key để get đươc index từ .get
  }
  return null;
}
let a = twoSumhashMap([10, 2, 8, 8, 9, 7, 7, 9], 15);
console.log(a);

//lôp 83ms 42.00MB
function TowSumLopp(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}
// TowSumLopp([2, 8, 3, 7, 9], 9);
