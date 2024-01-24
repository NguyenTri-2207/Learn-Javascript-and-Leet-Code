var expect = function (val) {
  const obj = {
    toBe: function (val1) {
      if (val === val1) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val1) {
      if (val === val1) {
        throw new Error("Equal");
      } else {
        return true;
      }
    },
  };
  return obj;
};
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(5)); // throws "Equal"
