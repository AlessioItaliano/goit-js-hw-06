let counterValue = 0;
const refs = {
  counterList: document.querySelector("#counter"),
  counterValueResult: document.querySelector("#value"),
  minusAction: document.querySelector('[data-action="decrement"]'),
  plusAction: document.querySelector('[data-action="increment"]'),
};

refs.minusAction.addEventListener("click", onMinusBtnAction);
function onMinusBtnAction(event) {
  refs.counterValueResult.textContent = counterValue -= 1;
}

refs.plusAction.addEventListener("click", onPlusBtnAction);
function onPlusBtnAction(event) {
  refs.counterValueResult.textContent = counterValue += 1;
}
