// const { createContext, createElement } = require("react");

console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--

for (const program of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = program;
  ol.append(li);
}

/*
for (let i = 15; i >= 0; i--) {
  console.log(i);
}
*/
/*
for (const programs of programnodeingLanguages) {
  console.log(programs);
}
*/
/*
for (let index = 0; index < programmingLanguages.length; index++) {
  console.log("Pramming langueage: " + programmingLanguages[index]);
}
*/
// --^-- write or modify code above this line --^--
