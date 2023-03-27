const containerControls = document.querySelector("#controls");
console.log(containerControls);
const boxContainer = document.querySelector("#boxes");
console.log(boxContainer);
let sizeBox = 30 + "px";
let typeNewBox;
//

let valueBoxes = 0;
console.log(valueBoxes);
// let valueBoxes = 0;
// console.log(valueBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const totalValueOfBoxes = 11;

// function getSizeOfBox(totalValueOfBoxes) {
//   for (let i = 0; i >= totalValueOfBoxes; i += 1) {
//     // return ``i = 30 + 10;
//     console.log(i);
//   }
// }
// console.log(getSizeOfBox(11));

containerControls.children[0].addEventListener("blur", onSumBoxes);

function onSumBoxes() {
  // if (
  //   Number(containerControls.children[0].value) > 100 ||
  //   Number(containerControls.children[0].value) < 1
  // ) {
  //   alert("Введене число повинно бути не менше 1, але не більше 100");
  // } else {
  valueBoxes = Number(containerControls.children[0].value);
  // }
  console.log(valueBoxes);
}
console.log(valueBoxes);
containerControls.children[1].addEventListener("click", createBoxes);

function createBoxes(valueBoxes) {
  for (let i = 1; i <= valueBoxes; i += 1) {
    console.log(i);
    console.log(valueBoxes);
  }

  typeNewBox = `<div style="background-color:${getRandomHexColor()}, width:${sizeBox}, height:${sizeBox}"></div>`;
  // for (let i = 1; i <= total; i += 1) {}
  boxContainer.insertAdjacentHTML("afterbegin", typeNewBox);
}

containerControls.children[2].addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxContainer.children[0].remove();
}
