const greetingInput = document.querySelector("#name-input");
const greetintOutput = document.querySelector("#name-output");
console.dir(greetintOutput);
greetingInput.addEventListener("input", onInputWritting);

function onInputWritting(event) {
  greetintOutput.textContent = event.currentTarget.value;
  console.log(event);
}

console.log(greetingInput);

// const greeting = {
//   inputOnScreen: document.querySelector("#name-input"),
//   outputOnScreen: document.querySelector("#name-output"),
// };
// greeting.inputOnScreen.addEventListener("input", onInputWritting);

// function onInputWritting(event) {
//   greeting.outputOnScreen.textContent = event.currentTarget.value;
// }
