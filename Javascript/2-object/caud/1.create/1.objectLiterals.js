const person = {
  name: "Jonh",
  age: 28,
  getName() {
    console.log(`This is ${this.name}`);
  },
};
console.log(person);
