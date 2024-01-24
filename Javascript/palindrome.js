var isPalindrome = function (x) {
  var intArr = Array.from(String(x), (num) => Number(num));

  let j = intArr.reverse().join("");

  if (j === x) {
    return true;
  }
  return false;
};

// console.log(isPalindrome(1213));
