const symbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

let shuffledSymbols = [];
let selectedSquares = [];

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function createSquare(symbol) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.innerText = symbol;
  square.addEventListener("click", () => selectSquare(square));
  return square;
}

function selectSquare(square) {
  if (selectedSquares.length < 2) {
    square.classList.add("selected");
    selectedSquares.push(square);

    if (selectedSquares.length === 2) {
      const [square1, square2] = selectedSquares;
      if (square1.innerText === square2.innerText) {
        setTimeout(() => {
          square1.style.visibility = "hidden";
          square2.style.visibility = "hidden";
          selectedSquares = [];
        }, 100);
      } else {
        setTimeout(() => {
          square1.classList.remove("selected");
          square2.classList.remove("selected");
          selectedSquares = [];
        }, 100);
      }
    }
  }
}

function startGame() {
  shuffledSymbols = shuffleArray(symbols);
  const gameContainer = document.getElementById("game-container");

  shuffledSymbols.forEach((symbol) => {
    const square = createSquare(symbol);
    gameContainer.appendChild(square);
  });
}

document.getElementById("start-button").addEventListener("click", startGame);
