/* add last array */
const array = [{ name: "Jonh", age: 26 }];

array.push({ name: "Doom", age: 29 }); //add
array.pop(); //delete
array.push({ name: "Doom", age: 29 }); //add

/* add first array */

array.unshift({ name: "Ace", age: 29 }); //add
array.shift(); //delete
array.unshift(); //add
console.log(array);
