console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${inputColor.value}, 100%, 50%)`;
});

/*
Part:

HUE: position on the color wheel
Range: 0-360
In code: ${inputColor.value}

Saturation%: how vivid/grey the color is
Range: 0 - 100%
In code: 100%

Lighthnes%: how light or dark
Range: 0 - 100%
In code: 50%

*/

inputRadius.addEventListener("input", () => {
  box.style.borderRadius = inputRadius.value + "%";
});

inputRotation.addEventListener("input", () => {
  box.style.transform = `rotate(${inputRotation.value}deg)`;
});
