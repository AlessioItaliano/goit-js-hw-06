const validationInput = document.querySelector("#validation-input");
const validationNumber = Number(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
  if (event.currentTarget.value.trim().length === validationNumber) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
