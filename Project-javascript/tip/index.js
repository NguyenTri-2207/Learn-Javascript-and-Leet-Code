const optionDisscount = [5, 10, 15, 20, 25, 30, 50];
const select = document.getElementById("disscount");

optionDisscount.map((color, selectedIndex) => {
  const option = document.createElement("option");

  option.value = color;
  option.text = color + "%";
  select.add(option);
});

function myFunctions() {
  var serviceQual = document.getElementById("disscount").value;
  var elementBill = document.getElementById("bill").value;
  var elementPeople = document.getElementById("people").value;
  const result = (elementBill * serviceQual) / 100 / elementPeople;

  return (document.getElementById("result").innerHTML = result);
}

document.getElementById("onClick").onclick = function () {
  myFunctions();
};
