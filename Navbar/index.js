const listItem = [
  { name: "Services", url: "/services" },
  { name: "Resources", url: "/resources" },
  { name: "Partner", url: "/partner" },
  { name: "Contact Us", url: "/contact-us" },
];

const ul = document.querySelector("#listItem");
const header = document.querySelector("#header");
const body = document.querySelector("#body");
const ButtonSetUp = document.querySelector("#set-up-now");

let item = "";
for (let i = 0; i < listItem.length; i++) {
  const className =
    "px-4 text-black font-medium leading-10 hover:text-[#007efe]";
  item += `<li class="${className}"><a href="${listItem[i].url}">${listItem[i].name}</a></li>`;
}
ul.innerHTML = item;

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
  };
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    (document.documentElement.scrollTop > 40 && getOffset(header).top > 40)
  ) {
    header.style.background = "white";
    header.style.boxShadow = "rgba(119, 119, 119, 0.3) 0px 0px 15px 0px";
    ButtonSetUp.style.border = "1px solid #007efe";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
    ButtonSetUp.style.border = "1px solid white";
  }
}
scrollFunction();

// navbar-mobile

const navbarMobile = document.querySelector("#navbar-mobile");
const bumger = document.querySelector(".hamburger");
const menuList = document.querySelector("#menu-list");

navbarMobile.addEventListener("click", () => {
  bumger.classList.toggle("active");
  menuList.classList.toggle("!block");
});

/***********************Slider Banner **************************/

const optionDisscount = [
  "businesswoman-with-arms-crossed",
  "high-rise-buildings-blue-sky",
  "hong-kong-traffic-view",
  "low-angle-shot-axis-towers-tbilisi-georgia-blue-sky",
  "skyline-landscape-chongqing-riverbank-during-sunrise",
];

const imageGroup = document.querySelector("#imageGroup");
const ButtonPrevious = document.querySelector(".fa-angle-left");
const ButtonNext = document.querySelector(".fa-angle-right");

var image = "";
let currentIndex = 0;
const totalImages = optionDisscount.length;

// Show Image
optionDisscount.map((item, index) => {
  image += `<img id="image" class="image w-full h-full" src="./image/${item}.jpg"/>`;
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
