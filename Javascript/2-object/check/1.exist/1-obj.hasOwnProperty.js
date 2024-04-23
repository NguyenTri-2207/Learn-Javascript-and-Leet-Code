const person = {
  name: "Jonh",
  age: 28,
  getName() {
    console.log(`This is ${this.name}`);
  },
};

person.hasOwnProperty("name"); //true
// way 2
if (Object.hasOwn(person, "foo")) {
  console.log("has property foo");
}
