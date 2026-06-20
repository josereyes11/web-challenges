console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

const buttonAdd = document.querySelector('[data-js="add"]');
const buttonSubtract = document.querySelector('[data-js="subtract"]');
const buttonMultiply = document.querySelector('[data-js="multiply"]');
const buttonDivide = document.querySelector('[data-js="divide"]');
const buttonExponent = document.querySelector('[data-js="exponent"]');
const buttonModulo = document.querySelector('[data-js="modulo"]');

const buttonIncreaseByOne = document.querySelector(
  '[data-js="increase-by-one"]',
);
const buttonIncreaseByFive = document.querySelector(
  '[data-js="increase-by-five"]',
);
const buttonDecreaseByOne = document.querySelector(
  '[data-js="decrease-by-one"]',
);
const buttonDecreaseByFive = document.querySelector(
  '[data-js="decrease-by-five"]',
);
const buttonMultiplyByTwo = document.querySelector(
  '[data-js="multiply-by-two"]',
);
const buttonDivideByTwo = document.querySelector('[data-js="divide-by-two"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

buttonAdd.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log(result);
});

buttonSubtract.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log(result);
});

buttonMultiply.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log(result);
});

buttonDivide.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log(result);
});

buttonExponent.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log(result);
});

buttonModulo.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log(result);
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

buttonIncreaseByOne.addEventListener("click", () => {
  operand1++;
  console.log(operand1);
});

buttonIncreaseByFive.addEventListener("click", () => {
  operand1 += 5;
  console.log(operand1);
});

buttonDecreaseByOne.addEventListener("click", () => {
  operand1 -= 1;
  console.log(operand1);
});

buttonDecreaseByFive.addEventListener("click", () => {
  operand1 -= 5;
  console.log(operand1);
});

buttonMultiplyByTwo.addEventListener("click", () => {
  operand1 *= 2;
  console.log(operand1);
});

buttonDivideByTwo.addEventListener("click", () => {
  operand1 /= 2;
  console.log(operand1);
});
// --^-- write your code here --^--
