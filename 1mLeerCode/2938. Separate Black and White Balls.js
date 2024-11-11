/**
 * @param {string} s
 * @return {number}
 */
function minimumSteps(s) {
  const stringLength = s.length;
  let steps = 0;
  let countOfOnes = 0;

  for (let i = stringLength - 1; i >= 0; --i) {
    if (s[i] === "1") {
      ++countOfOnes;
      steps += stringLength - i - countOfOnes;
    }
  }
  return steps;
}
const s = "1001";
console.log(minimumSteps(s));
