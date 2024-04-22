// solition 1 =>  has condition

const manu = true;

const person = {
  name: "Jonh",
  age: 37,
  ...(manu && { club: "manu" }),
};
console.log(person); //{ name: 'Jonh', age: 37, club: 'manu' }

// solution 2 =>  no has condition

const person1 = {
  name: "Jonh",
  age: 37,
};

//detructuring
console.log({ ...person1, ...{ club: "manu" } }); //{ name: 'Jonh', age: 37, club: 'manu' }
