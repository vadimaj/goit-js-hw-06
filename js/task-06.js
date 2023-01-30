const inputEl = document.querySelector("input");

function onInputBlur(e) {
  inputEl.classList.remove("valid", "invalid");
  if (e.currentTarget.value.length > inputEl.dataset.length) {
    console.log("more than 6!");
    inputEl.classList.add("invalid");
    return;
  }
  console.log("less than 6");
  inputEl.classList.add("valid");
}

inputEl.addEventListener("blur", onInputBlur);
