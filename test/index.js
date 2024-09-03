const $ = document.querySelector.bind(document);
const mean = $("#mean");
const resultContainer = $("#result");
const next = $("#next");

const data = [
  { id: 0, vi: "xin chào", en: "Hello" },
  { id: 1, vi: "luyện tập", en: "practice" },
  { id: 2, vi: "câu chào", en: "greeting" },
  { id: 3, vi: "phát triển", en: "develop" },
  { id: 4, vi: "tổ chức", en: "organize" },
  { id: 5, vi: "kỹ năng", en: "skill" },
  { id: 6, vi: "hoạt động", en: "activity" },
  { id: 7, vi: "tăng cường", en: "enhance" },
  { id: 8, vi: "thành công", en: "success" },
  { id: 9, vi: "kỷ luật", en: "discipline" },
  { id: 10, vi: "tiến bộ", en: "progress" },
];

let check = 0;
let dataIndex = 0;

// Function to shuffle a string
function shuffleString(str) {
  let arr = str.split("");
  arr.sort(() => Math.random() - 0.5);
  return arr.join("");
}

// Function to render buttons for the shuffled string
function renderButtons(string, results) {
  resultContainer.innerHTML = "";
  for (let i = 0; i < string.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = string[i];
    resultContainer.appendChild(button);
    button.addEventListener("click", () => {
      if (string[i] === results[check]) {
        button.classList.add("active");
        button.classList.remove("unactive");
        check++;
      } else {
        button.classList.add("unactive");
      }
    });
  }
}

// Function to handle next button click
function handleNextButtonClick() {
  dataIndex++;
  if (dataIndex < data.length) {
    const dataStep = data[dataIndex];
    const results = dataStep.en;
    const string = shuffleString(results);
    mean.innerHTML = dataStep.vi;
    renderButtons(string, results);
  }
  if (dataIndex === data.length - 1) {
    next.style.display = "none"; // Ẩn nút "next" khi chỉ số đạt đến cuối cùng
  }
}

// Initial rendering
const initialDataStep = data[dataIndex];
const initialResults = initialDataStep.en;
const initialString = shuffleString(initialResults);
mean.innerHTML = initialDataStep.vi;
renderButtons(initialString, initialResults);

// Add event listener for next button
next.addEventListener("click", handleNextButtonClick);
