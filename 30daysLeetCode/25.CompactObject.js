/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;

  //   Array
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  //   object
  const compacted = {};
  for (let key in obj) {
    let value = compactObject(obj[key]);
    if (value) {
      compacted[key] = value;
    }
  }

  return compacted;
};
obj = { a: null, b: [false, 1] };
compactObject(obj);
// console.log(compactObject(obj));
