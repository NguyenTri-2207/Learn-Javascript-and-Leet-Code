const person = {
  name: "Jonh",
  age: 28,
  getName() {
    console.log(`This is ${this.name}`);
  },
};

const isObjectEmpty = (objectName) => {
  return JSON.stringify(objectName) === "{}";
};

console.log(isObjectEmpty(person));
