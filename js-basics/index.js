//This is my first JavaScript code!
/*
let name = "Jose";
console.log(name);
*/

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

// let firstName = "Jose";
// let lastName = "Reyes";

/*
let interesRate = 0.3;
interesRate = 1;
console.log(interesRate);
*/

/* const interesRate = 0.3;
interesRate = 1;
console.log(interesRate);
*/

// let name = "Jose"; // String literal
// let age = 35; // Number literal

/* let person = {
  name: "Jose",
  aage: 35,
};
console.log(person);
*/

// let isApproved = false; // Bollean Literal
// let firstName = undefined;
// let selectedColor = null;

/* Dote notation
let person = {
  name: "Jose",
  age: 35,
};
person.name = "Jhon";
console.log(person.name);
*/

/* Braket notation
let person = {
  name: "Jose",
  age: 35,
};

let selection = "name";
person["name"] = "Mary";

console.log(person.name);
*/

/*
let selectedColors = ["red", "blue"];
selectedColors[2] = "1";
console.log(selectedColors.length);
*/

// FUNCTIONS

/*function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Jose", "Reyes");

*/

// TYPE OF FUNCTIONS
// Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

// Calculating a value

function square(number) {
  return number * number;
}

// let number = square(2);
//console.log(number);

console.log(square(2));
