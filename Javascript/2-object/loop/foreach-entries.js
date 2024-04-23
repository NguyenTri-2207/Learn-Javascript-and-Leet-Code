const person = {
  name: "Jonh",
  age: 28,
};

Object.entries(person).forEach(([key, values], index) =>
  console.log(index, key + ":" + values)
);
