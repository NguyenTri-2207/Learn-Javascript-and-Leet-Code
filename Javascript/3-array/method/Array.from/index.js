//1 Array from a String
Array.from("foo"); // [ "f", "o", "o" ]

//2 Array from a Set

const set = new Set(["foo", "bar", "baz", "foo"]);

console.log(Array.from(set)); //["foo", "bar", "baz"];

//3 tow Array => Array

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);

const valuesArrays = Array.from(map.values()); //[2, 4, 8];

const keysArrays = Array.from(map.keys()); //[ 1, 2, 4 ]
console.log(keysArrays);

//4 Array from a NodeList

// Create an array based on a property of DOM Elements
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));

// 6 Using arrow functions and Array.from()
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6]

Array.from({ length: 5 }, (v, i) => i); // [0, 1, 2, 3, 4]
