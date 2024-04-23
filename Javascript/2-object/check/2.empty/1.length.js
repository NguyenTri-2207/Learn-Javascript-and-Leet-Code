const person = {
  name: "Jonh",
  age: 28,
  getName() {
    console.log(`This is ${this.name}`);
  },
};
if (Object.keys(person).length === 0 && person.constructor === Object) {
  console.log("person is empty");
}
