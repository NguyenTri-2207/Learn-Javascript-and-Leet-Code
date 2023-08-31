const optionDisscount = [
  "Vietnam-Accounting-Standards.jpg",
  "Vietnam-Corporate-Tax-1.jpg",
  "Vietnam-Import-Regulations-An-Indepth-Explanation.jpg",
];

const imageGroup = document.querySelector("#imageGroup");
const ButtonPrevious = document.querySelector(".fa-angle-left");
const ButtonNext = document.querySelector(".fa-angle-right");

var image = "";
let currentIndex = 0;
const totalImages = optionDisscount.length;

// Show Image
optionDisscount.map((item, index) => {
  image += `<img id="image" class="image w-full h-full" src="./image/${item}"/>`;
  imageGroup.innerHTML = image;
});
const imageElement = document.getElementsByClassName("image");

// previous controls
ButtonPrevious.addEventListener("click", () => {
  showSlides(currentIndex - 1);
});

// Next controls
ButtonNext.addEventListener("click", () => {
  showSlides(currentIndex + 1);
});

const showSlides = (index) => {
  if (index < 0) {
    index = totalImages - 1;
  } else if (index >= totalImages) {
    index = 0;
  }
  currentIndex = index;
  imageGroup.style.transform = `translateX(-${currentIndex * 100}%)`;
};

showSlides(currentIndex);
