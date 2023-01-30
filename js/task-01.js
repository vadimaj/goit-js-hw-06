const numbersEls = document.querySelectorAll(".item");
console.log("Number of categories:", numbersEls.length);
numbersEls.forEach((liItem) => {
  console.log("Category:", liItem.firstElementChild.textContent);
  console.log(
    "Elements:",
    liItem.lastElementChild.getElementsByTagName("li").length
  );
});
