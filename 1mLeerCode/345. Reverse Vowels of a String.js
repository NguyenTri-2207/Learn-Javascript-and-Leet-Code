/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["u", "e", "o", "a", "i"];

  const sIndex = s.split("").map((item, index) => {
    return { index, item };
  });
  const sVowels = sIndex
    .filter((item) => {
      return vowels.includes(item.item.toLocaleLowerCase());
    })
    .reverse();

  let count = 0;
  sIndex.forEach((item, index) => {
    if (vowels.includes(item.item.toLocaleLowerCase())) {
      console.log(sVowels);
      sIndex[index] = sVowels[count];
      count++;
    }
  });
  return sIndex.map((item) => item.item).join("");
};

const s = "IceCreAm";
console.log(reverseVowels(s));
reverseVowels(s);
