/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcd(a, b) {
  //   return b === 0 ? a : gcd(b, a % b);

  while (b !== 0) {
    let c = "";
    c = b;
    b = a % b;
    a = c;
  }
  console.log(a);
  return a;
}

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  let gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
}

const str1 = "ABABAB";
const str2 = "ABAB";

gcdOfStrings(str1, str2);
console.log(gcdOfStrings(str1, str2));
