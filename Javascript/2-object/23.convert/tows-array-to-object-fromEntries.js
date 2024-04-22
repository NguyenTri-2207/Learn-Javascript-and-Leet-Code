const entries = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];
// check tows array
if (entries[0].constructor === Array) {
  const person = Object.fromEntries(entries);
  console.log(person); // { name: 'John', age: 30, city: 'New York' }
}
