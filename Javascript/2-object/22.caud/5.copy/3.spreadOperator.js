const person = {
  name: "Jonh",
  age: 37,
  detail: {
    lastName: "Nguyen",
  },
};

//detructuring
const personCopy = { ...person };
personCopy.name = "Tri";
personCopy.detail.lastName = "Ngoc"; // Tại đây personCopy làm thay đổi cả detail của person gốc => shallpw copy
console.log(person);
console.log(personCopy);
