/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  // Sử dụng thuật toán sắp xếp nổi bọt (bubble sort)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Sử dụng hàm fn để so sánh hai phần tử arr[j] và arr[j + 1]
      if (fn(arr[j]) > fn(arr[j + 1])) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Trả về mảng đã sắp xếp
  return arr;
};

// var sortBy = function (arr, fn) {
//   return arr.sort((a, b) => fn(a) - fn(b));
// };

let arr = [5, 4, 1, 2, 3];
let fn = (x) => x;
const a = sortBy(arr, fn);
