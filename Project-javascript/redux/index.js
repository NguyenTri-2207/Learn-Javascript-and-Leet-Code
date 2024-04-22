import store from "./store.js";

// Use dispatch

// reducer => use store
const updateUI = () => {
  document.getElementById("count").innerText = store
    .getState()
    .couter.numberCake?.toString();
};
store.subscribe(updateUI);

// Event listeners for buttons

document.getElementById("increment").addEventListener("click", () => {
  console.log(store.getState());
  store.dispatch({
    type: "Increment",
    payload: 1,
  });
});
document.getElementById("increment10").addEventListener("click", () => {
  store.dispatch({
    type: "Increment",
    payload: 10,
  });
});
document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch({
    type: "Decrement",
    payload: 1,
  });
});
document.getElementById("decrement10").addEventListener("click", () => {
  store.dispatch({
    type: "Decrement",
    payload: 10,
  });
});

updateUI();
