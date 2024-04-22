function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `This is ${this.name} and ${this.age} years old`;
  };
}
const person = new Person("Jonh", 29);
console.log(person);

/******************** Other solutions ******************/

Person.prototype.getName = function () {
  return `This is ${this.name} and ${this.age} years old`;
};
