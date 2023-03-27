const greetingInput = document.querySelector("#name-input");
const greetingOutput = document.querySelector("#name-output");
const greetingName = greetingOutput.textContent;

greetingInput.addEventListener("input", onInputWritting);

function onInputWritting(event) {
  if (Number(event.currentTarget.value) === 0) {
    greetingOutput.textContent = greetingName;
  } else {
    greetingOutput.textContent = event.currentTarget.value;
  }
}

// function onInputWritting(event) {
//   greetintOutpug.textContent = event.currentTarget.value;
// }
