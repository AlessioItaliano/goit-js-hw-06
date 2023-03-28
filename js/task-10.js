const containerControls = document.querySelector("#controls");
const boxContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
containerControls.children[1].addEventListener("click", createBoxes);

function createBoxes() {
  const valueBoxes = Number(containerControls.children[0].value);
  let sizeBox;

  for (let i = 0; i <= valueBoxes; i += 1) {
    sizeBox = 30 + i * 10;
  }

  boxContainer.insertAdjacentHTML(
    "afterbegin",
    `<div style="background-color:${getRandomHexColor()}" width="${sizeBox}px", heigth="${sizeBox}px"></div>`
  );
}

containerControls.children[2].addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
