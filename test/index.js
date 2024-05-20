// Loại bỏ id là 1 và 3 ra khỏi mảng, và trả về mảng mới.

const diffItem = (arr = [], otherArr = []) =>
  arr.reduce((accumulator, currentValue) => {
    if (!otherArr.includes(currentValue.id)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

const a = [
  { id: 1, name: "Jonh" },
  { id: 2, name: "Ame" },
  { id: 3, name: "Oh" },
  { id: 4, name: "Hank" },
];
const b = [1, 3];

console.log(diffItem(a, b)); // > Array [1, 4, 5]
