// const fetctData = (callback) => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => callback(null, json))
//     .catch((error) => callback(error));
// };

// fetctData((error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

const fetctData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw Error("Lỗi");
  }
  return await response.json();
};

const main = async () => {
  const a = await fetctData();
  console.log(a);
};

main();
