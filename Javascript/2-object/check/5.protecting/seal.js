// Returns true if object is sealed

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
Object.seal(player);

// update name
player.name = "Cristian CR7"; //Working...
delete player.club["2020"]; //Working...
// delete properties
delete player.name; //  Not Working...

console.log(player);

Object.isSealed(player);
