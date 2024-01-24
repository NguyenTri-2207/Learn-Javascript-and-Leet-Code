// var lengthOfLongestSubstring = function (s) {
//   const charPositionMap = new Array();

//   for (let leftIndex = 0, rightIndex = 0; rightIndex < s.length; rightIndex++) {
//     const charAtRightIndex = s.charAt(rightIndex);
//     if (charPositionMap.has(charAtRightIndex)) {
//       leftIndex = Math.max(charPositionMap.get(charAtRightIndex), leftIndex);
//     }
//     console.log(charPositionMap);
//     // console.log(charAtRightIndex);
//   }
// };
// lengthOfLongestSubstring("abcabcbb");
// console.log(lengthOfLongestSubstring("abcabcbb"));

// bài 4
// var staticArray = Object.freeze([0, 1, 2]);
// // staticArray.push(6);
// console.log(staticArray);

// bài 5 Array List

// let myObject = { one: "one", two: "two", three: "three" };
// let myArray = Object.values(myObject);
// console.log(myArray);
// let mySet = new Set(myArray);

// console.log(mySet); // Output: Set { 'one', 'two', 'three' }
