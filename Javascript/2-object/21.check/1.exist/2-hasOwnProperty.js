const obj = {
  name: "John",
  age: 30,
};

console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // true
console.log(obj.hasOwnProperty("email")); // false
