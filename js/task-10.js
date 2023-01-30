const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");
const boxesArray = [];

createBtnEl.addEventListener("click", onCreateBtnClickEvent);
destroyBtnEl.addEventListener("click", onDestroyBtnClickEvent);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(boxQty) {
  let boxSideSize = 30;
  for (let i = 1; i <= boxQty; i += 1) {
    const string = `<div style = "width: ${boxSideSize}px; height: ${boxSideSize}px; background-color: ${getRandomHexColor()};"></div>`;
    boxSideSize += 10;
    boxesArray.push(string);
  }
}

function destroyBoxes() {
  boxEl.innerHTML = "";
  inputEl.value = "";
  boxesArray.length = 0;
}

function onCreateBtnClickEvent() {
  console.log(createBtnEl.textContent, "button clicked");
  createBoxes(inputEl.value);

  boxEl.innerHTML = boxesArray.join("");
}

function onDestroyBtnClickEvent() {
  console.log(destroyBtnEl.textContent, "button clicked");
  destroyBoxes();
}
