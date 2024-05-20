function countZeroes(arr) {
  left = 0;
  right = arr.length - 1;
  while (left < right) {
    let midle = Math.floor((left + right) / 2);
    if (arr[midle] === 1) {
      left = midle + 1;
    } else {
      right = midle - 1;
    }
  }
  return arr.length - left;
}

// console.log(countZeroes([1, 1, 0, 0, 0])); // 1

function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midle = Math.floor((left + right) / 2);

    if (arr[midle] === target) {
      return "Found it at" + midle;
    } else if (arr[midle] < target) {
      left = midle + 1;
    } else {
      right = midle - 1;
    }
  }
  return -1;
}

console.log(BinarySearch(["a", "b", "d", "e", "c", "a"], "c"));
