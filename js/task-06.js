const inputEl = document.querySelector("input");

function onInputBlur(e) {
  inputEl.classList.remove("valid", "invalid");

  console.log(typeof inputEl.dataset.length);
  if (e.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");

    return;
  }

  inputEl.classList.add("invalid");
}

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("focus", () => (inputEl.value = ""));
