const person = {
  name: "Jonh",
  age: 29,
};
if (Object.hasOwn(person, "foo")) {
  console.log("has property foo");
}

// mới ra mắt để thay thế cho hasOwnProperty()
