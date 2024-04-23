"https://anonystick.com/blog-developer/objectfreeze-objectseal-va-objectpreventextensions-can-hieu-ro-su-khac-nhau-trong-object-javascript-2022010388692105";

// Returns true if object is frozen

const player = {
  name: "CR7",
  age: 37,
  club: {
    2020: "Juve",
    2021: "MU",
  },
};
Object.freeze(player);

player.birth = 1987; //Not working
player.club.birth = 1987; //oke
player.name = "Cristian CR7"; //Not working
player.club["2020"] = "VietName"; //Oke

// Note
// chỉ tác dụng đóng băng ở những thuộc tính cao nhất
console.log(player);

console.log(Object.isFrozen(player));
