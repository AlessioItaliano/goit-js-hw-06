const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
const minTextSize = Number(fontSizeControl.getAttribute("min"));
const maxTextSize = Number(fontSizeControl.getAttribute("max"));

textSize.style.fontSize = (maxTextSize - minTextSize) / 2 + "px";

fontSizeControl.addEventListener("input", onSizeControl);

function onSizeControl() {
  let valueSize = Number(fontSizeControl.value);
  textSize.style.fontSize = valueSize + "px";
}
