const obj = {
  name: "John",
  age: 30,
};

if (obj.constructor === Object) {
  console.log("obj is object");
} else {
  console.log("obj is not object");
}
