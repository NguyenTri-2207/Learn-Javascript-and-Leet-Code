// var kidsWithCandies = function (candies, extraCandies) {
//   const maxCadies = Math.max(...candies);

//   const result = candies.map((item) => item + extraCandies >= maxCadies);
//   return result;
// };

// const candies = [2, 3, 5, 1, 3];
// const extraCandies = 3;
// console.log(kidsWithCandies(candies, extraCandies));

var kidsWithCandies = function (candies, extraCandies) {
  const addCandies = candies.map((item) => item + extraCandies);

  const result = addCandies.map((candie) =>
    candies.every((item) => candie >= item)
  );
  console.log(result);

  return result;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
