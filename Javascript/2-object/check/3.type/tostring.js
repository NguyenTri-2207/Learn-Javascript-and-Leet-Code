const obj = {
  name: "John",
  age: 30,
};

if (Object.prototype.toString.call(obj) === "[object Object]") {
  console.log("obj is object");
} else {
  console.log("obj is not object");
}
