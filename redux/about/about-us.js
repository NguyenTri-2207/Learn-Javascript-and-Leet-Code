import store from "../store.js";

const updateUI = () => {
  document.getElementById("count1").innerText = store
    .getState()
    .numberCake?.toString();
};

store.subscribe(updateUI);
document.getElementById("increment").addEventListener("click", () => {
  console.log(store.getState());
  store.dispatch({
    type: "Increment",
    payload: 1,
  });
});
updateUI();
