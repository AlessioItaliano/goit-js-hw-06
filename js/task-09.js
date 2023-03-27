const widgetChangesBgCl = document.querySelector(".widget");
const bodyChangesBgCl = document.querySelector("body");
const spanNameChangesBgCl = document.querySelector(".color");
console.log(spanNameChangesBgCl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

widgetChangesBgCl.addEventListener("click", onBtnChangesBgCl);

function onBtnChangesBgCl(event) {
  event = getRandomHexColor();
  bodyChangesBgCl.style.backgroundColor = event;
  spanNameChangesBgCl.textContent = event;
}
