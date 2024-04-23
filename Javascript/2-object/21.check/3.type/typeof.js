const obj = {
  name: "John",
  age: 30,
};

if (typeof obj === "object" && !Array.isArray(obj) && obj !== undefined) {
  console.log("obj is object");
} else {
  console.log("obj is not object");
}
