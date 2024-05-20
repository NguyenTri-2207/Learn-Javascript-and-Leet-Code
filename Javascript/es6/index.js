const userObject = {
  id: 1,
  name: "Jonh",
  date: "17/07/2014",
  detailt: {
    age: 26,
    website: "www.google.com",
  },
};
const UserArray = [
  { name: "Jonh", age: 26 },
  { name: "Xam", age: 23 },
  { name: "Keik", age: 22 },
  { name: "Sanl", age: 21 },
];
/*************Destructuring************/

const { id, website, date, ...obj } = userObject; //id => 1
const [user1, ...desUser] = UserArray; //user1 => {name: 'Jonh', age: 26}

// /*************Spread Operator************/ Nếu Rest parameter là âm, thì Speard operator sẽ là dương
// add
const AddListUser = [...UserArray, { name: "Dan", age: 16 }];
const AdduserObject = { ...userObject, birdth: 1996 };
console.log(AdduserObject);
/*************Rest Parameters************/

const [userJonh, ...restElements] = UserArray; //userJonh => {name: 'Jonh', age: 26}
function restTest(...args) {
  console.log(args);
}

restTest(1, 2, 3, 4, 5, 6); // [1, 2, 3, 4, 5, 6]
