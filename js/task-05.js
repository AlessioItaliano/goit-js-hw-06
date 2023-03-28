const greetingInput = document.querySelector("#name-input");
const greetingOutput = document.querySelector("#name-output");
const greetingName = greetingOutput.textContent;

greetingInput.addEventListener("input", onInputWritting);

function onInputWritting(event) {
  if (Number(event.currentTarget.value.trim()) === 0) {
    greetingOutput.textContent = greetingName;
  } else {
    greetingOutput.textContent = event.currentTarget.value.trim();
    console.log(event.currentTarget.value.trim());
  }
}
