const array = [{ id: 1, a: "oke" }, { id: 3 }, { id: 9, b: "A" }];
const order = [1, 9, 3];
const newArray = [];

for (let i = 0; i < order.length; i++) {
  const id = order[i];
  const item = array.find((obj) => obj.id === id);
  if (item) {
    newArray.push(item);
  }
}

console.log(newArray); // Output: [{ id: 1 }, { id: 9 }, { id: 3 }]
