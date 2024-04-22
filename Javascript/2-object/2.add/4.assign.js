const person = {
  name: "Jonh",
  age: 37,
};
const personCopy = Object.assign(person, { club: "manu" });

console.log(person); //{ name: 'Jonh', age: 37, club: 'manu' }
