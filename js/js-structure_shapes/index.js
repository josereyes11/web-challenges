console.clear();

import { getRandomColor } from "./utils/randomColor.js";

const root = document.getElementById("root");

function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

const circleElement = Circle();
root.append(circleElement, square, pentagon);
