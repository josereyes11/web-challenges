console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');

const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchCaseButton = document.querySelector(
  '[data-js="button-switch-case"]',
);

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

switchCaseButton.addEventListener("click", () => {
  const temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;
});
