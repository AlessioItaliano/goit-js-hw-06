const validationInput = document.querySelector("#validation-input");
const validationNumber = Number(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
  if (event.currentTarget.value.length === 0) {
    if (validationInput.classList.contains("valid")) {
      validationInput.classList.remove("valid");
    }
    if (validationInput.classList.contains("invalid")) {
      validationInput.classList.remove("invalid");
    }
  } else if (event.currentTarget.value.length === validationNumber) {
    if (validationInput.classList.contains("invalid")) {
      validationInput.classList.remove("invalid");
    } else {
      validationInput.classList.add("valid");
    }
  } else if (event.currentTarget.value.length < validationNumber) {
    if (validationInput.classList.contains("valid")) {
      validationInput.classList.remove("valid");
    } else {
      validationInput.classList.add("invalid");
    }
  } else if (event.currentTarget.value.length > validationNumber) {
    if (validationInput.classList.contains("valid")) {
      validationInput.classList.remove("valid");
    } else {
      validationInput.classList.add("invalid");
    }
  }
}
