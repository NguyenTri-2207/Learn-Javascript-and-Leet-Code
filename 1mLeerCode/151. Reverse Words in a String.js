/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((item) => item.length > 0)
    .reverse()
    .join(" ");
};

const s = "  hello    world  ";
reverseWords(s);
