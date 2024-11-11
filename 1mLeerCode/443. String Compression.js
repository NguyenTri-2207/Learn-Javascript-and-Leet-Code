/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let result = [];
  let couter = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i + 1]) {
      couter++;
    } else {
      result.push(chars[i]);
      if (couter > 1) {
        result = [...result, ...couter.toString().split("")];
      }

      couter = 1;
    }
  }

  chars.length = result.length;

  for (let i = 0; i < result.length; i++) {
    chars[i] = result[i];
  }
  console.log(chars);
  return chars.length;
};

compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]);
//["a","2","b","2","c","3"]
