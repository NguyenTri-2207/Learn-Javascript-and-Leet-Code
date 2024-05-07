// includes
// const arr = ["Nam", 2, 3, 4, 5, 6];
// console.log(arr.includes("Nam")); // output: true
// console.log(arr.includes("Nam", 2)); // output: false
// console.log(arr.includes(7)); // output: false

const set1 = [1, 2, 3, 4, 5, 5, 6, 2, 3];
const set = new Set(set1);
Array.from(set); //[ 1, 2, 3, 4, 5, 6 ]
