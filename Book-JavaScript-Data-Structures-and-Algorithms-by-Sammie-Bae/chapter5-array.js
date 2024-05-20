var arr = [1, 2, 3, 4, 5];

function findSum(arr, target) {
  const has = {};

  for (let i = 0; i < arr.length; i++) {
    let findNum = target - arr[i];
    if (has[findNum] === undefined) {
      has[arr[i]] = i;
      console.log(has);
    } else {
      return [i, has[findNum]];
    }
  }
  return null;
}

function findSumBetter(arr, weight) {
  var hashtable = {};

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i];
    var difference = weight - currentElement;

    // Check if the complement (difference) exists in the hashtable
    if (hashtable[currentElement] !== undefined) {
      // If found, return the indices of the two elements
      console.log(hashtable);
      return [i, hashtable[currentElement]];
    } else {
      // Store the index of the current element's complement (difference)
      hashtable[difference] = i;
    }
  }

  // If no such pair is found, return -1
  return -1;
}
console.log(findSumBetter(arr, 4));
