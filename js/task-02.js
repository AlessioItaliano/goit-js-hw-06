const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const oldList = document.querySelector("#ingredients");

const firstElem = document.createElement("li");
firstElem.textContent = ingredients[0];
firstElem.setAttribute("class", "item");

const secondElem = document.createElement("li");
secondElem.textContent = ingredients[1];
secondElem.setAttribute("class", "item");

const thirdElem = document.createElement("li");
thirdElem.textContent = ingredients[2];
thirdElem.setAttribute("class", "item");

const fourthElem = document.createElement("li");
fourthElem.textContent = ingredients[3];
fourthElem.setAttribute("class", "item");

const fifthElem = document.createElement("li");
fifthElem.textContent = ingredients[4];
fifthElem.setAttribute("class", "item");

const sixthElem = document.createElement("li");
sixthElem.textContent = ingredients[5];
sixthElem.setAttribute("class", "item");

oldList.append(
  firstElem,
  secondElem,
  thirdElem,
  fourthElem,
  fifthElem,
  sixthElem
);
