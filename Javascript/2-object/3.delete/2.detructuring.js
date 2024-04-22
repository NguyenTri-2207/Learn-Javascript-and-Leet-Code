const person = {
  name: "Jonh",
  age: 37,
  club: "manu",
  getName: function () {
    return `This is ${this.name} and ${this.age} years old`;
  },
};

const { club, getName, ...rest } = person;

console.log(rest); //{ name: 'Jonh', age: 37 }
