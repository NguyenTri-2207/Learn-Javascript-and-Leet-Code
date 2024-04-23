function person(name, age) {
  return {
    name,
    age,
    getName() {
      return `This is ${this.name} and ${this.age} years old`;
    },
  };
}
const person1 = person("Jonh", 28);

console.log(person1.getName());

/******************** Other solutions ******************/

console.log(person1.getName.call(person1));
