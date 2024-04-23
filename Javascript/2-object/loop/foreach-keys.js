const person = {
  name: "Jonh",
  age: 28,
};

Object.keys(person).forEach((item, index) =>
  console.log(index, item + ":" + person[item])
);
