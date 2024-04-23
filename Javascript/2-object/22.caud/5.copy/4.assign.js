const person = {
  name: "Jonh",
  age: 37,
  detail: {
    lastName: "Nguyen",
  },
};
const personCopy = Object.assign(person);
personCopy.name = "Tri"; // personCopy làm thay đổi cả 2 cấp của obj gốc => shallow copy
personCopy.detail.lastName = "Ngoc";

console.log(person); //{ name: 'Tri', age: 37, detail: { lastName: 'Ngoc' } }
console.log(personCopy); //{ name: 'Tri', age: 37, detail: { lastName: 'Ngoc' } }
