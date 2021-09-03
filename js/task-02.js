const ingredientsEl = document.querySelector("#ingredients");

const itemEl = (array) => array.map((ingredient) => {
  const itemListEl = document.createElement("li");
  itemListEl.textContent = ingredient;
  return itemListEl;
});

  ingredientsEl.append(...itemEl(ingredients));

