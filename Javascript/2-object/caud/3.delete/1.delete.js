const person = {
  name: "Jonh",
  age: 37,
  club: "manu",
  getName: function () {
    return `This is ${this.name} and ${this.age} years old`;
  },
};

delete person.club;
delete person.getName;

console.log(person); //{ name: 'Jonh', age: 37 }
