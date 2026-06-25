console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here

function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2;
  const area1 = Math.PI * radius1 ** 2;

  const radius2 = diameter2 / 2;
  const area2 = Math.PI * radius2 ** 2;

  const gain = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(gain);
}

// Task 2: Define the function `updatePizzaDisplay` here
function updatePizzaDisplay(pizzaElement, newSize) {
  const displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = displaySize + "px";
}

// Task 3: Define the function `updateOutputColor` here

function updateOutputColor(size1, size2) {
  if (size2 > size1) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
