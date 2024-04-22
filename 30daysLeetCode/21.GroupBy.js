/**
 * @param {Function} fn
 * @return {Object}
 */
// solution 1
// Array.prototype.groupBy = function (fn) {
//   let result = {};
//   let indexExist;
//   let arrList = [];
//   for (i = 0; i < this.length; i++) {
//     if (indexExist === fn(this[i])) {
//       arrList.push(this[i]);
//     } else {
//       arrList = [this[i]];
//     }
//     result[fn(this[i])] = arrList;
//     indexExist = fn(this[i]);
//   }
//   return result;
// };

Array.prototype.groupBy = function (fn) {
  let result = {};
  for (i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    let item = this[i];
    if (result.hasOwnProperty(key)) {
      //or result[key]

      //   if (Array.isArray(result[key])) {
      result[key].push(item);
      //   } else {
      //
      //     result[key] = [result[key], item];
      //   }
    } else {
      result[key] = [item];
    }
  }
  return result;
};

const a = [{}, [], 1, 2, 3, true, false, null, {}, "hi", 1, 2, 3].groupBy(
  function (item) {
    return typeof item;
  }
);
console.log(a);

// {"boolean":[true,false],"number":[1,2,3,1,2,3],"object":[{},[],null,{}],"string":["hi"]}
