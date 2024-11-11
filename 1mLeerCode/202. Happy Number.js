/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n == 1) return true;
  const number = n.toString();
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    console.log(number[i] ** 2);
    result += number[i] ** 2;
  }
  return isHappy(Number(result));
};
const n = 19;
isHappy(n);
