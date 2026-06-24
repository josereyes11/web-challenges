console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword === "h4x0r1337") {
  console.log("Welcome! You are logged in as Brunhilde1984");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 7;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 132;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}

/* if (numberOfHotdogs < 5) {
    console.log("€2") 
} else if (numberOfHotdogs > 5) {
    console.log("€1.50")
} else if (numberOfHotdogs <= 99) {
    console.log("€1.50")
} else if (numberOfHotdogs > 100) {
    console.log("€1")
} else if (numberOfHotdogs <= 999999){
    console.log("€1") 
} else {
    console.log("€.10")
}
*/

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Party time!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Jose";

const greeting = "Hello " + (userName === "Melina" ? "Coach" : userName) + "!";

console.log(greeting);
