const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const oldList = document.querySelector("#ingredients");

const createListOption = (elements) => {
  return elements.map((elem) => {
    const newItem = document.createElement("li");
    newItem.textContent = elem;
    newItem.classList.add("item");

    return newItem;
  });
};

const newListElements = createListOption(ingredients);
oldList.append(...newListElements);
