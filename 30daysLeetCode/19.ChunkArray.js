/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

// solution 1
// var chunk = function (arr, size) {
//   let result = [];
//   for (i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// };

//solution 2

var chunk = function (arr, size) {
  let result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
};

// chunk([1, 2, 3, 4, 5], 1);
(arr = [1, 9, 6, 3, 2]), (size = 3);

a = chunk(arr, size);
console.log(a);
