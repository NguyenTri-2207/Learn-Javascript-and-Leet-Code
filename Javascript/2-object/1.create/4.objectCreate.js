const objPrototype = {
  getName() {
    return `This is ${this.name} and ${this.age} years old`;
  },
};
const person = Object.create(objPrototype);
person.name = "Jonh";
person.age = 28;
console.log(person.getName());
