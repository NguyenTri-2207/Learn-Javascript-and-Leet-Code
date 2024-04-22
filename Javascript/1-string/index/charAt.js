const string = "I want to learn JS";

const resultOne = string.charAt(18);
// return the empty string if the index is greater than the length of the string
// string[0] is the same as charAt, but string[0] return the undefined if the index grater than the length of the string

// custom length method
Object.defineProperty(String.prototype, "lengthCustom", {
  get: function () {
    let length = 0;
    while (this[length] !== undefined) {
      length++;
    }
    return length;
  },
});

// custom charAt

String.prototype.charAtCustom = function (index) {
  if (index < 0 || index >= this.lengthCustom) {
    return -1;
  }
  return this[index];
};

console.log(string.charAtCustom(13));
