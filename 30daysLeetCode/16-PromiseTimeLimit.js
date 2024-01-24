/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };
};

const limited = timeLimit(
  (t) =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(50);
      }, t)
    ),
  100
);

limited(150)
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); // "Time Limit Exceeded" at t=100ms
