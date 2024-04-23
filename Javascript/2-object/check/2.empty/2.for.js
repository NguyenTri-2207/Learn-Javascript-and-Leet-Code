const person = {
  name: "Jonh",
  age: 28,
  getName() {
    console.log(`This is ${this.name}`);
  },
};

const isObjectEmpty = (objectName) => {
  for (let prop in person) {
    if (objectName.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

console.log(isObjectEmpty(person));
