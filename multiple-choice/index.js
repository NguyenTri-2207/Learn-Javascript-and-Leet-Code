const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("first");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
console.log("3");
secondFunction();
