console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const buttonUppercase = document.querySelector('[data-js="button-uppercase"]');

buttonUppercase.addEventListener("click", () => {
  const oldValue = firstInput.value;
  const newValue = oldValue.toUpperCase();
  firstInput.value = newValue;
});
