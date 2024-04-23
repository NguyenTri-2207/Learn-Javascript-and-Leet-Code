// Returns true if properties can be added to an object

const player = {
  name: "CR7",
  age: 37,
  club: {
    2020: "Juve",
    2021: "MU",
  },
};
// use preventExtension()
Object.preventExtensions(player);

// update name
player.name = "Cristian CR7"; //Working...
player.club["2020"] = "Portugal"; //Working... cấp 2
// Add properties
player.country = "Portugal"; // Not Working....
player.club["2024"] = "VietNam"; // Working... cấp 2
// delete properties
delete player.club["2020"]; // Working...
delete player.age; // Working...

console.log(player);

console.log(Object.isExtensible(player));
