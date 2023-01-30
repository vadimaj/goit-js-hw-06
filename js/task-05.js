const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
console.log(spanEl);

inputEl.addEventListener("input", onInputChange);

function onInputChange(e) {
  console.log(e.currentTarget.value);
  spanEl.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    spanEl.textContent = "Anonymous";
  }
}
