const counterValueEl = document.querySelector("#value");
let counterValue = Number(counterValueEl.textContent);
counterValue = 0;
const decrementBtnEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  '#counter button[data-action="increment"]'
);

function onClickEvent(e) {
  if (e.currentTarget === decrementBtnEl) {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
    return;
  }
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", onClickEvent);
incrementBtnEl.addEventListener("click", onClickEvent);
