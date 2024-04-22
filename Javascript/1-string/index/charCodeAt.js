const string = "The rain in SPAIN stays mainly in the plain";

// console.log(string.charCodeAt(0) > string.charCodeAt(1));

const search = string.search(/ain/);
const match = string.match(/ain/gi);

const matchAll = string.matchAll("ain");

for (const a of matchAll) {
  console.log(a);
  console.log(`Found ${a[0]} start=${a.index} end=${a.index + a[0].length}.`);
}
