export function ticTacToe() {
  const main = document.getElementById("ticTacToe");
  const data = new Array(9).fill("");
  const result = data
    .map((item, index) => {
      return `<button id=${index}>${item + "abc"}</button>`;
    })
    .join("");
  return result;
}
