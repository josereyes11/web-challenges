/*
Let's calculate some interesting facts based on how many years you've been practicing a skill!
The program expects the user to provide the number of years as a numerical input.
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days you've been practicing (assume 365 days/year).
2. The estimated number of remaining days to reach a 10-year milestone.
3. The percentage of the milestone you've already completed.
4. The cumulative number of days you've spent practicing, assuming an average of 1 hour of practice per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

/*
let daysPerYearPracticing = 100;
let remainingDaysToMilestone = 365 * 6;
let cumulativeDays = 100 / 24;
*/

console.clear();
const yearsPracticing = Number(process.argv[2]); // This takes the `<years>` entered in the command `node index.js <years>`.
console.log("You've been practicing for: " + yearsPracticing + " years");

const totalDays = yearsPracticing * 365;
console.log("Total days practicing:" + totalDays);

const remainingDaysToMilestone = 10 * 365 - totalDays;
console.log(
  "The estimated number of remaining days to reach a 10-year milestone is: " +
    remainingDaysToMilestone,
);

const milestoneCompleted = (totalDays / (10 * 365)) * 100;
console.log(
  "The percentage of the milestone I've already completed is: " +
    milestoneCompleted +
    "%",
);

const cumulativeDays = totalDays / 24;
console.log(
  "The cumulative number of days you've spent practicing is: " + cumulativeDays,
);
