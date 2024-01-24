var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
console.log(1);
const f = createHelloWorld();
console.log(f("a"));
