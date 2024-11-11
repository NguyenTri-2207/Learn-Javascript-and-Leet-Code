import { ticTacToe } from "./Tic-Tac-Toe/index.js";
import { dataTab } from "./data.js";

const elementTab = document.getElementById("Tab");
const elementResult = document.getElementById("Result");
dataTab.forEach((item) => {
  const nameTab = document.createElement("p");
  nameTab.textContent = item.name;
  nameTab.id = item.id;
  elementTab.appendChild(nameTab);

  nameTab.addEventListener("click", () => {
    const resultItem = document.createElement("div");
    let id = item.id;
    switch (id) {
      case "ticTacToe":
        resultItem.innerHTML = ticTacToe();
        break;
      case "2":
        resultItem.textContent = "oke2";
        break;
      default:
        resultItem.textContent = item.id;
    }
    elementResult.innerHTML = "";
    resultItem.id = item.id;
    elementResult.appendChild(resultItem);
  });
});
