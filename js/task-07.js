const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(inputEl);
inputEl.addEventListener(
  "input",
  (e) => (spanEl.style.fontSize = `${e.currentTarget.value}px`)
);
