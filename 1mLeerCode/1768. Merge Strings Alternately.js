/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let more = "";
  if (word1.length < word2.length) {
    more = word2.slice(word1.length, word2.length);
  }
  console.log(more);
  return (
    word1
      .split("")
      .map((item, index) => {
        return item + word2.charAt(index);
      })
      .join("") + more
  );
};

var word1 = "ab";
var word2 = "defdss";

mergeAlternately(word1, word2);
console.log(mergeAlternately(word1, word2));
