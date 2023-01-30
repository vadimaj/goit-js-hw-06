function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
console.log(bodyEl);
const buttonEl = document.querySelector(".change-color");
console.log(buttonEl);
const spanEl = document.querySelector(".color");

function onClickEvent(e) {
  const bodyColorValue = getRandomHexColor();
  bodyEl.style.backgroundColor = bodyColorValue;
  spanEl.textContent = bodyColorValue;
}

buttonEl.addEventListener("click", onClickEvent);
