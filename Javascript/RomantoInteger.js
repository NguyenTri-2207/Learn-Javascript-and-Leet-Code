var romanToInt = function (s) {
  let result;
  if (s.length > 0) {
    switch (s) {
      case "I":
        result = 1;
        break;
      case "V":
        result = 5;
        break;
    }
  } else {
    result = null;
  }
  return result;
};
// console.log(romanToInt("v"));
// romanToInt("III");
1;

const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

var romanToInt1 = function (S) {
  let ans = 0;
  for (let i = S.length - 1; ~i; i--) {
    let num = roman[S.charAt(i)];
    console.log(roman["X"]);
    if (4 * num < ans) ans -= num;
    else ans += num;
  }
  return ans;
};
// romanToInt1("III");
