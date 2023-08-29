const optionDisscount = [1, 2, 3, 4];

const a = optionDisscount.map((item, index) => {
  console.log(index);
  var newElement = document.createElement("img");
  newElement.setAttribute(
    "src",
    `./image/thiet-ke-bo-nhan-dien-thuong-hieu-mau-${item}.png`
  );
  //   newElement.setAttribute("width", `540px`);
  //   newElement.setAttribute("height", `full`);

  document.getElementById("imageGroup").appendChild(newElement);
});
console.log(a);
const Next = () => {
  console.log(1);
  imageElement.style.transform = "translateX(552px)";
};
var imageElement = document.getElementById("image");
