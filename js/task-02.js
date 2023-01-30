const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsList = (items) => {
  return items.map((item) => {
    const listEl = document.createElement("li");
    listEl.textContent = item;
    listEl.classList.add("item");
    return listEl;
  });
};

const listItems = makeIngredientsList(ingredients);
ingredientsListEl.append(...listItems);
