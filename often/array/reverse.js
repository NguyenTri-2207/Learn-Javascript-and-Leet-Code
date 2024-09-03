const reverseArr = (arr = []) => arr.reduceRight((t, v) => (t.push(v), t), []);
console.log(reverseArr([1, 2, 3, 4, 5])); // > Array [5, 4, 3, 2, 1]
