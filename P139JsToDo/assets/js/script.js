"use strict";

let addBtn = document.querySelector(".text button");
let inputText = document.querySelector(".text input");
let ul = document.querySelector(".text-area");
let spanAlert = document.querySelector(".text-alert");

addBtn.addEventListener("click", function () {
  if (inputText.value.trim() == "") {
    spanAlert.style.display = "block";
    return;
  }

  ul.innerHTML = "";

  let i = 0;
  while (i < inputText.value) {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = i + 1;
    ul.append(li);
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-x";
    li.append(icon);
    spanAlert.style.display = "none";
    icon.onclick = function () {
      li.remove();
    };
    i++;
  }

  inputText.value = "";
});
