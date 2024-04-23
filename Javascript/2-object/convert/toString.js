const entries = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];

const person = Object.fromEntries(entries);
console.log(person); // { name: 'John', age: 30, city: 'New York' }
