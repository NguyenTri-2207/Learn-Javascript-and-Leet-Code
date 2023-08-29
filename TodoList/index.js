const inputAddTodoList = document.querySelector("#inputAddTodoList");
const button = document.getElementById("addTodoButton");
const validate = document.querySelector("#validate");
const contentBody = document.getElementById("myUL");

button.addEventListener(
  "click",
  () => {
    if (inputAddTodoList.value == "") {
      validate.innerHTML = "You must write something!";
    } else {
      // clear error
      validate.innerHTML = "";

      // create <li> and add li to display
      var li = document.createElement("li");
      li.innerHTML = inputAddTodoList.value;
      contentBody.appendChild(li);

      // close
      let close = document.createElement("span");
      close.innerHTML = "\u00d7";
      close.classList.add("removeTask");
      li.appendChild(close);

      // clear value input
      inputAddTodoList.value = "";
      saveLocalTodoList();
    }
  },
  false
);

// checked task

contentBody.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveLocalTodoList();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveLocalTodoList();
    }
  },
  false
);

//  save data localStorage

function saveLocalTodoList() {
  localStorage.setItem("dataTodoList", contentBody.innerHTML);
}
function showTodoList() {
  contentBody.innerHTML = localStorage.getItem("dataTodoList");
}

showTodoList();
