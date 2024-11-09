/**
 * @param {number[]} arr
 * @return {number[]}
 */

function countBits(n) {
  if (n === 0) return 0;
  let result = [];
  while (n > 0) {
    result.push(n % 2);
    n = Math.floor(n / 2);
  }
  //   console.log(result.reverse().filter((item) => item === 1).length);
  return result.reverse().filter((item) => item === 1).length;
}

// countBits(0);
// console.log(countBits(0));

// cách 2 gọn hơn:
// function countBits(n) {
//   console.log(n.toString(2));
//   return n.toString(2).split("1").length - 1;
// }

var sortByBits = function (arr) {
  const sortNum = arr.sort((a, b) => {
    const bitsA = countBits(a);
    const bitsB = countBits(b);
    console.log(countBits(a));
    if (bitsA === bitsB) {
      return a - b;
    }
    return bitsA - bitsB;
  });
  return sortNum;
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(sortByBits(arr));
