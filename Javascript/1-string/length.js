String.prototype.fcLength = function () {
  let length = 0;
  let str = this;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
};

Object.defineProperty(String.prototype, "lengthCustom", {
  get: function () {
    let length = 0;
    while (this[length] !== undefined) {
      length++;
    }
    return length;
  },
});
