const person = {
  name: "Jonh",
  age: 37,
  detail: {
    lastName: "Nguyen",
  },
};

person.lastName = "Nguyen";
const personCopy = JSON.parse(JSON.stringify(person));

personCopy.detail.lastName = "Ngoc"; // person 1 không làm thay đổi person gốc => deep copy

console.log(personCopy);
console.log(person);
