/*
- O(1) is holy
- O(log n)
- O(n)
- O (n^2)
- O (n^3)
- O (n^n)
*/

const autoArray = new Array(10).fill().map((_, index) => index + 2);

/****************************** O(n) ******************************/
function linearSearch(array, key) {
  for (let index in array) {
    if (array[index] === key) return Number(index); // Key found at index i
  }
  return -1; // Key not found
}

// Calculate the sum of the number in the array
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
/****************************** O(log n) ******************************/
/************** Analyze the problem  ***************/
/*
 1.  Check breakpoint condition => array.length < 2 return array
 2.  Select the pivot to the divede the array => pivot = arr[0]
 3.  Loop through the array and Classify  => arr[1] < pivot   => array left  else array right
 4.  Recursion => sort(arrayLeft) + pivot +  sort(arrayRight)
**/

/****************************** O(log n) ******************************/
const binarySearch = (arr, findNum) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor(arr.length - 1 / 2);
    if (arr[mid] === findNum) return mid;
    if (findNum < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
console.log(binarySearch([5, 3, 8, 1, 2, 7, 4], 4));
/************** Analyze the problem  ***************/
/*
 1.  Find the middle
 2.  
 3.  Loop through the array and Classify  => arr[1] < pivot   => array left  else array right
 4.  Recursion => sort(arrayLeft) + pivot +  sort(arrayRight)
**/

/****************************** O(log n) ******************************/

/****************************** O(n log n) ******************************/

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let arrayLeft = [];
  let arrayRight = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      arrayLeft.push(arr[i]);
    } else {
      arrayRight.push(arr[i]);
    }
  }
  return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)];
};

/************** Analyze the problem  ***************/
/*
 1.  Check breakpoint condition => array.length < 2 return array
 2.  Select the pivot to the divede the array => pivot = arr[0]
 3.  Loop through the array and Classify  => arr[1] < pivot   => array left  else array right
 4.  Recursion => sort(arrayLeft) + pivot +  sort(arrayRight)
**/

/****************************** O(log n) ******************************/

// FOr
function someFunction(n) {
  for (let i = 1; i < n; ++i) {
    console.log(i);
  }
}
// someFunction(10);

/*
-Lần 1: let i = 1 chỉ chạy duy nhất 1 lần => i < n => console.log(i)
-Lần 2: ++i  = 2 => 2 < n => console.log(i)
-Lần 3: ++i  = 3 => 3 < n => console.log(i)
*/
