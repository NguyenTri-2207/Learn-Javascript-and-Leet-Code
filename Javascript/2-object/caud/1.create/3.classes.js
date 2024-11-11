class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return `This is ${this.name} and ${this.age} years old`;
  }
}

console.log("a");

const person = new Person("Jonh", 29);
console.log(person.getName());
