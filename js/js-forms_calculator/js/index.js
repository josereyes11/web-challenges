console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const NumberA = Number(data.NumberA);
  const NumberB = Number(data.NumberB);
  const operator = data.operator;

  if (operator === "addition") {
    result = add(NumberA, NumberB);
  }

  if (operator === "subtraction") {
    result = subtract(NumberA, NumberB);
  }
  if (operator === "multiplication") {
    result = multiply(NumberA, NumberB);
  }
  if (operator === "division") {
    result = divide(NumberA, NumberB);
  }

  resultOutput.textContent = result;
});

/*

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);

  switch (data.operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
  }
  resultOutput.textContent = result;
});

*/
