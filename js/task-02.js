const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//first type
// const oldList = document.querySelector("#ingredients");

// const firstElem = document.createElement("li");
// firstElem.textContent = ingredients[0];
// firstElem.setAttribute("class", "item");

// const secondElem = document.createElement("li");
// secondElem.textContent = ingredients[1];
// secondElem.setAttribute("class", "item");

// const thirdElem = document.createElement("li");
// thirdElem.textContent = ingredients[2];
// thirdElem.setAttribute("class", "item");

// const fourthElem = document.createElement("li");
// fourthElem.textContent = ingredients[3];
// fourthElem.setAttribute("class", "item");

// const fifthElem = document.createElement("li");
// fifthElem.textContent = ingredients[4];
// fifthElem.setAttribute("class", "item");

// const sixthElem = document.createElement("li");
// sixthElem.textContent = ingredients[5];
// sixthElem.setAttribute("class", "item");

// oldList.append(
//   firstElem,
//   secondElem,
//   thirdElem,
//   fourthElem,
//   fifthElem,
//   sixthElem
// );

//second type
// const oldList = document.querySelector("#ingredients");

// const newElements = ingredients.map((elem) => {
//   const newItem = document.createElement("li");
//   newItem.textContent = elem;
//   newItem.setAttribute("class", "item");

//   return newItem;
// });

// oldList.append(...newElements);

//third type
// const oldList = document.querySelector("#ingredients");

// const createListOption = (elements) => {
//   return elements.map((elem) => {
//     const newItem = document.createElement("li");
//     newItem.textContent = elem;
//     newItem.setAttribute("class", "item");

//     return newItem;
//   });
// };

// const newListElements = createListOption(ingredients);
// oldList.append(...newListElements);

// fourth type
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
