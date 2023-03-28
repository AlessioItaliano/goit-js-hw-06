const containerControls = document.querySelector("#controls");
console.log(containerControls);
const boxContainer = document.querySelector("#boxes");
console.log(boxContainer);
let sizeBox = 30 + "px";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

containerControls.children[1].addEventListener("click", createBoxes);

function createBoxes() {
  const valueBoxes = Number(containerControls.children[0].value);

  for (let i = 0; i <= valueBoxes; i += 1) {
    boxContainer.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color:${getRandomHexColor()}, width:${
        30 + i * 10
      }, heigth:${30 + i * 10}"></div>`
    );
  }
}

containerControls.children[2].addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
